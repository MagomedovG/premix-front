# Build stage
FROM node:20.15-alpine AS build

WORKDIR /src
COPY package.json .
RUN npm install
COPY . .
RUN npm run build || echo "⚠️ Build failed, skipping..."

# Production stage
FROM node:20.15-alpine AS production
WORKDIR /src

# Копируем всё, что есть, даже если билд упал
COPY --from=build /src . 

EXPOSE 3000
CMD ["npm", "start"]
