import {MAIN_SEARCH_BY_TEXT} from 'constants/ActionTypes'

const initialState = {
	searchItemsByText: ''
}

export default function mainSearchBox(state = initialState, action) {
  	switch (action.type) {
      case MAIN_SEARCH_BY_TEXT:
          return Object.assign({}, state, {
            searchItemsByText: action.text
          })

    	default:
      		return state
  	}
}