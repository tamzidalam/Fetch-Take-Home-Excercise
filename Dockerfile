FROM node:14.5.0-alpine

WORKDIR /api

COPY . .

RUN npm install

EXPOSE 5001

CMD ["npm", "start"]