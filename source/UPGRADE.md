Este documento es una guia para actualizar el "`Frontend React Participación Ciudadana`". Asegurese que existe la actualización de la versión actual a la versión a que quiere actualizar como "Actualización de `x.x.x` a `y.y.y`".

## Actualización de `1.0.0` a `1.1.0`

Realice los siguientes pasos para actualizar el código:

    git checkout .
    git fetch
    git fetch --tags
    git checkout v1.1.RC-3

Agregar al final del archivo config/config.json los campos `facebook_url`, `twitter_url`, `instagram_url` (ver archivo `config/config.default.json`). Por ej.: 

    ...
    ,
    "facebook_url": "https://www.facebook.com/baparticipacion/",
    "twitter_url": "https://twitter.com/baparticipacion/",
    "instagram_url": "https://www.instagram.com/baparticipacionciudadana/",
    ...

Luego reconstruya el código ejecutando:

    npm run build:prod

Finalmente reinicie el servidor Apache.

## Actualización de `0.4.7` a `1.0.0`

Realice los siguientes pasos para actualizar el código:

    git checkout .
    git fetch
    git fetch --tags
    git checkout v1.0.0

Luego reconstruya el código ejecutando:

    npm run build:prod

Finalmente reinicie el servidor.

## Actualización de `0.4.6` a `0.4.7`

Realice los siguientes pasos para actualizar el código:

    git checkout . st
    git fetch
    git fetch --tags
    git checkout v00.04.07

Luego reconstruya el código ejecutando:

    npm run build:prod

Configurar el archivo config/config.json con el campo `token_refresh` (ver archivo `config/config.default.json`). Recordar que es un archivo JSON, por lo tanto, NO OLVIDAR LA COMA ENTRE CAMPOS. Por ej.:

    "token_refresh": 5

Finalmente reinicie el servidor.

## Actualización de `0.4.5` a `0.4.6`

Realice los siguientes pasos para actualizar el código:

    git checkout .
    git fetch
    git fetch --tags
    git checkout v00.04.06

Luego reconstruya el código ejecutando:

    npm run build:prod

Configurar el archivo config/config.json con el campo `google` (ver archivo `config/config.default.json`). Por ej.:

    "captcha_site_key": API Key de la aplicacion

Finalmente reinicie el servidor.

## Actualización de `0.4.4` a `0.4.5`

Realice los siguientes pasos para actualizar el código:

    git checkout .
    git fetch
    git fetch --tags
    git checkout v00.04.05

Luego reconstruya el código ejecutando:

    npm run build:prod

Finalmente reinicie el servidor.

## Actualización de `0.4.3` a `0.4.4`

Realice los siguientes pasos para actualizar el código:

    git checkout .
    git fetch
    git fetch --tags
    git checkout v00.04.04

Agregar al final del archivo config/config.json el campo `mailto` (ver archivo `config/config.default.json`). Por ej.:

    "mailto": "baparticipacionciudadana@buenosaires.gob.ar"

Luego reconstruya el código ejecutando:

    npm run build:prod

Finalmente reinicie el servidor.

## Actualización de `0.4.2` a `0.4.3`

Realice los siguientes pasos para actualizar el código:

    git checkout .
    git fetch
    git fetch --tags
    git checkout v00.04.03

Luego reconstruya el código ejecutando:

	npm run build:prod

Finalmente reinicie el servidor.

## Actualización de `0.4.1` a `0.4.2`

Realice los siguientes pasos para actualizar el código:

    git checkout .
    git fetch
    git fetch --tags
    git checkout v00.04.02

Luego reconstruya el código ejecutando:

	npm run build:prod

Finalmente reinicie el servidor.

## Actualización de `0.4.0` a `0.4.1`

Realice los siguientes pasos para actualizar el código:

    git checkout .
    git fetch
    git fetch --tags
    git checkout v00.04.01

Luego reconstruya el código ejecutando:

	npm run build:prod

Finalmente reinicie el servidor.

## Actualización de `0.3.x` a `0.4.0`

La versión actual (`0.4.0`) necesita de:
* Apache 2.2 (o superior) con mod rewrite activado

Para actualizar la versión asegurese que el servidor ejecutado con:

    export NODE_ENV=production && node server.js

en la versión `0.3.x` no se encuentre levantado. En caso afirmativo, mate el proceso.

Luego realice los siguientes pasos para actualizar el código:

    git checkout .
    git fetch
    git fetch --tags
    git checkout v00.04.00

Luego continue la instalación siguiendo los pasos del archivo `README.md` exceptuando copiar el archivo `config/config.default.json` a `config/config.json` debido a que no hubo cambios en la configuración.
