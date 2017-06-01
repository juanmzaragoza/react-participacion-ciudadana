# Change Log
Todos los cambios notables del proyecto a partir de la version 0.4.0 seran documentados en este archivo.

El formato esta basado en [Keep a Changelog](http://keepachangelog.com/)
y este proyecto se adhiere a  [Semantic Versioning](http://semver.org/).

## [Unreleased]
### Changed
- Refactor de de rutas gracias al ruteo global de webpack.

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