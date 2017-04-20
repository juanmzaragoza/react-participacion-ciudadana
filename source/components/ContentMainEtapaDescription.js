import React from "react";
import PropTypes from "prop-types";
import { Collapse } from "react-bootstrap";

class ContentMainEtapaDescription extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidUpdate(){
 		if(this.refs.description !== undefined){
 			if(this.props.description){
				this.refs.description.innerHTML = this.props.description;
 			} else{
 				this.refs.description.innerHTML = '<p><i>Esta etapa no tiene ninguna descripcion</i></p>';
 			}
		}
 	}

	render(){
		return(
			<Collapse in={this.props.show}>
	          	<div className='panel panel-default'>
		            <div className='panel-body' ref="description" >
		            </div>
	          	</div>
        	</Collapse>
		)
	}
}

export default ContentMainEtapaDescription