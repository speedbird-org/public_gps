FROM node:12.16.1-alpine3.11
RUN chown -R node /usr/local/lib/node_modules

USER node
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
RUN npm install --production
COPY --chown=node:node . .

# CMD ["node","server.js"]
