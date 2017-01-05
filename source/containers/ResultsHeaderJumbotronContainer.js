import { connect } from 'react-redux'
//import {  toggleState } from '../actions'
import HeaderJumbotron from '../components/HeaderJumbotron'

const mapStateToProps = (state, ownProps) => {
    
    return {
        //show: false
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

const ResultsHeaderJumbotronContainer = connect(
  mapStateToProps,
  null
)(HeaderJumbotron)

export default ResultsHeaderJumbotronContainer