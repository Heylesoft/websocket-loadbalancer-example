FROM node:10-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY ./build ./build

CMD [ "npm", "start" ]