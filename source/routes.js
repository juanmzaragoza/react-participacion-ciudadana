import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './pages/App'
import Index from './pages/Index'
import Obras from './pages/Obras'
import Proyectos from './pages/Proyectos'
import HoracioDiegoVos from './pages/HoracioDiegoVos'
import ReunionesVecinos from './pages/ReunionesVecinos'
import Results from './pages/Results'
import ProyectosResults from './pages/ProyectosResults'
import ObrasResults from './pages/ObrasResults'
import Result from './pages/Result'
import NotFoundPage from './pages/NotFoundPage'

export default (
	<Route path="/" component={App}>
  		<IndexRoute component={Index}/>

  		<Route path="/obras" component={Obras}/>
  		<Route path="/proyectos" component={Proyectos}/>
      <Route path="/horacio_diego_y_vos" component={HoracioDiegoVos}/>
      <Route path="/reuniones_de_vecinos" component={ReunionesVecinos}/>

  		<Route path="/resultados" component={Results} />
  		<Route path="/resultados/obras/:id_state" component={ObrasResults} />
  		<Route path="/resultados/proyectos/:id_category" component={ProyectosResults} />

  		<Route name="content_obra" path="/obra/:id_result" component={Result} />
      <Route name="content_evento" path="/evento/:id_result" component={Result} />

  		<Route path="*" component={NotFoundPage} />

  	</Route>
)
