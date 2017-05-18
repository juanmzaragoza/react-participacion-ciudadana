import { RESET_LOGIN_CAPTCHA_CHECK, LOGIN_CAPTCHA_CHECK_SUCCESS, LOGIN_CAPTCHA_CHECK_ERROR} from 'constants/AuthConstants'
import * as utils from 'lib/utils'

const initialState = {
  verified: false,
  error: false,
  errorMessage: ''
}

export default function captcha(state = initialState, action) {
  switch (action.type) {
    case RESET_LOGIN_CAPTCHA_CHECK:
      return Object.assign({}, state, {
        error: false,
        verified: false
      })
    case LOGIN_CAPTCHA_CHECK_SUCCESS:
      return Object.assign({}, state, {
        error: false,
        errorMessage: '',
        verified: true
      })
    case LOGIN_CAPTCHA_CHECK_ERROR:
      return Object.assign({}, state, {
        error: true,
        errorMessage: action.error,
        verified: false
      })
    default:
      return state

  }
}