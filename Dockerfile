
FROM --platform=linux/amd64 node:alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install -force

COPY . .

RUN npm run build

EXPOSE 3000

CMD    ["npm","start"]

