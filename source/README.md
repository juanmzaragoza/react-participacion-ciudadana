# Frontend React Participación Ciudadana

## Requerimientos

* NodeJS v6.8.1

## Instalación

Ejecutar en el raiz del proyecto

		npm install

Copiar el archivo ´config/config.default.json´ a ´config/config.json´ y configurarlo con la url donde se encuentra instalada la API de Participacion ciudadana (NodeJs):

	{
		"port": puerto de exposicion del frontend,
		"api_url": "url_donde_se_encuentra_instalada_la_api_node (por ej.: http://localhost:3001/api/)",
		"share": {
		"facebook": {
			"url": La url para compartir en FB: "https://www.facebook.com/dialog/share",
			"app_id": Aplicacion ID creada por un usuario desarrollador en FB. Por ej.: 145634995501895
		},
		"twitter": {
			"url": La url para compartir en twitter: "https://twitter.com/intent/tweet"
		}
	}

Para la configuracion de "facebook" ver documentacion en https://developers.facebook.com/docs/apps/register para crear el "app_id".

Ejecutar aplicación
		
		export NODE_ENV=production && node server.js

## Pruebas

Desde un navegador, ingrese a la home de la aplicacion (definida en el ServerName) junto con el puerto configurado en ´config/config.json´. Por ejejmplo: http://localhost:3002/
