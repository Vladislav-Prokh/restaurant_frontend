FROM node:latest AS build

WORKDIR /usr/local/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/local/app/dist/restaurant_frontend /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

