import { connect } from 'react-redux';
import {  fetchTags, filterByTag } from '../actions/FilterAction';
import {  fetchResults } from '../actions/ResultAction';
import TagFilter from '../components/TagFilter';
//import * as type from '../constants/ApiResultType';

const mapStateToProps = (state, ownProps) => {

    let resultFilters = {
      'tag': []
    };
    for(var filter in state.tagFilter.items) {
      if(state.tagFilter.items[filter].active){
        resultFilters.tag.push(state.tagFilter.items[filter].id);      
      }
    }

    return {
        filters: state.tagFilter.items,
        resultPage: state.results.page,
        resultLimit: state.results.limit,
        resultFilters: Object.assign(state.results.selectedFilters,resultFilters)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    componentDidMount: () => {
      dispatch(fetchTags(1,10))
    },
    onFilterSelect: (tag) => {
      dispatch(filterByTag(tag));
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
        dispatch(fetchResults(stateProps.resultPage,stateProps.resultLimit,stateProps.resultFilters,ownProps.type,false));
      }
    };
};

const TagFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(TagFilter)

export default TagFilterContainer