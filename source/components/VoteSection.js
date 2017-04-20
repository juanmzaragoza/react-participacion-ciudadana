import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { VoteFormContainer } from "../components/VoteForm";
import { VoteGraphContainer } from "../components/VoteGraph";

export class VoteSection extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidUpdate(){
 		if(this.refs.shortdescription !== undefined && this.refs.description !== undefined){
	 		this.refs.shortdescription.innerHTML = this.props.descripcion_breve;
			this.refs.description.innerHTML = this.props.contenido;
		}
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
      titulo: (state.voteForm.votation.content != null)? state.voteForm.votation.content.nombre:undefined,
      descripcion_breve: (state.voteForm.votation.content != null && state.voteForm.votation.content.descripcion != null)? state.voteForm.votation.content.descripcion.slice(0, 20):null,
      contenido: (state.voteForm.votation.content != null)? state.voteForm.votation.content.descripcion:null,
    }
}

export const VoteSectionContainer = connect(
  mapStateToProps,
  null
)(VoteSection)