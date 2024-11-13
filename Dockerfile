FROM node:18-bullseye-slim

WORKDIR /app/

COPY package.json /app
RUN npm install

COPY dist/src/* /app

ENTRYPOINT ["node", "main.js"]