# Frontend React Participación Ciudadana

## Requerimientos

* NodeJS v6.8.1

## Instalación

Ejecutar en el raiz del proyecto

		npm install

Copiar el archivo ´config/config.default.json´ a ´config/config.json´ y configurarlo con la url donde se encuentra instalada la API de Participacion ciudadana (Symfony2/NodeJs).

Ejecutar aplicación
		
		export NODE_ENV=production && node server.js

## Pruebas

Desde un navegador, ingrese a la home de la aplicacion (definida en el ServerName) junto con el puerto configurado en ´config/config.json´. Por ejejmplo: http://localhost:3002/
