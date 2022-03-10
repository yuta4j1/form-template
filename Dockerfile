#==================================================
# Build Layer
FROM node:16-slim as build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build && npm run build:server

#==================================================
# Package install Layer
FROM node:16-slim as node_modules

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci --only=production

#==================================================
# Run Layer
FROM gcr.io/distroless/nodejs:16

WORKDIR /app

ENV NODE_ENV=production

COPY --from=build /app/dist /app/dist
COPY --from=build /app/server/login.ejs /app/dist/assets/
COPY --from=node_modules /app/node_modules /app/node_modules

RUN tree .

CMD ["dist/app"]