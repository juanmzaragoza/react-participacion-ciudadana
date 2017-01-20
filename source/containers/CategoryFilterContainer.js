import { connect } from 'react-redux'
import {  incrementPage, decrementPage, incrementPageAndCallAPI } from '../actions/PaginationAction'
import {  filterByCategory, fetchCategorias } from '../actions/FilterAction'
import {  fetchResults } from '../actions/ResultAction'
import SelectFilter from '../components/SelectFilter'
import * as type from '../constants/ApiResultType'

const mapStateToProps = (state, ownProps) => {

  let resultFilters = {
    'categoria': []
  };
  for(var filter in state.categoryFilter.items) {
    if(state.categoryFilter.items[filter].active){
      resultFilters.categoria.push(state.categoryFilter.items[filter].id);      
    }
  }

  return {
    filters: state.categoryFilter.items,
    resultPage: state.results.page,
    resultLimit: state.results.limit,
    resultFilters: Object.assign(state.results.selectedFilters,resultFilters)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    componentDidMount: () => {
      dispatch(fetchCategorias())
    },
    onFilterSelect: (category) => {
      dispatch(filterByCategory(category))
    },
    dispatch: dispatch
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;
    return {
      filters: stateProps.filters,
      componentDidMount: dispatchProps.componentDidMount,
      onFilterSelect: dispatchProps.onFilterSelect,
      componentDidUpdate: () => {
        dispatch(fetchResults(stateProps.resultPage,stateProps.resultLimit,stateProps.resultFilters,type.RESULTS_EVENTO,false));
      }
    };
};

const CategoryFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(SelectFilter)

export default CategoryFilterContainer