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
import tagFilter from './tagFilter'
import result from './result'
import user from './user'
import loginForm from './loginForm'
import commentForm from './commentForm'
import registrationForm from './registrationForm'

import { routerReducer as routing } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

const app = combineReducers({
	routing,
	form: formReducer,
	indexItems,
	requestStatics,
	pagination,
	mainSearch,
	results,
	headerSection,
	bodySection,
	communeFilter,
	categoryFilter,
	tagFilter,
	result,
	user,
	loginForm,
	commentForm,
	registrationForm
})

export default app