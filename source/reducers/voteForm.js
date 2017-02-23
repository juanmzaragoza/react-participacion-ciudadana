import {VOTE_SUCCESS, VOTE_FAILURE} from '../constants/RequestActionTypes'
import * as utils from '../lib/utils'

const initialState = {
  success: false,
  error: {
    isError: false,
    message: ""
  }
}

export default function result(state = initialState, action) { 
  switch (action.type) {
    case VOTE_SUCCESS:
      return Object.assign({}, state, {
        success: true,
        error: Object.assign({}, state.error, {
          isError: false,
          message: ""
        })
      })
    case VOTE_FAILURE:
      return Object.assign({}, state, {
        success: false,
        error: Object.assign({}, state.error, {
          isError: true,
          message: action.error
        })
      })
    default:
      return state

  }
}