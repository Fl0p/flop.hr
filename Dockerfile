FROM node:23

WORKDIR /app

COPY . .

RUN corepack enable

RUN yarn install --immutable

ARG CF_ZONE_ID
ARG CF_API_TOKEN
ARG CF_TUNNEL_ID

RUN yarn dns

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
