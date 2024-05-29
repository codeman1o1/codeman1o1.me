FROM oven/bun:1-alpine

WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY package.json bun.lockb ./

RUN bun install --production --frozen-lockfile

COPY . .

RUN bun run build

USER bun

EXPOSE 3000/tcp

ENTRYPOINT [ "bun", "run", ".output/server/index.mjs" ]
