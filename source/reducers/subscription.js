import {REQUEST_SUBSCRIPTIONS_SUCCESS,REQUEST_SUBSCRIPTIONS,REQUEST_SUBSCRIPTIONS_FAILURE,USER_ISNOT_AUTHENTICATED,REQUEST_SUBSCRIPTIONS_TESTING_OK} from 'constants/SubscriptionActionTypes';
import {LOGIN_API_SUCCESS} from 'constants/AuthConstants';
import * as utils from 'lib/utils';

const initialState = {
  testingOk: false,
  successRequest: false,
  isFetching: false,
  errorRequest: false,
  content: {}
}

export default function result(state = initialState, action) { 
  switch (action.type) {

    case REQUEST_SUBSCRIPTIONS_TESTING_OK:
      return Object.assign({}, state, {
        testingOk: true
      })

    case LOGIN_API_SUCCESS:
      return Object.assign({}, state, {
        testingOk: false
      })

    case REQUEST_SUBSCRIPTIONS:
      return Object.assign({}, state, {
        successRequest: false,
        isFetching: true,
        errorRequest: false
      })

    case REQUEST_SUBSCRIPTIONS_SUCCESS:
      return Object.assign({}, state, {
        successRequest: true,
        isFetching: false,
        errorRequest: false,
        content: action.content
      })

    case REQUEST_SUBSCRIPTIONS_FAILURE:
      return Object.assign({}, state, {
        successRequest: false,
        isFetching: false,
        errorRequest: true
      })
    case USER_ISNOT_AUTHENTICATED:
      return Object.assign({}, state, {
        successRequest: false,
        isFetching: false,
        errorRequest: false,
        content: {}
      })

    default:
      return state

  }
}