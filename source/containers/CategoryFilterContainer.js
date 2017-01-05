import { connect } from 'react-redux'
import {  incrementPage, decrementPage, incrementPageAndCallAPI } from '../actions/PaginationAction'
import {  filterByCategory, fetchCategorias } from '../actions/FilterAction'
import SelectFilter from '../components/SelectFilter'

const mapStateToProps = (state, ownProps) => {

    return {
        filters: state.categoryFilter.items
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    componentDidMount: () => {
      dispatch(fetchCategorias())
    },
    onFilterSelect: (category) => {
      dispatch(filterByCategory(category))
    }
  }
}

const CategoryFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectFilter)

export default CategoryFilterContainer