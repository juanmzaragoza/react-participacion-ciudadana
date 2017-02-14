import { connect } from 'react-redux';
import ModalLogin from '../components/ModalLogin';
import { hideLoginForm } from '../actions/UserAction';

const mapStateToProps = (state, ownProps) => {
    return {
    	show: !state.user.isAuthenticated && state.loginForm.visible
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    closeModal: () => {
      dispatch(hideLoginForm());
    }
  }
}

const ModalLoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalLogin)

export default ModalLoginContainer