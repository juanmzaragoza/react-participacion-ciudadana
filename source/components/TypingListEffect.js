import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import ReactRotatingText from 'react-rotating-text';

import {  fetchResults } from '../actions/ResultAction';

import * as type from '../constants/ApiResultType';

export class TypingListEffect extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.componentDidMount();		
	}

	render(){

		return (
			<div className="container">
         		<div className="row ">
		         	<div className="col-md-12">
		         		<span className="vol">
		         			<h2>
			         			<ReactRotatingText 
			         				items={this.props.items} 
			         				cursor={false} 
			         				eraseMode={"overwrite"} />
			         		</h2>
			         	</span>
				 	</div>
		     	</div>
	     </div>
		)
	}
}

TypingListEffect.propTypes = {
  items: PropTypes.array.isRequired,
}


const mapStateToProps = (state, ownProps) => {
	
	var itemsName = ['¡Sumate al Voluntariado!'];
	state.results.items.forEach(function(element,index){
		itemsName.push(element.nombre);
	});

    return {
      items: itemsName
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

  const resultsPerPage = 10,
  		page = 1;

  return {
    componentDidMount: () => {
      dispatch(fetchResults(page,resultsPerPage,{seccion: 'voluntariado'},ownProps.type,false));
    }
  }
}

export const VoluntariadoTitulosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TypingListEffect)