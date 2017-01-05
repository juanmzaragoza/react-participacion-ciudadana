import {REQUEST_CONTENT_SUCCESS,REQUEST_CONTENT,REQUEST_CONTENT_FAILURE} from '../constants/RequestActionTypes'
import * as utils from '../lib/utils'

const initialState = {
  isFetching: false,
  errorRequest: false,
  content: {}
}

export default function result(state = initialState, action) { 
  switch (action.type) {
    case REQUEST_CONTENT:
      return Object.assign({}, state, {
        isFetching: true,
        errorRequest: false
      })

    case REQUEST_CONTENT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        errorRequest: false,
        content: action.content
      })

    case REQUEST_CONTENT_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorRequest: true
      })

    default:
      return state

  }
}