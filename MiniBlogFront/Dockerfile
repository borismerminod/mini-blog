# ---------- Build ----------
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---------- Runtime (SSR) ----------
FROM node:20-alpine AS runtime
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=4000

# Copie uniquement le build final
COPY --from=build /app/dist/MiniBlogFront ./dist/MiniBlogFront

EXPOSE 4000

# Lance le serveur SSR
CMD ["node", "dist/MiniBlogFront/server/server.mjs"]
 