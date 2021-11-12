FROM node:16-alpine
RUN npm i -g npm@8.1.0
RUN npm i -g npm@8.1.3
RUN npm i -g pnpm
RUN pnpm i -g node-dev
RUN mkdir /usr/src
COPY . /usr/src
WORKDIR /usr/src
RUN pnpm install
ENV PORT 3000