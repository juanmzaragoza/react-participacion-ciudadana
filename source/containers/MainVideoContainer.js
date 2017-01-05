import { connect } from 'react-redux'
//import {  toggleState } from '../actions'
import MainVideo from '../components/MainVideo'

/*const mapStateToProps = (state, ownProps) => {

    return {
        text: state.button.active
    }
}*/

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onScrollMainVideo: () => {
      //dispatch(toggleState())
      console.log("scroll")
    }
  }
}

const MainVideoContainer = connect(
  null,
  mapDispatchToProps
)(MainVideo)

export default MainVideoContainer