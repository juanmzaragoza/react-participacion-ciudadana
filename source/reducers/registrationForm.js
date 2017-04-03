import * as requestType from '../constants/RequestActionTypes';
import * as userType from '../constants/UserConstants';

const initialState = {
  isFetching: false,
  errorRequest: false,
  neighborhoods: [],
  submitError: {
    state: false,
    message: ""
  },
  submitSucess: {
    state: false
  }
}

export default function communeFilter(state = initialState, action) { 
  switch (action.type) {
    case requestType.REQUEST_NEIGHBORHOODS:
      return Object.assign({}, state, {
        isFetching: true,
        errorRequest: false
      })

    case requestType.REQUEST_NEIGHBORHOODS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        errorRequest: false,
        neighborhoods: action.neighborhoods
      })

    case requestType.REQUEST_NEIGHBORHOODS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorRequest: true
      })

    case userType.CREATE_USER_FAILURE:
      return Object.assign({}, state, {
        submitError: Object.assign({}, state.submitError, {
          state: true,
          message: action.error
        }),
        submitSucess: Object.assign({}, state.submitSucess, {
          state: false
        })
      })

    case userType.CREATE_USER_SUCCESS:
      return Object.assign({}, state, {
        submitError: Object.assign({}, state.submitError, {
          state: false,
          message: ""
        }),
        submitSucess: Object.assign({}, state.submitSucess, {
          state: true
        })
      })

    default:
      return state

  }
}