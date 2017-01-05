import React, { PropTypes } from "react"

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

		const etapa1_on = require("../public/content/images/etapa_001.png");
		const etapa2_on = require("../public/content/images/etapa_002.png");
		const etapa3_on = require("../public/content/images/etapa_003.png");
		const etapa4_off = require("../public/content/images/etapa_off_004.png");
		const etapa5_off = require("../public/content/images/etapa_off_005.png");

		const uneAc = require("../public/content/images/une-Ac.png");
		const uneDac = require("../public/content/images/une-Dac.png");
		const liAct = require("../public/content/images/li-act.png");
		const liDact = require("../public/content/images/li-dact.png");

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
				
					{(content.obra_etapas !== undefined)?
					 	(<div>
					 		<header>
			              		<h2>Etapas de Obra</h2>
			              		<p>Aquí podes ver en que etapa se encuentra la obra en la que estas participando.</p>
				            </header>
		            
						 	<div className="clear"></div>
						 
						 	<div className="row">
						     	<div className="col-xs-12 col-sm-4 col-md-4 "><a href="#"><img className="etp-1" src={etapa1_on} /></a></div>
							 	<div className="col-xs-12 col-sm-4 col-md-4 "><a href="#"><img className="etp-3" src={etapa3_on} /></a></div>
							 	<div className="col-xs-12 col-sm-4 col-md-4 "><a href="#"><img className="etp-5" src={etapa5_off} /></a></div>
						 	</div>	 
						  	<div className="row">
					         	<ul className="linea-etapa">
							     	<li><img src={uneAc} /></li>
							     	<li><img src={liAct} /></li>
									<li><img src={uneAc} /></li>
							     	<li><img src={liAct} /></li>
							     	<li><img src={uneAc} /></li>
									<li><img src={liDact} /></li>
							     	<li><img src={uneDac} /></li>
							     	<li><img src={liDact} /></li>
									<li><img src={uneDac} /></li>
						     	</ul>
						 	</div>	 
					  		<div className="row">
						     	<div className="col-xs-12 col-sm-6 col-md-6 "><a href="#"><img className="etp-2" src={etapa2_on}  /></a></div>
							 	<div className="col-xs-12 col-sm-6 col-md-6 "><a href="#"><img className="etp-4" src={etapa4_off}  /></a></div>
						 	</div>
						 </div>)
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
						<li><a href="#"> <img src={imgSocialFb}  /> </a></li>
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