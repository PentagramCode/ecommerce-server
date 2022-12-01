FROM node:18

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install --save --silent --legacy-peer-deps --ignore-engines

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]