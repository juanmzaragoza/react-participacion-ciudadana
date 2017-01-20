import { connect } from 'react-redux'
import ListGroupThumbnails from '../components/ListGroupThumbnails'
import {  fetchResults, fetchMoreResults } from '../actions/ResultAction'

const mapStateToProps = (state, ownProps) => {
    return {
        items: state.results.items,
        isLoading: (state.results.isFetching || state.results.errorRequest),
        page: state.results.page,
        pageCount: state.results.pageCount,
        colSm: 12,
        colMd: 9
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  let resultsPerPage = 6;
  return {
    componentWillMount: () => {
      dispatch(fetchResults(1,resultsPerPage,ownProps.filter,ownProps.type,false))
    },
    handlePageClick: (e) => {
      dispatch(fetchResults(e.selected+1,resultsPerPage,ownProps.filter,ownProps.type,false));
    }
  }
}

const ResultsListGroupThumbnailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListGroupThumbnails)

export default ResultsListGroupThumbnailContainer