# Use official Node.js runtime
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first (for caching)
COPY app/backend/package*.json ./

# Install dependencies
RUN npm install --production

# Copy application code
COPY app/backend .

# Expose application port
EXPOSE 5000

# Start the app
CMD ["node", "index.js"]

