FROM node:20-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Make sure public and views directories exist
RUN mkdir -p public/css views

# Build CSS
RUN npm run build

# Run tests after simplifying the app
RUN npm test

EXPOSE 3000
CMD [ "node", "app.js" ]