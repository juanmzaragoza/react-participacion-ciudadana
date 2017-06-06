import fetch from 'isomorphic-fetch'
import * as types from 'constants/ActionTypes'

export const searchItems = (text) => {
	//hacer una busqueda aca
  	return{
	    type: 'MAIN_SEARCH_BY_TEXT',
	    text: text
  	}
}