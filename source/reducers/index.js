import { combineReducers } from 'redux'
import indexItems from './indexItems'
import requestStatics from './requestStatics'
import pagination from './pagination'
import mainSearch from './mainSearch'
import results from './results'
import headerSection from './headerSection'
import bodySection from './bodySection'
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
	headerSection,
	bodySection,
	communeFilter,
	categoryFilter,
	result
})

export default app