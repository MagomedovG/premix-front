# Build stage
FROM node:20.15-alpine AS build

WORKDIR /src

ARG NEXT_PUBLIC_YANDEX_METRICA_ID
ARG NEXT_PUBLIC_YANDEX_VERIFICATION
ENV NEXT_PUBLIC_YANDEX_METRICA_ID=$NEXT_PUBLIC_YANDEX_METRICA_ID
ENV NEXT_PUBLIC_YANDEX_VERIFICATION=$NEXT_PUBLIC_YANDEX_VERIFICATION

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

# Production stage
FROM build AS production

COPY --from=build /src/.next  ./.next
COPY --from=build /src/node_modules  ./node_modules
COPY --from=build /src/package.json  ./package.json
COPY --from=build /src/public  ./public

EXPOSE 3000

CMD npm start
