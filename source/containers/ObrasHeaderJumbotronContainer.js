import { connect } from 'react-redux'
//import {  toggleState } from '../actions'
import HeaderJumbotron from '../components/HeaderJumbotron'

const mapStateToProps = (state, ownProps) => {
    
    return {
        //show: false
    }
}

const ObrasHeaderJumbotronContainer = connect(
  mapStateToProps,
  null
)(HeaderJumbotron)

export default ObrasHeaderJumbotronContainer