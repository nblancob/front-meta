FROM node:14

WORKDIR /front-meta

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm","start"]
