import { connect } from 'react-redux'
//import {  toggleState } from '../actions'
import MainBoxSearchBA from '../components/MainBoxSearchBA'

const mapStateToProps = (state, ownProps) => {

    return {
        show: false
    }
}

/*const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onScroll: () => {
      //dispatch(toggleState())
      console.log("scroll")
    }
  }
}*/

const MainBoxSearchBAContainer = connect(
  mapStateToProps,
  null
)(MainBoxSearchBA)

export default MainBoxSearchBAContainer