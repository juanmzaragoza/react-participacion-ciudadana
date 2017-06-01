Este documento es una guia para actualizar el "`Frontend React Participación Ciudadana`". Asegurese que existe la actualización de la versión actual a la versión a que quiere actualizar como "Actualización de `x.x.x` a `y.y.y`".

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