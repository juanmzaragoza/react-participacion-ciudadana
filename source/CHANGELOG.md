# Change Log
Todos los cambios notables del proyecto a partir de la version 0.4.0 seran documentados en este archivo.

El formato esta basado en [Keep a Changelog](http://keepachangelog.com/)
y este proyecto se adhiere a  [Semantic Versioning](http://semver.org/).

## [Unreleased]
## Added
- Pruebas unitarias de acciones
- Refactor de llamadas a API

## [1.2.0] - 2018-03-28
## Changed
- Se modificaron los acceso directos del index para que sean configurados a través de la galería 'HOME' teniendo en cuenta que el campo autor contendrá el destino del link rendereado donde, si contiene ${web_url}, se reemplazará por la la url del frontend

## [1.1.0] - 2018-02-08
## Changed
- Configuracion de urls de las redes sociales del footer a través del archivo de configuracion

## [1.0.0] - 2017-11-09
## Changed
- Se cambiaron estadisticas de suscripciones por participacion en reuniones

## [0.4.7] - 2017-07-27
## Changed
- Metodo logout para eliminar el token creado
- Fix refresco de token

## [0.4.6] - 2017-07-17
## Changed
- Validacion de captcha en API - Antes estaba en el frontend

## [0.4.5] - 2017-07-11
## Changed
- Fix mensajes de error en el login

## [0.4.4] - 2017-07-03
## Changed
- Fix formulario de contacto externo en index y footer

### Added
- Campo mailto en config.json

## [0.4.3] - 2017-06-15
## Changed
- Fix mensajes error en API de usuarios cuando el error devuelto es 400

## [0.4.2] - 2017-06-12
## Changed
- Refactor de de rutas gracias al ruteo global de webpack
- Fix mensaje 'Failed to fetch' cuando la api esta caida
- Typos en pagina 404

## [0.4.1] - 2017-06-01
### Added
- Captcha en el formulario de resetear password.
- Archivo UPGRADE.md.

## [0.4.0] - 2017-05-15
### Added
- Nueva forma de deploy. Se cambio NodeJS por Apache.

### Changed
- Imagenes genericas cuando no existe una en el sistema.
- Entorno de desarrollo.

### Fixed
- Formacion del host en el componente de reset password
  (fallaba el host por un problema de expresiones regulares)
