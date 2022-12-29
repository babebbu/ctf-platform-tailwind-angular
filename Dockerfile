# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:18 as build
# Set the working directory
RUN pwd
RUN ls
WORKDIR /app
RUN pwd
RUN ls
COPY . .
RUN pwd
RUN ls
RUN npm install
# Generate the build of the application
RUN npm run build --prod

# Stage 2: Serve app with nginx server
FROM nginx:latest

RUN pwd
RUN ls
COPY nginx.conf /etc/nginx/nginx.conf

RUN pwd
RUN ls
RUN pwd
RUN ls
WORKDIR /code

RUN pwd
RUN ls

#TODO: Correct this line, /app/dist has ctf-platform
COPY --from=build /app/dist /usr/share/nginx/html
RUN rm -f /usr/share/nginx/html/index.html
RUN cp -rf /usr/share/nginx/html/*/* /usr/share/nginx/html

EXPOSE 8080:8080
CMD ["nginx", "-g", "daemon off;"]
