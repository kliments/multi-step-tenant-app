# Use the official Node.js 16 image as the base image for building the application
FROM node:16 AS build

# Set the working directory inside the container to /app
WORKDIR /app

# Copy package.json and package-lock.json (if it exists) to the working directory
COPY package*.json ./

# Install the application's dependencies
RUN npm install

# Copy the rest of the application source code into the container
COPY . .

# Build the application for production
RUN npm run build

# Use the official Nginx image with the Alpine Linux variant for the production server
FROM nginx:alpine

# Copy the Nginx configuration file into the container
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built application files from the previous build stage to the Nginx directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to allow external traffic to access the application
EXPOSE 80

# Command to run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
