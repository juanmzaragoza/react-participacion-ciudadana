import { connect } from 'react-redux'
import {  incrementPage, decrementPage, incrementPageAndCallAPI } from '../actions/PaginationAction'
import {  fetchComunas, filterByCommune } from '../actions/FilterAction'
import SelectFilter from '../components/SelectFilter'

const mapStateToProps = (state, ownProps) => {

    return {
        filters: state.communeFilter.items
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    componentDidMount: () => {
      dispatch(fetchComunas())
    },
    onFilterSelect: (commune) => {
      dispatch(filterByCommune(commune))
    }
  }
}

const CommuneFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectFilter)

export default CommuneFilterContainer