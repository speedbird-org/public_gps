FROM node:14.17.0-buster-slim
RUN chown -R node /usr/local/lib/node_modules
RUN apt-get update && \
    apt-get install -y build-essential \
    wget \
    python3 \
    make \
    gcc \
    libc6-dev

#RUN npm install pm2 -g

USER node
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
RUN npm install --production
COPY --chown=node:node . .

#EXPOSE 3000 5000 5001 9229
#ENV PM2_PUBLIC_KEY sp3afmbeg2cu5te
#ENV PM2_SECRET_KEY mm31y5hyq6q8wg6
#CMD ["pm2-runtime", "dist/app/server.js"]
