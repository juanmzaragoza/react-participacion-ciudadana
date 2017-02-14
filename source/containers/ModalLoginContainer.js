import { connect } from 'react-redux'
import ModalLogin from '../components/ModalLogin'

const mapStateToProps = (state, ownProps) => {
    return {
    	show: !state.user.isAuthenticated && state.loginForm.visible
    }
}

const ModalLoginContainer = connect(
  mapStateToProps,
  null
)(ModalLogin)

export default ModalLoginContainer