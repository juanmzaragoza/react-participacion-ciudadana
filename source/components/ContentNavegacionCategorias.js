import { default as React, Component} from "react";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

import Section from "../components/Layout/Section";
import ImageLinkItem from "../components/Item/ImageLinkItem";
import config from "../config/config";

export class ContentNavegacionCategorias extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {

		const imageReunionesVecinos = require("../public/content/images/seccion-reuniones-de-vecinos.png");
		const imageObras = require("../public/content/images/Obras_en_tu_barrio.png");
		const imageEvevntos = require("../public/content/images/Iniciativas_y_Eventos.png");
		const imageBAElige = require("../public/content/images/ba-elige.png");

		return (
			<Section id={"content-nav-btn"} >
	    		<ImageLinkItem 
	    			linkHref={config.baelige_url}
	    			imageSrc={imageBAElige}
	    			description="..."
	    			target="_blank"
	    			animatedClass="animated slideInLeft" />
	    		<ImageLinkItem 
	    			linkHref="/reuniones_de_vecinos"
	    			imageSrc={imageReunionesVecinos}
	    			description="Imagen de reuniones de vecinos"
	    			animatedClass="animated zoomIn" />
	    		<ImageLinkItem 
	    			linkHref="/obras"
	    			imageSrc={imageObras}
	    			description="Imagen de obras"
	    			animatedClass="animated zoomIn" />
	    		<ImageLinkItem 
	    			linkHref="/proyectos"
	    			imageSrc={imageEvevntos}
	    			description="Imagen de proyectos"
	    			animatedClass="animated slideInRight" />
	    	</Section>
		)
	}
}

ContentNavegacionCategorias.propTypes = {};

//container
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    
  }
}

export const ContentNavegacionCategoriasContainer = connect(
  null,
  mapDispatchToProps
)(ContentNavegacionCategorias)