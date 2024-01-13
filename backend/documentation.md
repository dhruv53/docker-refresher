# Setting up & run docker image and conatiner for node.js project
## Basics of Docker
### 1. Open a node.js project in vs code.
### 2. Create a 'Dockerfile' in the project directory
### 3. Add the following code in the Dockerfile.
```
FROM node:17-alpine
WORKDIR ./app
COPY . .
RUN npm install
EXPOSE 4000
CMD ["node", "app.js"]
```
### 4. Create a .dockerignore file in the directory
### 5. Add 'node_modules' in the '.dockerignore' file
### 6. Build Image
```
docker build -t myapp .
```
### 7. List docker images
```
docker images
```
### 8. Run docker container
```
docker run --name container-1 -p 4000:400 -d myapp
```
### 9. Stop docker container
```
docker stop container-1
```
### 10. Start existing docker container
```
docker start container-1
```
### 11. Remove/Delete docker
#### a. ```docker image rm myapp -f```
#### b. ```docker container rm container-1 -f```
#### c. ```docker system prune -a```

### 12. Tagging your image during build using : 
```
docker build -t myapp:v1
```
## 2. Using Volumes to update project in realtime
* Need nodemon only for node projects
### 1. Include nodemon in the Dockerfile
```
RUN npm install -g nodemon
```
```
FROM node:17-alpine
RUN npm install -g nodemon
WORKDIR /app
COPY . . 
RUN npm install
EXPOSE 4000
CMD ["npm","run","dev"]
```
### 2. Include dev script in package.json
```
"scripts":{
    .
    .
    "dev": "nodemon -L app.js"
}
```
### 3. Build container 
```
docker build -t myapp:nodemon .
```
### 4. Use Volumes 
```
docker run --name container-1 -p 4000:4000 --rm -v C:\Users\Admin\OneDrive\Desktop\Learn\docker:/app -v /app/node_modules myapp:nodemon
```