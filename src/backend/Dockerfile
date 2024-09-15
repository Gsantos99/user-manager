FROM node:latest

WORKDIR /app

COPY . .

RUN rm -rf node_modules
RUN npm install

CMD ["npm", "start"]

EXPOSE 8800