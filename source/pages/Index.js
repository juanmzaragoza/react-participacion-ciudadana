import React from "react";
import { Link } from 'react-router';

import Main from "components/Layout/Main";
import Section from "components/Layout/Section";
import { MainVideoContainer } from "components/MainVideo";
import { MainStaticsContainer } from "components/MainStatics";
import { AgendaSemanalCarouselThumbnailContainer } from "components/CarouselThumbnailItems";
import BioItem from "components/Item/BioItem";
import {VoluntariadoTitulosContainer} from "components/TypingListEffect";
import { ContentNavegacionCategoriasContainer } from "components/ContentNavegacionCategorias";

import * as type from 'constants/ApiResultType';

class Index extends React.Component {

	render() {

		const imageReunionesVecinos = require("public/content/images/seccion-reuniones-de-vecinos.png");
		const imageObras = require("public/content/images/Obras_en_tu_barrio.png");
		const imageEvevntos = require("public/content/images/Iniciativas_y_Eventos.png");
		const imageBAElige = require("public/content/images/ba-elige.png");

		const tituloBioParticipacion = require("public/content/images/titulo-bio-Participacion.png");
		const queEsParticipacionCiudadana = require("public/content/images/bio-QueEsParticipacion-ciudadana.png");
		const imgBioItemA = require("public/content/images/Bio-Participa-de-las-reuniones.png");
		const imgBioItemB = require("public/content/images/Bio-Sumate-a-obras-y-proyectos.png");
		const imgBioItemC = require("public/content/images/Bio-compartinos-tu-opinion.png");

	    return (
			<div>

				<MainVideoContainer />

		    	<MainStaticsContainer />

		    	<ContentNavegacionCategoriasContainer />

		    	<Section className={"bg-vol"} >
		    		<Link to="/resultados?seccion=VOLUNTARIADO">
			    		<VoluntariadoTitulosContainer 
			    			type={type.RESULTS_OBRA_EVENTO} />
			    	</Link>
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