import { connect } from 'react-redux'
//import {  toggleState } from '../actions'
import LoginForm from '../components/LoginForm'
import { login } from '../actions/UserAction'

const mapStateToProps = (state, ownProps) => {

    return {
        classPrincipal: ownProps.classPrincipal,
        loginError: state.user.loginFailed
        //subscriptions: state.requestStatics.subscriptions
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