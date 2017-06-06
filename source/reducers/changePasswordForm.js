import {CHANGE_PASSWORD_ERROR, CHANGE_PASSWORD_SUCCESS} from 'constants/UserConstants';

const initialState = {
  errorMessage: false,
  successMessage: false
}

export default function changePasswordForm(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PASSWORD_ERROR:
      return Object.assign({}, state, {
        errorMessage: action.error,
        successMessage: false
      })
    case CHANGE_PASSWORD_SUCCESS:
      return Object.assign({}, state, {
        successMessage: "Contraseña modificada correctamente",
        errorMessage: false
      })
    default:
      return state;
  }
}