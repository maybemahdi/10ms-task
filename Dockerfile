# 1. Use official Node image to install dependencies and build
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files first for better caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of your source code
COPY . .

# Build the Next.js app
RUN npm run build

# 2. Use a lightweight Node image for production
FROM node:18-alpine AS runner

WORKDIR /app

# Copy only what is needed to run
COPY --from=builder /app/package.json /app/package-lock.json /app/next.config.ts ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["npm", "start"]
