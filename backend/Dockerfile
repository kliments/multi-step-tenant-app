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

# Use the official Node.js image for running the application
FROM node:16

# Copy the installed node_modules and application code from the build stage
COPY --from=build /app ./

# Install the PostgreSQL client
RUN apt-get update && apt-get install -y postgresql-client

# Command to run the backend application in development mode
CMD ["npm", "run", "start:dev"]
