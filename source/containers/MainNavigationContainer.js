import { connect } from 'react-redux'
//import {  toggleState } from '../actions'
import MainNavigation from '../components/Layout/MainNavigation'

const mapStateToProps = (state, ownProps) => {
    return {
      user: state.user
    }
}

/*const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loginUsernamePassword: (username,password) => {
      dispatch(login(username,password));
    }
  }
}*/

const MainNavigationContainer = connect(
  mapStateToProps,
  null
)(MainNavigation)

export default MainNavigationContainer