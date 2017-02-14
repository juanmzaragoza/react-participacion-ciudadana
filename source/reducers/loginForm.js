import {SHOW_LOGIN_FORM, HIDE_LOGIN_FORM} from '../constants/AuthConstants'
import * as utils from '../lib/utils'

const initialState = {
  visible: false
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
    default:
      return state

  }
}