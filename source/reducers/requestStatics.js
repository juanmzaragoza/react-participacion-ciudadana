import {REQUEST_STATICS_SUCCESS,REQUEST_STATICS,REQUEST_STATICS_FAILURE} from 'constants/RequestActionTypes'

const initialState = {
  isFetching: true,
  errorRequest: false,
  votes: 0,
  subscriptions: 0
}

export default function requestStatics(state = initialState, action) {
  switch (action.type) {
    case REQUEST_STATICS:
      return Object.assign({}, state, {
        isFetching: true,
        errorRequest: false
      })

    case REQUEST_STATICS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        errorRequest: false,
        votes: action.votes,
        subscriptions: action.subscriptions
      })

    case REQUEST_STATICS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorRequest: true
      })
    

    default:
      return state

  }
}
