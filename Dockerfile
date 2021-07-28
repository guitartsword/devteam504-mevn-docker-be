FROM node:14-alpine

WORKDIR /app

COPY package.json package.json
COPY yarn.lock yarn.lock

RUN yarn install --frozen-lockfile

COPY src src
COPY tsconfig.json tsconfig.json

RUN yarn build
CMD ["node", "build/src"]