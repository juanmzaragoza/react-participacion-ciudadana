import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import {  browserHistory } from 'react-router';

import {  searchItems } from '../actions';

export class SearchBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let input

        return (
            <div className="form-group has-button">
                <input ref={node => {input = node}} type="text" className="form-control input-xl" id="search-obras-eventos" placeholder="Buscar" />
                <button className="btn" onClick={ e => {this.props.onSearch((input !== undefined) ? input.value:'')}}>
                    <span className="glyphicon glyphicon-search"></span>
                </button>
            </div>
        )
    }
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired
}


//container
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSearch: (text) => {
        //dispatch(searchItems(text))
        browserHistory.push('/resultados?nombre='+text)
    }
  }
}

export const SearchBarContainer = connect(
  null,
  mapDispatchToProps
)(SearchBar)

