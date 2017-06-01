import {LOGIN_API_REQUEST,LOGIN_API_SUCCESS,LOGIN_API_FAILURE, LOGIN_USER, LOGOUT_USER, SHOW_LOGIN_FORM} from '../constants/AuthConstants';
import {CONFIRM_EMAIL_SUCCESS, CONFIRM_EMAIL_ERROR} from '../constants/UserConstants';
import * as utils from '../lib/utils';
import {AuthStore,setUser,removeUser} from '../store/AuthStore';

const initialState = {
  isLoggingIn: false, //indica si se esta logueando el usuario
  loginFailed: false,
  isAuthenticated: false,
  validationProcess: {
    success: false,
    error: false
  }
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
      return returnLoginUser(state);

    case LOGIN_API_FAILURE:
      return Object.assign({}, state, {
        isLoggingIn: false,
        loginFailed: action.error
      })

    case LOGIN_USER:
      return returnLoginUser(state);

    case LOGOUT_USER:

      removeUser();
      AuthStore.emitChange();

      return Object.assign({}, state, {
        isLoggingIn: false,
        loginFailed: false,
        isAuthenticated: false
      })

    case CONFIRM_EMAIL_SUCCESS:
      return Object.assign({}, state, {
        validationProcess: Object.assign({}, state.validationProcess, {
          success: true,
          error: false
        })
      })

    case CONFIRM_EMAIL_ERROR:
      return Object.assign({}, state, {
        validationProcess: Object.assign({}, state.validationProcess, {
          success: false,
          error: true
        })
      })

    case SHOW_LOGIN_FORM: //restart form
      return Object.assign({}, state, {
        loginFailed: false
      })

    default:
      return state

  }
}

function returnLoginUser(state){
  AuthStore.emitChange();
  return Object.assign({}, state, {
    isLoggingIn: false,
    loginFailed: false,
    isAuthenticated: true
  })
}