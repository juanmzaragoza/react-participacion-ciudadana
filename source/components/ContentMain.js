import React, { PropTypes } from "react";
import ContentMainEtapas from "./ContentMainEtapas";

class ContentMain extends React.Component {

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

		const imgSocialFb = require("../public/content/images/social-fb.png");
		const imgSocialTw = require("../public/content/images/social-tw.png");
		const imgSocialInst = require("../public/content/images/social-Inst.png");

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
				 
		          	<button type="submit" className="btn btn-vt">Suscribirse</button>
				  
				 	<div className="clear"></div>	 
		         
				 	<article className="contenido" ref="description">
				 	</article>

				 	<div className="clear"></div>
				  
			     	<p>Compartí esta información con tus amigos y vecinos del barrio.</p>
		         	<ul className="share-redes">
			     		<li><a href="#"> <img src={imgSocialFb}  /> </a></li>
				     	<li><a href="#"> <img src={imgSocialTw}  /> </a></li>
						<li><a href="#"> <img src={imgSocialInst}  /> </a></li>
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

export default ContentMain