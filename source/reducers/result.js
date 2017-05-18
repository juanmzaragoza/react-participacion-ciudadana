import {REQUEST_CONTENT_SUCCESS,REQUEST_CONTENT,REQUEST_CONTENT_FAILURE,REQUEST_COMMENTS_SUCCESS,REQUEST_COMMENTS,REQUEST_COMMENTS_FAILURE} from 'constants/RequestActionTypes';
import {USER_IS_SUBSCRIBED, USER_ISNOT_SUBSCRIBED} from 'constants/SubscriptionActionTypes';
import {LOGIN_USER,LOGOUT_USER} from 'constants/AuthConstants';
import * as utils from 'lib/utils';

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

    case REQUEST_COMMENTS_SUCCESS:
      return Object.assign({}, state, {
        content: Object.assign({}, state.content, {
          comments: action.content
        })
      })

    case USER_IS_SUBSCRIBED:
      return Object.assign({}, state, {
        content: Object.assign({}, state.content, {
          suscripto: true
        })
      })

    case USER_ISNOT_SUBSCRIBED:
      return Object.assign({}, state, {
        content: Object.assign({}, state.content, {
          suscripto: false
        })
      })

    default:
      return state

  }
}