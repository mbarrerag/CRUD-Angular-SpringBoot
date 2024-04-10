# Stage 1: Build the application
FROM ubuntu:latest AS build

# Install OpenJDK 18
RUN apt-get update && \
    apt-get install -y openjdk-18-jdk

# Set the working directory in the container
WORKDIR /app

# Copy the Maven project and build the application
COPY . .

# Build the Spring Boot application using Gradle
RUN ./gradlew bootJar --no-daemon

# Stage 2: Create the final image
FROM openjdk:18-jdk

# Expose port 8180
EXPOSE 8180

# Set the working directory in the container
WORKDIR /app

# Copy the JAR file from the build stage
COPY --from=build /app/build/libs/crudlab-1.jar /app.jar

# Define the command to run the application
ENTRYPOINT ["java", "-jar", "/app.jar"]
