import { connect } from 'react-redux'
import {  incrementPage, decrementPage, incrementPageAndCallAPI } from '../actions/PaginationAction'
import {  fetchComunas, filterByCommune } from '../actions/FilterAction'
import {  fetchResults } from '../actions/ResultAction'
import SelectFilter from '../components/SelectFilter'
import * as type from '../constants/ApiResultType'

const mapStateToProps = (state, ownProps) => {

    let resultFilters = {
      'comuna': []
    };
    for(var filter in state.communeFilter.items) {
      if(state.communeFilter.items[filter].active){
        resultFilters.comuna.push(state.communeFilter.items[filter].id);      
      }
    }

    return {
        filters: state.communeFilter.items,
        resultPage: state.results.page,
        resultLimit: state.results.limit,
        resultFilters: Object.assign(state.results.selectedFilters,resultFilters)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    componentDidMount: () => {
      dispatch(fetchComunas())
    },
    onFilterSelect: (commune) => {
      dispatch(filterByCommune(commune));
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
        dispatch(fetchResults(stateProps.resultPage,stateProps.resultLimit,stateProps.resultFilters,type.RESULTS_OBRA,false));
      }
    };
};

const CommuneFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(SelectFilter)

export default CommuneFilterContainer