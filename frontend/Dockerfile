FROM node:latest

# Set the working directory
WORKDIR /app

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy packages JSON
COPY package*.json .

# Install dependencies
RUN npm install

# Copy code of application
COPY . .

# Expose app in port 3000
EXPOSE 3000

# Run server
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "3000"]
