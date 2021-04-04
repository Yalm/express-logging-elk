FROM node:14.15.0-alpine
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD npm run start:debug
EXPOSE 3000