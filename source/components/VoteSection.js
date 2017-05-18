import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import { Alert, Button } from "react-bootstrap";

import { VoteFormContainer } from "components/VoteForm";
import { VoteGraphContainer } from "components/VoteGraph";

export class VoteSection extends React.Component {

	constructor(props) {
		super(props);
		this.state ={
			alertVisible: true
		}
	}

	componentDidUpdate(){
 		if(this.refs.shortdescription !== undefined && this.refs.description !== undefined){
	 		this.refs.shortdescription.innerHTML = this.props.descripcion_breve;
			this.refs.description.innerHTML = this.props.contenido;
		}
 	}

 	handleAlertDismiss() {
	    this.setState({
	    	alertVisible: false
	    });
	}

 	componentWillUnmount(){
 		if(this.refs.shortdescription !== undefined && this.refs.description !== undefined){
			this.refs.shortdescription.innerHTML = "";
			this.refs.description.innerHTML = "";
		}
	}

	render(){

		return (
			<div>
				<header>
              		<h2>{this.props.titulo}</h2>
              		<p className="lead" ref="shortdescription"></p>
	            </header>
				 
			 	<article className="contenido" ref="description">
			 	</article>
			 	<div className="clear"></div>

			 	{(this.props.showSuccessVoteMessage && this.state.alertVisible)?
					<Alert bsStyle="success" onDismiss={this.handleAlertDismiss.bind(this)}>
			          <h4>Gracias por tu voto!</h4>
			          <p>Tu opinión servirá para hacer que cada obra contribuya a moldear la ciudad que todos queremos</p>
			        </Alert>
					:
					null
				}

			  	<div className="row">
					{this.props.showGraph?
						<VoteGraphContainer />
						:
						<VoteFormContainer />
					}
				</div>
				<div className="clear"></div>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
    return {
      showGraph: state.voteForm.graph.show,
      showSuccessVoteMessage: state.voteForm.graph.show && state.user.isAuthenticated,
      titulo: (state.voteForm.votation.content != null)? state.voteForm.votation.content.nombre:undefined,
      descripcion_breve: (state.voteForm.votation.content != null && state.voteForm.votation.content.descripcion != null)? state.voteForm.votation.content.descripcion.slice(0, 20):null,
      contenido: (state.voteForm.votation.content != null)? state.voteForm.votation.content.descripcion:null,
    }
}

export const VoteSectionContainer = connect(
  mapStateToProps,
  null
)(VoteSection)