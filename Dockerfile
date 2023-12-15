From node:hydrogen-alpine3.19
WORKDIR /userdetails/
COPY public/ /userdetails/public
COPY src/ /userdetails/src
COPY package.json /userdetails/
RUN npm install
CMD ["npm", "start"]
