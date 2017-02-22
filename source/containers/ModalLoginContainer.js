import { connect } from 'react-redux';
import ModalLogin from '../components/ModalLogin';
import { hideLoginForm, login } from '../actions/UserAction';

const mapStateToProps = (state, ownProps) => {
    return {
    	show: !state.user.isAuthenticated && state.loginForm.visible,
      loginError: state.user.loginFailed,
      loginSuccess: state.user.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    closeModal: () => {
      dispatch(hideLoginForm());
    },
    loginUsernamePassword: (username,password) => {
      dispatch(login(username,password));
    }
  }
}

const ModalLoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalLogin)

export default ModalLoginContainer