FROM node:18-alpine  AS build


WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build 

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/nginx.conf

COPY nginx/portfolio.conf /etc/nginx/conf.d/portfolio.conf

# COPY nginx/certs/          /etc/nginx/certs/

EXPOSE 443

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
