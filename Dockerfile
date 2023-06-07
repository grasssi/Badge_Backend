 # Create image based on the official Node 6 image from the dockerhub
FROM node:18.16.0

# Create an environment variable for MongoDB URI
#ENV MONGODB_URI='mongodb://localhost:27017/Badge_DataBase'

# Get all the code needed to run the app
COPY . /usr/src/app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Install dependecies
RUN npm install
RUN npm install -g nodemon


# Expose the port the app runs in
EXPOSE 5000


# Serve the ap
CMD [ "nodemon", "server.js"]