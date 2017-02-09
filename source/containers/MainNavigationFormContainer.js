import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'
import { login } from '../actions/UserAction'

const mapStateToProps = (state, ownProps) => {

    return {
        classPrincipal: ownProps.classPrincipal,
        loginError: state.user.loginFailed,
        loginSuccess: state.user.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loginUsernamePassword: (username,password) => {
      dispatch(login(username,password));
    }
  }
}

const MainNavigationFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)

export default MainNavigationFormContainer