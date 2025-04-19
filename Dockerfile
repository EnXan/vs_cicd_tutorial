FROM node:21-latest
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm test
EXPOSE 3000
CMD [ "node", "app.js" ]