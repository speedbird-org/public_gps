FROM node:lts-buster-slim
RUN chown -R node /usr/local/lib/node_modules

USER node
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./

RUN npm install --production
COPY --chown=node:node . .
