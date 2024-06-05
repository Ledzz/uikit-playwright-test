FROM node:20
FROM mcr.microsoft.com/playwright:jammy
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

# Get the needed libraries to run Playwright
# RUN apt-get update && apt-get -y install libnss3 libatk-bridge2.0-0 libdrm-dev libxkbcommon-dev libgbm-dev libasound-dev libatspi2.0-0 libxshmfence-dev

COPY package.json /app/
COPY tsconfig.json /app/

RUN npm install

COPY . /app/
