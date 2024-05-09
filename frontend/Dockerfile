FROM node:latest

WORKDIR /app

RUN npm install -g @angular/cli
RUN ng new spotifly --directory . --minimal
COPY . .

EXPOSE 3000

CMD ["ng", "serve", "--port", "3000"]