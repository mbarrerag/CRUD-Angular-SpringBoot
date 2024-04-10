# Stage 1: Build the application
FROM ubuntu:latest AS build

# Instalar OpenJDK 18
RUN apt-get update && \
    apt-get install -y openjdk-18-jdk

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el proyecto Maven y construir la aplicación
COPY . .

# Construir la aplicación Spring Boot usando Gradle
RUN ./gradlew bootJar --no-daemon

# Stage 2: Crear la imagen final
FROM openjdk:18-jdk

# Exponer el puerto 8180
EXPOSE 8180

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el archivo JAR desde la etapa de construcción
COPY --from=build /app/build/libs/crudlab-1.jar /app.jar

# Definir el comando para ejecutar la aplicación
ENTRYPOINT ["java", "-jar", "/app.jar"]
