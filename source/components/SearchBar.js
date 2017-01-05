import React, { PropTypes } from "react";

const SearchBar = ({onSearch}) => {

    let input

    return (
        <div className="form-group has-button">
            <input ref={node => {input = node}} type="text" className="form-control input-xl" id="search-obras-eventos" placeholder="Buscar" />
            <button className="btn" onClick={ e => {onSearch((input !== undefined) ? input.value:'')}}>
                <span className="glyphicon glyphicon-search"></span>
            </button>
        </div>
    )
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired
}

export default SearchBar

