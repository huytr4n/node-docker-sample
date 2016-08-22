FROM mhart/alpine-node:4.2.1

# Install npm package
WORKDIR /home/app

# Install global node modules
RUN npm install -g nodemon
RUN npm install -g lab@10.7.1

# Install packages
ADD package.json /home/package.json
RUN cd /home && npm install

# Add neccessary files before we start
ADD . /home/app
