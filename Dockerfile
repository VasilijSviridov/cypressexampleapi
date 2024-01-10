# Use an official Node runtime as a base image
FROM node:16

# Install Xvfb and other dependencies
RUN apt-get update && \
    apt-get install -y xvfb libgtk-3-0 libnss3 libxss1 libasound2 libgbm1

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
COPY cypress.config.js ./

# Install Cypress dependencies
RUN npm install

RUN rm -f @cucumber/gherkin-streams/testdata/good/minimal.feature 

# Install X11 utilities (optional, but might be needed)
RUN apt-get install -y x11-utils

# Copy the entire project to the working directory
COPY . .

# Set up environment variables for Xvfb
ENV DISPLAY=:99

# Expose the Cypress GUI port
EXPOSE 8080

# Start Xvfb and run Cypress tests with the new configuration file location
CMD ["bash", "-c", "Xvfb :99 -screen 0 1024x768x16 & sleep 3 && npx cypress run --record --key 7bc36823-a3f5-4df0-85c5-a031ff04653e"]
