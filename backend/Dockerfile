FROM node:20-alpine AS dev

RUN apk add --no-cache libc6-compat

WORKDIR /app

ENV NODE_ENV development

COPY --chown=node:node . .

RUN npm ci

USER node
