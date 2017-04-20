import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { TagCloud } from "react-tagcloud";

import {  fetchTags, filterByTag } from '../actions/FilterAction';
import {  fetchResults } from '../actions/ResultAction';

export class TagFilter extends React.Component {

    constructor(props) {
        super(props);
        this.shouldUpdate = false; //variable para que el primer update no se ejecute
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

        const colorActive = "#00b2e2", colorInactive = "#5574c3";

        let tags = [];
        for(let index in this.props.filters){
            let tag = {
                id: this.props.filters[index].id,
                value: this.props.filters[index].name,
                count: this.props.filters[index].count,
                color: this.props.filters[index].active? colorActive:colorInactive
            }
            tags.push(tag);
        }

        return(
            <div className="list-group">
		        <TagCloud minSize={12}
		            maxSize={35}
		            tags={tags}
		            style={{textAlign: 'center'}}
                    shuffle={false}
                    onClick={tag => (this.props.onFilterSelect(tag))} />
            </div>
        );
    }

}

TagFilter.propTypes = {
	filters: PropTypes.array.isRequired,
  	onFilterSelect: PropTypes.func.isRequired
}


//container
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
    componentWillMount: () => {
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
      componentWillMount: dispatchProps.componentWillMount,
      onFilterSelect: dispatchProps.onFilterSelect,
      componentDidUpdate: () => {
        dispatch(fetchResults(stateProps.resultPage,stateProps.resultLimit,stateProps.resultFilters,ownProps.type,false));
      }
    };
};

export const TagFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(TagFilter)