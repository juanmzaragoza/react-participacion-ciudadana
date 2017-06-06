import {REQUEST_ITEM_SUCCESS,REQUEST_ITEM,REQUEST_ITEM_FAILURE} from 'constants/RequestActionTypes'
import * as utils from 'lib/utils'

const initialState = {
  limit: 25,
  page: 1,
  isFetching: false,
  errorRequest: false,
  items: []
}

export default function indexItems(state = initialState, action) { 
  switch (action.type) {
    case REQUEST_ITEM:
      return Object.assign({}, state, {
        isFetching: true,
        errorRequest: false
      })

    case REQUEST_ITEM_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        errorRequest: false,
        page: state.page + 1,
        items: utils.arrayUnion(state.items, action.items, utils.areEntitiesEqual)//Object.assign({}, state.events, {})//action.events
      })

    case REQUEST_ITEM_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorRequest: true
      })
    

    default:
      return state

  }
}