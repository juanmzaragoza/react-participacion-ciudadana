# Frontend React Participación Ciudadana

## Requerimientos

* NodeJS v6.8.1
* Apache 2.2 (o superior) con mod rewrite activado
* API Participacion Ciudadana v0.4.2 (http://git-asi.buenosaires.gob.ar/usuarioQA/asi-127-api-participacion-ciudadana.git)

## Instalación 

Clonar el proyecto en cualquier directorio en el que tenga acceso de lectura y escritura desde http://git-asi.buenosaires.gob.ar/usuarioQA/asi-109-api-participacion-ciudadana.git
Moverse a la carpeta `source/`

        $ cd source

En adelante la llamaremos `PROJECT_ROOT`.

Ejecutar en el raiz del proyecto

	    $ rm node_modules/* -r
	    $ npm install

Copiar el archivo `config/config.default.json` a `config/config.json` y configurarlo con la url donde se encuentra instalada la API de Participacion ciudadana (NodeJs):

	{
		"port": puerto de exposicion del frontend,
		"api_url": "url_donde_se_encuentra_instalada_la_api_node (por ej.: http://localhost:3001/api/)",
		"mailto": Correo de contacto que aparece en el footer y en la pagina principal,
		"share": {
		"facebook": {
			"url": La url para compartir en FB: "https://www.facebook.com/dialog/share",
			"app_id": Aplicacion ID creada por un usuario desarrollador en FB. Por ej.: 145634995501895
		},
		"twitter": {
			"url": La url para compartir en twitter: "https://twitter.com/intent/tweet"
		},
		"google": {
			"captcha_site_key": API Key de la aplicacion. Por ej.: 6LfPjxsUAAAAAOSEIFZ8Gn5soshEhfvy7-omfXsp,
			...
		},
		"token_refresh": 5
	}

Para la configuracion de "Facebook" ver documentacion en https://developers.facebook.com/docs/apps/register para crear el "app_id".

Para la configuracion del captcha de "Google" ver documentacion https://www.google.com/recaptcha/admin para crear el "captcha_site_key" (Site key) y el "captcha_secret_key" (Secret key).

Compilar el proyecto (generará el proyecto compilador dentro de la carpeta `dist/`):

	    $ npm run build:prod
	    
Crear un Virtual Host para la aplicacion usando la siguiente configuracion como ejemplo:

    <VirtualHost *:80>
		DocumentRoot "PROJECT_ROOT/dist"
		ServerName URL_DEL_PROYECTO
		DirectoryIndex index.html
		<Directory "PROJECT_ROOT/dist/">
			AllowOverride All
			Allow from All
			Require all granted
		</Directory>
		ErrorLog PROJECT_ROOT/dist/error.log
		CustomLog PROJECT_ROOT/dist/access.log combined
	</VirtualHost>


## Actualización

Ver archivo UPGRADE.md para 


## Pruebas

Desde un navegador, ingrese a la home de la aplicacion (definida en el ServerName) junto con el puerto configurado en `config/config.json`. Por ejejmplo: http://pc-react.localhost/