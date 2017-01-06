import React, { PropTypes } from "react"

class ContentMainEtapas extends React.Component {

	constructor(props) {
		super(props);
	}

	render(){

		const etapas_on = [
			require("../public/content/images/01-on.png"),
			require("../public/content/images/02-on.png"),
			require("../public/content/images/03-on.png"),
			require("../public/content/images/04-on.png"),
			require("../public/content/images/05-on.png")
		];

		const etapas_off = [
			require("../public/content/images/01-off.png"),
			require("../public/content/images/02-off.png"),
			require("../public/content/images/03-off.png"),
			require("../public/content/images/04-off.png"),
			require("../public/content/images/05-off.png")
		];

		const liOn = require("../public/content/images/li-on.png");
		const liOff = require("../public/content/images/li-off.png");

		return(
			<div>
		 		<header>
	          		<h2>Etapas de Obra</h2>
	          		<p>Aquí podes ver en que etapa se encuentra la obra en la que estas participando.</p>
	            </header>
	    
			 	<div className="clear"></div>
			 
			 	<div className="row">
				  	<div className="col-xs-12 col-sm-12 col-md-12">
						<ul className="etapas-proceso">
							
							{this.props.etapas.map((etapa,index) => {
								var imgEtapa = (etapa.en_curso)? etapas_on[index]:etapas_off[index];
								var imgLinea = (etapa.en_curso)? liOn:liOff;

								return(
			        	  			<li key={index}>
								     	<div className="box-etapa">
									     	<div className="box-title">
										     	<a href="#"><p>{etapa.etapa.nombre}</p></a>
										 	</div>
										 	<div className="box-num">
										     	<img src={imgEtapa} />
										 	</div>
										 	{(this.props.etapas[index+1] !== undefined)?
											 	<div className="box-linea">
											     	<img src={imgLinea} />
										 		</div>
										 		:
										 		null
										 	}
									 	</div>
									</li>
								)
			              	})}
						 	
						 </ul>
						 
					  </div>
					 
			 	</div>
		 	</div>
		)
	}

}

ContentMainEtapas.propTypes = {
	etapas: PropTypes.array.isRequired
}

export default ContentMainEtapas