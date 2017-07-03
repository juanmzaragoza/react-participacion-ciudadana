# Change Log
Todos los cambios notables del proyecto a partir de la version 0.4.0 seran documentados en este archivo.

El formato esta basado en [Keep a Changelog](http://keepachangelog.com/)
y este proyecto se adhiere a  [Semantic Versioning](http://semver.org/).

## [Unreleased]
## Added
- Pruebas unitarias de acciones
- Refactor de llamadas a API

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
