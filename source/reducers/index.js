import { combineReducers } from 'redux'
import indexItems from 'reducers/indexItems'
import requestStatics from 'reducers/requestStatics'
import pagination from 'reducers/pagination'
import mainSearch from 'reducers/mainSearch'
import results from 'reducers/results'
import headerSection from 'reducers/headerSection'
import bodySection from 'reducers/bodySection'
import communeFilter from 'reducers/communeFilter'
import categoryFilter from 'reducers/categoryFilter'
import tagFilter from 'reducers/tagFilter'
import result from 'reducers/result'
import user from 'reducers/user'
import loginForm from 'reducers/loginForm'
import commentForm from 'reducers/commentForm'
import registrationForm from 'reducers/registrationForm'
import voteForm from 'reducers/voteForm'
import changePasswordForm from 'reducers/changePasswordForm'
import captcha from 'reducers/captcha'
import subscription from 'reducers/subscription'

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
	registrationForm,
	voteForm,
	changePasswordForm,
	captcha,
	subscription
})

export default app