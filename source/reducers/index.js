import { combineReducers } from 'redux'
import indexItems from './indexItems'
import requestStatics from './requestStatics'
import pagination from './pagination'
import mainSearch from './mainSearch'
import results from './results'
import sectionObras from './sectionObras'
import sectionProyectos from './sectionProyectos'
import sectionHDYV from './sectionHDYV'
import communeFilter from './communeFilter'
import categoryFilter from './categoryFilter'
import result from './result'

import { routerReducer as routing } from 'react-router-redux'

const app = combineReducers({
	routing,
	indexItems,
	requestStatics,
	pagination,
	mainSearch,
	results,
	sectionObras,
	sectionProyectos,
	sectionHDYV,
	communeFilter,
	categoryFilter,
	result
})

export default app