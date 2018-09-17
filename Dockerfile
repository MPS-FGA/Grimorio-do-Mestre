FROM node:10-alpine

WORKDiR /app

RUN apk add --no-cache bash

COPY /MasterGrimoire/package.json /app/MasterGrimoire/

WORKDIR /app/MasterGrimoire

RUN yarn install
