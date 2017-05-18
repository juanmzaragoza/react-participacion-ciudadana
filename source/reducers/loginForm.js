import {SHOW_LOGIN_FORM, HIDE_LOGIN_FORM,SHOW_RESET_PASSWORD_FORM,HIDE_RESET_PASSWORD_FORM} from 'constants/AuthConstants'
import {RESET_PASSWORD_ERROR, RESET_PASSWORD_SUCCESS} from 'constants/UserConstants'
import * as utils from 'lib/utils'

const initialState = {
  visible: false,
  restartPassword: {
    visible: false,
    errorMessage: false,
    successMessage: false
  }
}

export default function result(state = initialState, action) { 
  switch (action.type) {
    case SHOW_LOGIN_FORM:
      return Object.assign({}, state, {
        visible: true
      })
    case HIDE_LOGIN_FORM:
      return Object.assign({}, state, {
        visible: false
      })
    case SHOW_RESET_PASSWORD_FORM:
      return Object.assign({}, state, {
        visible: false,
        restartPassword: Object.assign({}, state.restartPassword, {
          visible: true,
          errorMessage: false,
          successMessage: false
        })
      })
    case HIDE_RESET_PASSWORD_FORM:
      return Object.assign({}, state, {
        restartPassword: Object.assign({}, state.restartPassword, {
          visible: false
        })
      })
    case RESET_PASSWORD_ERROR:
      return Object.assign({}, state, {
        restartPassword: Object.assign({}, state.restartPassword, {
          errorMessage: action.error,
          successMessage: false
        })
      })
    case RESET_PASSWORD_SUCCESS:
      return Object.assign({}, state, {
        restartPassword: Object.assign({}, state.restartPassword, {
          successMessage: "Revise su bandeja de entrada para recuperar su contraseña",
          errorMessage: false
        })
      })
    default:
      return state

  }
}