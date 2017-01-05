import { connect } from 'react-redux'
import ListGroupThumbnails from '../components/ListGroupThumbnails'
import {  fetchResults, fetchMoreResults } from '../actions/ResultAction'

const mapStateToProps = (state, ownProps) => {
    return {
        items: state.results.items,
        isLoading: (state.results.isFetching || state.results.errorRequest),
        page: state.results.page,
        colSm: 12,
        colMd: 9
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    componentWillMount: () => {
      dispatch(fetchResults(1,6,ownProps.filter,ownProps.type,false))
    },
    getMoreResults: (nextPage) => {
      dispatch(fetchResults(nextPage,6,ownProps.filter,ownProps.type,true))
    }
  }
}

const ResultsListGroupThumbnailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListGroupThumbnails)

export default ResultsListGroupThumbnailContainer