FROM node:18 AS build
WORKDIR /app
COPY /frontend/package*.json ./
RUN npm install
COPY /frontend/ ./
RUN npm run build

# stage 2 : serve the react app using NGINX
FROM nginx:1.21.3-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
