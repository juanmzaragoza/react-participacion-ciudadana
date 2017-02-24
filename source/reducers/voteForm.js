import {VOTE_SUCCESS, VOTE_FAILURE, REQUEST_VOTATION_SUCCESS,REQUEST_VOTATION,REQUEST_VOTATION_FAILURE} from '../constants/RequestActionTypes'
import * as utils from '../lib/utils'

const initialState = {
  votation: {
    isFetching: false,
    errorRequest: false,
    content: {}
  },
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

    case REQUEST_VOTATION:
      return Object.assign({}, state, {
        votation: Object.assign({}, state.votation, {
          isFetching: true,
          errorRequest: false
        })        
      })

    case REQUEST_VOTATION_SUCCESS:
      return Object.assign({}, state, {
        votation: Object.assign({}, state.votation, {
          isFetching: false,
          errorRequest: false,
          content: (action.votation.rows.length>0)? action.votation.rows[0]:{}
        })        
      })

    case REQUEST_VOTATION_FAILURE:
      return Object.assign({}, state, {
        votation: Object.assign({}, state.votation, {
          isFetching: false,
          errorRequest: true
        })        
      })

    default:
      return state

  }
}