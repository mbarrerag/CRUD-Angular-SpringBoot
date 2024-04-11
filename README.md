![image](https://github.com/mbarrerag/CRUD-Angular-SpringBoot/assets/101472701/42005ec3-ff91-4b63-b265-c847c08f4269)

# Laboratorio CRUD - Universidad Nacional de Colombia

Este repositorio contiene el proyecto del Laboratorio CRUD desarrollado por el Grupo 3 - EventosUN, como parte del curso de Ingeniería de Software II en la Facultad de Ingeniería de la Universidad Nacional de Colombia.

## Integrantes del Equipo
- Breiner Estiven Lopez Fuentes
- Juan Carlos Prieto Calderón
- Miller Estiven Barrera Gonzalez
- Nicolás Martínez López

## Profesor
- Hernando Rodriguez Gonzalez

## Objetivos

### Objetivo General
Familiarizar al equipo de desarrollo con la creación, normalización e implementación de bases de datos, así como su conexión con una interfaz de usuario y un backend, a través de un laboratorio basado en un caso planteado. Además, busca enseñar el proceso de despliegue de la aplicación en un entorno de producción para que pueda ser accedido a través de un navegador web.

### Objetivos Específicos
1. Diseñar la base de datos: Identificar los requisitos del sistema y crear un diseño que refleje las entidades relevantes (municipios, viviendas y personas) del problema planteado, estableciendo relaciones y atributos adecuados, junto con restricciones de integridad para asegurar la coherencia y validez de los datos.
2. Normalizar la base de datos: Eliminar redundancias y evitar problemas de actualización anómala. Se busca organizar la estructura de la base de datos en formas normales (1NF, 2NF, 3NF) para mejorar la eficiencia del sistema y mantener la consistencia de los datos.
3. Implementar el modelo relacional: Traducir el diseño lógico de la base de datos en un esquema relacional con tablas, columnas y restricciones de clave primaria y foránea. Haciendo uso de herramientas como MySQL Workbench, PostgreSQL o SQLite para crear la estructura de la base de datos y definir las relaciones entre las tablas.
4. Desarrollar la lógica de la aplicación: Creación de backend con Spring Boot para gestionar las solicitudes de los usuarios, operaciones CRUD y respuestas a la base de datos. Desarrollar frontend con Angular 17 para la interacción del usuario y las operaciones CRUD.
5. Desplegar la aplicación: Consiste en llevar tanto el backend como el frontend, junto con la base de datos, desde el entorno de desarrollo a un entorno de producción accesible para los usuarios finales.

## Enunciado del Problema
Supongamos el siguiente universo del discurso sobre municipios, viviendas y personas. Cada persona sólo puede habitar en una vivienda y ser residente en un municipio, pero puede ser propietaria de varias viviendas. Nos interesa también conocer las personas que dependen del cabeza de familia (C.F.).

## Candidatos a Entidades, Relaciones y Atributos
Ver [Laboratorio CRUD - Grupo 3 - EventosUN.pdf](https://github.com/mbarrerag/CRUD-Angular-SpringBoot/files/14950772/Laboratorio.CRUD.-.Grupo.3.-.EventosUN.pdf)

## Análisis de Supuestos
Ver [Laboratorio CRUD - Grupo 3 - EventosUN.pdf](https://github.com/mbarrerag/CRUD-Angular-SpringBoot/files/14950772/Laboratorio.CRUD.-.Grupo.3.-.EventosUN.pdf)

## Versión Preliminar del Esquema E/R
Ver [Laboratorio CRUD - Grupo 3 - EventosUN.pdf](https://github.com/mbarrerag/CRUD-Angular-SpringBoot/files/14950772/Laboratorio.CRUD.-.Grupo.3.-.EventosUN.pdf)

## Cardinalidades
Ver [Laboratorio CRUD - Grupo 3 - EventosUN.pdf](https://github.com/mbarrerag/CRUD-Angular-SpringBoot/files/14950772/Laboratorio.CRUD.-.Grupo.3.-.EventosUN.pdf)

## Análisis de Redundancias
Ver [Laboratorio CRUD - Grupo 3 - EventosUN.pdf](https://github.com/mbarrerag/CRUD-Angular-SpringBoot/files/14950772/Laboratorio.CRUD.-.Grupo.3.-.EventosUN.pdf)

## Identificación de las Llaves
Ver [Laboratorio CRUD - Grupo 3 - EventosUN.pdf](https://github.com/mbarrerag/CRUD-Angular-SpringBoot/files/14950772/Laboratorio.CRUD.-.Grupo.3.-.EventosUN.pdf)

## Transformación de E/R a Relacional
Ver [Laboratorio CRUD - Grupo 3 - EventosUN.pdf](https://github.com/mbarrerag/CRUD-Angular-SpringBoot/files/14950772/Laboratorio.CRUD.-.Grupo.3.-.EventosUN.pdf)

## Descripción General de Atributos
Ver [Laboratorio CRUD - Grupo 3 - EventosUN.pdf](https://github.com/mbarrerag/CRUD-Angular-SpringBoot/files/14950772/Laboratorio.CRUD.-.Grupo.3.-.EventosUN.pdf)

## Despliegue del Sistema
- **Repositorio GitHub:** [CRUD-Angular-SpringBoot](https://github.com/mbarrerag/CRUD-Angular-SpringBoot.git)
- **Base de Datos (Clever-Cloud):**
  ```
  mysql -h bu8oap1jrwq7einyckdi-mysql.services.clever-cloud.com -P 3306 -u ujmblas2vrdqp7wi -p bu8oap1jrwq7einyckdi
  ```
  Password: `fQsJRQHkxf73QSYUhadn`
- **Backend (Railway):** [CRUD-Angular-SpringBoot Backend](https://crud-angular-springboot-production.up.railway.app/api/personas)

Para acceder a otros endpoints, reemplace `/personas` en la URL por el nombre del endpoint deseado. Los endpoints disponibles se detallan en el documento adjunto.

¡Gracias por revisar nuestro proyecto!
