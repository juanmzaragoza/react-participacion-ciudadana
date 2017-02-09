import { connect } from 'react-redux'
import { logout } from '../actions/UserAction'
import MainNavigation from '../components/Layout/MainNavigation'

const mapStateToProps = (state, ownProps) => {
    return {
      userIsAuthenticated: state.user.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    userLogout: (e) => {
      dispatch(logout());
    }
  }
}

const MainNavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainNavigation)

export default MainNavigationContainer