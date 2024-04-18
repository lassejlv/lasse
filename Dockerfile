# Use a lightweight Node image as base
FROM node:latest as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json .

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN yarn build

# Use a lightweight Node image for serving the production build
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy the built app from the previous stage
COPY --from=build /app/dist ./dist

# Install serve to run the app
RUN npm install -g serve

# Expose port 3001
EXPOSE 3001

# Command to run the app
CMD ["serve", "-s", "dist", "-l", "3001"]
