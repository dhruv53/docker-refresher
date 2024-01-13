# Docker Introduction
## Overview
Welcome to the world of Docker! This document serves as a beginner's guide to understanding Docker, a powerful platform for building, shipping, and running applications in containers. Whether you're a developer, sysadmin, or IT professional, Docker can streamline your development and deployment processes.

## What is Docker?
Docker is a containerization platform that enables you to package applications and their dependencies into lightweight, portable containers. Containers are isolated environments that encapsulate an application and its dependencies, ensuring consistency and reproducibility across different environments.

## Key features of Docker include:

1. Portability: Containers run consistently across different environments, from development to production.
2. Isolation: Applications and dependencies are encapsulated, preventing conflicts and ensuring a clean environment.
3. Efficiency: Containers share the host OS kernel, reducing overhead and resource usage compared to traditional virtualization.
4. Scalability: Easily scale applications by running multiple instances of containers.

## Getting Started
* Installation:
To get started with Docker, you'll need to install the Docker Engine on your machine. Visit the Docker website to download and install Docker for your operating system.

### Basic Concepts
1. Images:
An image is a lightweight, standalone, and executable package that includes everything needed to run a piece of software, including the code, runtime, libraries, and system tools.

2. Containers:
A container is an instance of a Docker image. It runs in isolation on the host system and includes its own file system, processes, and network.

3. Dockerfile:
A Dockerfile is a script that contains instructions for building a Docker image. It specifies the base image, sets up the environment, and defines the steps to run the application.

## Hello World Example
Let's start with a simple "Hello World" example to familiarize yourself with Docker. Create a file named Dockerfile with the following content:
```
# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Define environment variable
ENV NAME World

# Run app.py when the container launches
CMD ["python", "app.py"]
```
Create a Python script named app.py:
```
print(f"Hello, {os.environ['NAME']}!")
```
Build the Docker image:
```
docker build -t hello-world .
```
Run the Docker container:
```
docker run hello-world
```
Congratulations! You've just run your first Docker container.

## Next Steps
Explore the documentation.md in ./backend folder for docker basics.

Next chekout docker-compose.yaml

Happy containerizing!