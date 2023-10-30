FROM node:18-alpine
WORKDIR /app/api-users
COPY package.json .
RUN npm install
COPY . ./
EXPOSE 3504
CMD ["npm", "run", "dev"]