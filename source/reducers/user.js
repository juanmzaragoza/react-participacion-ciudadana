import {LOGIN_API_REQUEST,LOGIN_API_SUCCESS,LOGIN_API_FAILURE, LOGIN_USER, LOGOUT_USER} from '../constants/AuthConstants';
import * as utils from '../lib/utils';
import {AuthStore,setUser,removeUser} from '../store/AuthStore';

const initialState = {
  isLoggingIn: false, //indica si se esta logueando el usuario
  loginFailed: false,
  isAuthenticated: false
}

export default function result(state = initialState, action) { 
  switch (action.type) {
    case LOGIN_API_REQUEST:
      return Object.assign({}, state, {
        isLoggingIn: true,
        loginFailed: false
      })

    case LOGIN_API_SUCCESS:

      const profile = {
        id: action.user.id,
        email: action.user.email,
        username: action.user.username,
        salt: action.user.salta,
        token_exp: action.user.token_exp,
        token_iat: action.user.token_iat
      }

      setUser(profile, action.user.token);
      AuthStore.emitChange();

      return Object.assign({}, state, {
        isLoggingIn: false,
        loginFailed: false,
        isAuthenticated: true
      })

    case LOGIN_API_FAILURE:
      return Object.assign({}, state, {
        isLoggingIn: false,
        loginFailed: true
      })

    case LOGIN_USER:
      AuthStore.emitChange();
      return Object.assign({}, state, {
        isLoggingIn: false,
        loginFailed: false,
        isAuthenticated: true
      })

    case LOGOUT_USER:

      removeUser();
      AuthStore.emitChange();

      return Object.assign({}, state, {
        isLoggingIn: false,
        loginFailed: false,
        isAuthenticated: false
      })

    default:
      return state

  }
}