# Example Dockerfile for the backend service
FROM node:latest

# Install PostgreSQL client
RUN apt-get update && apt-get install -y postgresql-client

# Other Dockerfile commands...
WORKDIR /app
COPY . .
RUN npm install

CMD ["npm", "run", "start:dev"]
