FROM node:18-alpine3.18

WORKDIR /usr
COPY package.json ./
COPY package-lock.json ./
COPY server.js ./
COPY public ./public

RUN apk add --update --no-cache libc6-compat
RUN apk add --update --no-cache \
  make \
  g++ \
  automake \
  autoconf \
  libtool \
  nasm \
  libjpeg-turbo-dev
RUN npm install

CMD [ "node", "./server.js" ]