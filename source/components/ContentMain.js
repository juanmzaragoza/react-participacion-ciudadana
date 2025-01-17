import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import { fetchContent } from 'actions/ResultAction';
import { fetchVotation } from 'actions/VoteAction';

import ContentMainEtapas from "components/ContentMainEtapas";
import FacebookShareButton from "components/FacebookShareButton";
import TwitterShareButton from "components/TwitterShareButton";

export class ContentMain extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		if(this.props.componentDidMount !== undefined){
			this.props.componentDidMount();
		}
 	}

 	componentDidUpdate(){
 		if(this.refs.shortdescription !== undefined && this.refs.description !== undefined){
	 		this.refs.shortdescription.innerHTML = this.props.content.descripcion_breve;
			this.refs.description.innerHTML = this.props.content.descripcion;
		}
 	}

 	componentWillUnmount(){
 		if(this.refs.shortdescription !== undefined && this.refs.description !== undefined){
			this.refs.shortdescription.innerHTML = "";
			this.refs.description.innerHTML = "";
		}
	}

	render(){

		const content = this.props.content;
		const imgSocialInst = require("public/content/images/social-Inst.png");

		return (
			this.props.error?
				(<div>
					<h1>404 - Obra no Encontrada</h1>
		        	<p>El recurso buscado no fue encontrado</p>
		        </div>)
		        :
	        	(<div>

	          		<header>
			  			<h1>{content.nombre}</h1>
				  		<p className="lead" ref="shortdescription"></p>
	              	</header>
					
					{(content.obra_etapas !== undefined && content.obra_etapas.length > 0)?
						<ContentMainEtapas etapas={content.obra_etapas} />
						: 
						null
					}
					 
	              	<div className="clear"></div>
				 	
				 	{this.props.children}
				  
				 	<div className="clear"></div>	 
		         
				 	<article className="contenido" ref="description">
				 	</article>

				 	<div className="clear"></div>
				  
			     	<p>Compartí esta información con tus amigos y vecinos del barrio.</p>
		         	<ul className="share-redes">
		         		<li><FacebookShareButton 
		         				title={this.props.content.nombre}
		         				description={this.props.content.descripcion_breve}
		         				image={window.location.origin+require("public/content/images/agenda01.png")} /></li>
		         		<li><TwitterShareButton /></li>
						{/*<li><a href="#"> <img src={imgSocialInst}  /> </a></li>*/}
			     	</ul>

			      	<div className="clear"></div>
	          </div>)
	      	
		)
	}
}

ContentMain.propTypes = {
	error: PropTypes.bool,
	content: PropTypes.object.isRequired,
  	componentDidMount: PropTypes.func
}

//container
const mapStateToProps = (state, ownProps) => {
    return {
        error: state.result.errorRequest,
        content: state.result.content
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    componentDidMount: () => {
        dispatch(fetchContent(ownProps.type,ownProps.id,{'publicado':1}));
        dispatch(fetchVotation(ownProps.type,ownProps.id));
    }
  }
}

export const ContentMainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentMain)