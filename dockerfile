# Step 1: Build the Next.js app
# Use an official Node.js runtime as a parent image
FROM node:18.17.1-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (for better caching)
COPY package.json package-lock.json ./
# Install dependencies
RUN npm install
# Copy the rest of the application code
COPY . .


# Step 2: Create a smaller image for running the app
FROM node:18.17.1-alpine AS runner

# Set the working directory inside the container
WORKDIR /app

# Copy built assets and node_modules from the builder stage
COPY --from=builder /app ./

# Expose port 3000 to the outside world
EXPOSE 3000

# Set the environment to production
ENV NODE_ENV=production

# Command to run your app
CMD ["npm", "start"]
