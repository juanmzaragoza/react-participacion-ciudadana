import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import {  incrementPage, decrementPage, incrementPageAndCallAPI } from '../actions/PaginationAction';
import {  filterByCategory, fetchCategorias } from '../actions/FilterAction';
import {  fetchComunas, filterByCommune } from '../actions/FilterAction';
import {  fetchResults } from '../actions/ResultAction';

import * as type from '../constants/ApiResultType';

export class SelectFilter extends React.Component {

    constructor(props) {
        super(props);
        this.shouldUpdate = false;
    }

    componentDidMount() { 
        if(this.props.componentDidMount !== undefined){
            this.props.componentDidMount();
        }
    }

    componentWillMount() { 
        if(this.props.componentWillMount !== undefined){
            this.props.componentWillMount();
        }
    }

    componentDidUpdate(nextProps, nextState) { 
        if(this.props.componentDidUpdate !== undefined){
            if(this.shouldUpdate){
                this.props.componentDidUpdate();
            }
        }
        this.shouldUpdate = true;
    }

    shouldComponentUpdate(nextProps, nextState){
        return this.props.filters !== nextProps.filters;
    }

    render() {
        return(
            <div className="list-group">
                {this.props.filters.map( (filter, index) => {

                    let className = "list-group-item"

                    if(filter.className !== undefined){
                        className += filter.className
                    }

                    if(filter.active){
                        className += " active"
                    }

                    return <a key={index} className={className} onClick={e => (this.props.onFilterSelect(filter))} >{filter.name}</a>
                })}
            </div>
        );
    }

}

SelectFilter.propTypes = {
	filters: PropTypes.array.isRequired,
  	onFilterSelect: PropTypes.func.isRequired
}

//////////////////////////////////////////////////
//container category filter
//////////////////////////////////////////////////
const mapStateToPropsCategoryFilter = (state, ownProps) => {

  let resultFilters = {
    'categorias': []
  };
  for(var filter in state.categoryFilter.items) {
    if(state.categoryFilter.items[filter].active){
      resultFilters.categorias.push(state.categoryFilter.items[filter].id);      
    }
  }

  return {
    filters: state.categoryFilter.items,
    resultPage: state.results.page,
    resultLimit: state.results.limit,
    resultFilters: Object.assign(state.results.selectedFilters,resultFilters)
  }
}

const mapDispatchToPropsCategoryFilter = (dispatch, ownProps) => {
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

const mergePropsCategoryFilter = (stateProps, dispatchProps, ownProps) => {
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

export const CategoryFilterContainer = connect(
  mapStateToPropsCategoryFilter,
  mapDispatchToPropsCategoryFilter,
  mergePropsCategoryFilter
)(SelectFilter)


//////////////////////////////////////////////////
//container commune filter
//////////////////////////////////////////////////
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
    componentWillMount: () => {
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
      componentWillMount: dispatchProps.componentWillMount,
      onFilterSelect: dispatchProps.onFilterSelect,
      componentDidUpdate: () => {
        dispatch(fetchResults(stateProps.resultPage,stateProps.resultLimit,stateProps.resultFilters,type.RESULTS_OBRA,false));
      }
    };
};

export const CommuneFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(SelectFilter)