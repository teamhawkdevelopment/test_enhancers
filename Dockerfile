FROM node:14

WORKDIR /usr/src/app

COPY package.json .
COPY yarn.lock .
COPY swagger.json .

RUN yarn install
COPY . .
RUN yarn build

EXPOSE 8000

CMD [ "node", "build/index.js" ]