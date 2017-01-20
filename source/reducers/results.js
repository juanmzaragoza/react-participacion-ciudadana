import {REQUEST_RESULT_SUCCESS,REQUEST_RESULT,REQUEST_RESULT_FAILURE} from '../constants/RequestActionTypes'
import * as utils from '../lib/utils'

const initialState = {
  limit: 25,
  page: 1,
  pageCount: 1,
  isFetching: false,
  errorRequest: false,
  items: [],
  selectedFilters: {}
}

export default function results(state = initialState, action) { 
  switch (action.type) {
    case REQUEST_RESULT:
      return Object.assign({}, state, {
        isFetching: true,
        errorRequest: false
      })

    case REQUEST_RESULT_SUCCESS:
      return Object.assign({}, state, {
        limit: parseInt(action.limit),
        isFetching: false,
        errorRequest: false,
        page: action.apiPage,
        pageCount: action.apiPageTotal,
        items: action.append? utils.arrayUnion(state.items, action.items, utils.areEntitiesEqual):action.items,//Object.assign({}, state.events, {})//action.events
        selectedFilters: action.filters
      })

    case REQUEST_RESULT_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorRequest: true
      })

    default:
      return state

  }
}