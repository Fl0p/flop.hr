import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';

interface CloudflareConfig {
  tunnel: string;
  ingress: {
    hostname?: string;
    service: string;
  }[];
}

interface DNSRecord {
  type: 'CNAME';
  name: string;
  content: string;
  proxied: boolean;
}

class CloudflareDNSManager {
  private readonly headers: HeadersInit;
  private readonly baseUrl: string;

  constructor() {
    const apiToken = process.env.CF_API_TOKEN;
    const zoneId = process.env.CF_ZONE_ID;
    const tunnelId = process.env.CF_TUNNEL_ID;

    if (!apiToken || !zoneId || !tunnelId) {
      throw new Error('CF_API_TOKEN, CF_ZONE_ID, and CF_TUNNEL_ID environment variables are required');
    }

    this.headers = {
      'Authorization': `Bearer ${apiToken}`,
      'Content-Type': 'application/json',
    };
    this.baseUrl = `https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`;
  }

  private getTunnelId(): string {
    const configPath = path.join(__dirname, 'config.yml');
    try {
      const configFile = fs.readFileSync(configPath, 'utf8');
      const config = yaml.load(configFile) as CloudflareConfig;
      return config.tunnel;
    } catch (error) {
      throw new Error(`Error reading config.yml: ${error}`);
    }
  }

  private async getExistingRecord(hostname: string): Promise<string | null> {
    const response = await fetch(`${this.baseUrl}?name=${hostname}`, {
      headers: this.headers,
    });

    if (response.ok) {
      const data = await response.json();
      const records = data.result;
      return records.length > 0 ? records[0].id : null;
    }
    return null;
  }

  async createOrUpdateDNSRecord(hostname: string): Promise<void> {
    const tunnelId = this.getTunnelId();
    const tunnelUrl = `${tunnelId}.cfargotunnel.com`;
    const existingRecordId = await this.getExistingRecord(hostname);

    const dnsRecord: DNSRecord = {
      type: 'CNAME',
      name: hostname,
      content: tunnelUrl,
      proxied: true,
    };

    let response: Response;
    if (existingRecordId) {
      // Update existing record
      response = await fetch(`${this.baseUrl}/${existingRecordId}`, {
        method: 'PUT',
        headers: this.headers,
        body: JSON.stringify(dnsRecord),
      });
    } else {
      // Create new record
      response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(dnsRecord),
      });
    }

    if (response.ok) {
      console.log(`Successfully ${existingRecordId ? 'updated' : 'created'} DNS record for ${hostname}`);
    } else {
      const error = await response.json();
      console.error(`Error ${existingRecordId ? 'updating' : 'creating'} DNS record:`, error);
    }
  }
}

async function main() {
  try {
    const manager = new CloudflareDNSManager();
    const configPath = path.join(__dirname, 'config.yml');
    const configFile = fs.readFileSync(configPath, 'utf8');
    const config = yaml.load(configFile) as CloudflareConfig;

    console.log(`Config: ${JSON.stringify(config)}`);

    const tunnelId = process.env.CF_TUNNEL_ID;
    if (tunnelId !== config.tunnel) {
      console.log(`Tunnel ID: ${tunnelId} - ${config.tunnel}`);
      throw new Error('Tunnel ID does not match');
    }

    for (const rule of config.ingress) {
      if (rule.hostname) {
        console.log(`Creating or updating DNS record for ${rule.hostname} rule: ${JSON.stringify(rule)}`);
        let response = await manager.createOrUpdateDNSRecord(rule.hostname);
        console.log(`Response: ${JSON.stringify(response)}`);
      }
    }
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();