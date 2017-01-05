import { connect } from 'react-redux'
//import {  toggleState } from '../actions'
import MainStatics from '../components/MainStatics'
import {fetchStatics} from '../actions/StaticsAction'

const mapStateToProps = (state, ownProps) => {

    return {
        isLoading: (state.requestStatics.isFetching || state.requestStatics.errorRequest),
        votes: state.requestStatics.votes,
        subscriptions: state.requestStatics.subscriptions
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    componentDidMount: () => {
        dispatch(fetchStatics())
    }
  }
}

const MainStaticsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainStatics)

export default MainStaticsContainer