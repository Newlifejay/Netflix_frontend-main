# Use Node.js runtime
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy dependencies first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy full project
COPY . .

# Expose React dev server port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]