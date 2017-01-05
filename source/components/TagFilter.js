import React, { PropTypes } from "react";
import MainBoxSearchBAContainer from "../containers/MainBoxSearchBAContainer"

const SelectFilter = ({filters, onFilterSelect}) => (
    <div>
    	
 	</div>
)

SelectFilter.propTypes = {
	filters: PropTypes.array.isRequired,
  	onFilterSelect: PropTypes.func.isRequired
}

export default SelectFilter