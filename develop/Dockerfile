# Overleaf Web Service for Render
FROM node:18-alpine

# Install system dependencies
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    git \
    bash \
    curl \
    && rm -rf /var/cache/apk/*

# Set working directory
WORKDIR /overleaf

# Copy package files
COPY package*.json ./
COPY services/web/package*.json ./services/web/
COPY libraries/ ./libraries/
COPY patches/ ./patches/

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Set environment variables for production
ENV NODE_ENV=production
ENV PORT=3000

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1

# Start the web service
CMD ["node", "services/web/app.mjs"] 