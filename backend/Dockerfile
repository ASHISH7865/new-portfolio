FROM node:18
WORKDIR /usr/src/app
RUN apt-get update
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 1337
CMD ["npm", "run" ,"develop"]
