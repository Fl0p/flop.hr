FlopCoin home
===


1) cloudflared tunnel create my-tunnel
2) copy generated key-id-id-id.jey to connfig/cloudflared/keys/key.json
3) .env.example > .env put add required values and load it
4) update port con docker compose.yml differ from 3006 (for local prod expose)
5) check with 'docker compose up -d'
6) add github secrets for runner ENV_FILE KEY_JSON with content from pp 2 and 3 accordingly
7) make push to github
