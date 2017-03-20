import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './pages/App'
import Index from './pages/Index'
import Obras from './pages/Obras'
import Proyectos from './pages/Proyectos'
import TrabajandoJuntos from './pages/TrabajandoJuntos'
import HoracioDiego from './pages/HoracioDiego'
import ReunionesMinistros from './pages/ReunionesMinistros'
import Results from './pages/Results'
import ProyectosResults from './pages/ProyectosResults'
import ObrasResults from './pages/ObrasResults'
import Result from './pages/Result'
import NotFoundPage from './pages/NotFoundPage'
import Registro from './pages/Registro'
import EnsureNotLoggedInContainer from './pages/EnsureNotLoggedInContainer'
import ValidarEmail from './pages/ValidarEmail'

export default (
	<Route path="/" component={App}>
  		<IndexRoute component={Index}/>

  		<Route path="/obras" component={Obras}/>
  		<Route path="/proyectos" component={Proyectos}/>
      <Route path="/trabajando_juntos" component={TrabajandoJuntos}/>
      <Route path="/horacio_y_diego" component={HoracioDiego}/>
      <Route path="/reuniones_de_ministros" component={ReunionesMinistros}/>

  		<Route path="/resultados" component={Results} />
  		<Route path="/resultados/obras/:id_state" component={ObrasResults} />
  		<Route path="/resultados/proyectos/:id_category" component={ProyectosResults} />

  		<Route name="content_obra" path="/obra/:id_result" component={Result} />
      <Route name="content_evento" path="/evento/:id_result" component={Result} />

      //estas paginas no se tienen que mostrar cuando el usuario esta logueado
      <Route component={EnsureNotLoggedInContainer}>
        <Route path="/registro" component={Registro}/>
        <Route path="/verificacion" component={ValidarEmail}/>
      </Route>

  		<Route path="*" component={NotFoundPage} />

  	</Route>
)
