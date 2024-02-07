FROM node:16

WORKDIR /app/src

COPY package*.json ./
    
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]