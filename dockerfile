FROM node:12

WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./

RUN npm install

# Bundle the app source
COPY . .

# expose port 5000
EXPOSE 5000
CMD [ "npm", "start" ]