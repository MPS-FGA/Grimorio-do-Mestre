FROM node:10-alpine

WORKDIR /app

RUN apk add --no-cache bash

ADD . /app
