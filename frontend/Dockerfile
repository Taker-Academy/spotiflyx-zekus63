FROM node:latest

WORKDIR /app

RUN npm install -g @angular/cli
RUN ng new spotiflyx --directory . --minimal
RUN rm -rf src/
COPY . .

EXPOSE 3000

CMD ["ng", "serve", "--port", "3000"]
