import React from "react";
import { Link } from 'react-router';

import Main from "../components/Layout/Main";
import Section from "../components/Layout/Section";
import { MainVideoContainer } from "../components/MainVideo";
import { MainStaticsContainer } from "../components/MainStatics";
import { AgendaSemanalCarouselThumbnailContainer } from "../components/CarouselThumbnailItems";
import ImageLinkItem from "../components/Item/ImageLinkItem";
import BioItem from "../components/Item/BioItem";
import {VoluntariadoTitulosContainer} from "../components/TypingListEffect";

import * as type from '../constants/ApiResultType';

import config from "../config/config"

class Index extends React.Component {

	render() {

		const imageReunionesVecinos = require("../public/content/images/seccion-reuniones-de-vecinos.png");
		const imageObras = require("../public/content/images/Obras_en_tu_barrio.png");
		const imageEvevntos = require("../public/content/images/Iniciativas_y_Eventos.png");
		const imageBAElige = require("../public/content/images/ba-elige.png");

		const tituloBioParticipacion = require("../public/content/images/titulo-bio-Participacion.png");
		const queEsParticipacionCiudadana = require("../public/content/images/bio-QueEsParticipacion-ciudadana.png");
		const imgBioItemA = require("../public/content/images/Bio-Participa-de-las-reuniones.png");
		const imgBioItemB = require("../public/content/images/Bio-Sumate-a-obras-y-proyectos.png");
		const imgBioItemC = require("../public/content/images/Bio-compartinos-tu-opinion.png");

	    return (
			<div>

				<MainVideoContainer />

		    	<MainStaticsContainer />

		    	<Section id={"content-nav-btn"} >
		    		<a href={config.baelige_url} target="_blank">
						<img src={imageBAElige} alt={"..."} className="img-thumbnail" />
					</a>
		    		<ImageLinkItem 
		    			linkHref="/reuniones_de_vecinos"
		    			imageSrc={imageReunionesVecinos}
		    			description="Imagen de reuniones de vecinos"/>
		    		<ImageLinkItem 
		    			linkHref="/obras"
		    			imageSrc={imageObras}
		    			description="Imagen de obras" />
		    		<ImageLinkItem 
		    			linkHref="/proyectos"
		    			imageSrc={imageEvevntos}
		    			description="Imagen de proyectos" />
		    	</Section>

		    	<Section className={"bg-vol"} >
		    		<VoluntariadoTitulosContainer 
		    			type={type.RESULTS_OBRA_EVENTO} />
		    	</Section>

		        <Section id={"content-nav-agenda"} title={'Iniciativas participativas destacadas '}>
		        	<AgendaSemanalCarouselThumbnailContainer  />
	        	</Section>

	        	<Section id={"content-nav-bio"} renderInOneCol={true} >

	        		<div className="row ">
					 	<div className="col-md-12">
						 	<img src={tituloBioParticipacion} className="img-thumbnail" alt="..." />
					 	</div>
				 	</div>
				 	<div className="clear"></div>

				 	<div className="row ">
					 	<div className="col-md-12">
						 	<img src={queEsParticipacionCiudadana} className="img-thumbnail" alt="..." />
					 	</div>
				 	</div>

				 	<div className="row ">
			    		<BioItem 
			    			className={"col-xs-4 col-sm-4 col-md-4"}
			    			linkHref={"/trabajando_juntos"}
			    			imageSrc={imgBioItemA}
			    			description="..." />
			    		<BioItem 
			    			className={"col-xs-4 col-sm-4 col-md-4s"}
			    			linkHref={"/proyectos"}
			    			imageSrc={imgBioItemB}
			    			description="proyectos" />
			    		<BioItem 
			    			className={"col-xs-4 col-sm-4 col-md-4"}
			    			linkHref={"https://comunicacionhrl.secure.force.com/forms/FF_VFP_PCSumate"}
			    			imageSrc={imgBioItemC}
			    			target="_blank" />
			    	</div>
		    	</Section>

			</div>
		)
	}
}

export default Index