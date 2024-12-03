# Stage 1: Build the Node.js application:
FROM node:22 AS build
#test
# Set the working directory in the container
WORKDIR /app 
#/usr/src/app/


# Copy package.json and yarn.lock to the working directory
COPY package.json  ./

# Install the dependencies
RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN yarn build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf  

# Copy the build output from the first stage to the Nginx HTML directory
#COPY --from=build /usr/src/app/dist /usr/share/nginx/html
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port the app runs on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
