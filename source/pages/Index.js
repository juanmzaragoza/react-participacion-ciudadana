import React from "react";

import Main from "../components/Layout/Main";
import Section from "../components/Layout/Section";
import { MainVideoContainer } from "../components/MainVideo";
import { MainStaticsContainer } from "../components/MainStatics";
import { AgendaSemanalCarouselThumbnailContainer } from "../components/CarouselThumbnailItems";
import ImageLinkItem from "../components/Item/ImageLinkItem";
import BioItem from "../components/Item/BioItem";

class Index extends React.Component {

	render() {

		const imageTrabjandoJuntos = require("../public/content/images/trabajando_juntos.png");
		const imageObras = require("../public/content/images/Obras_en_tu_barrio.png");
		const imageEvevntos = require("../public/content/images/Iniciativas_y_Eventos.png");
		const imageBAElige = require("../public/content/images/ba-elige.png");

		const imageAgenda = require("../public/content/images/lg-agd.png");

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
		    		<ImageLinkItem 
		    			linkHref="#"
		    			imageSrc={imageBAElige}
		    			description="..." />
		    		<ImageLinkItem 
		    			linkHref="/trabajando_juntos"
		    			imageSrc={imageTrabjandoJuntos}
		    			description="..."/>
		    		<ImageLinkItem 
		    			linkHref="/obras"
		    			imageSrc={imageObras}
		    			description="..." />
		    		<ImageLinkItem 
		    			linkHref="/proyectos"
		    			imageSrc={imageEvevntos}
		    			description="..." />
		    	</Section>

		    	<Section className={"bg-vol"} >
		    		<span className="vol">
		    			<a href="contenido.html"><h2>Sumate al Voluntariado</h2></a>
		    		</span>
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
			    			className={"col-xs-4 col-sm-4 col-md-4"}
			    			linkHref={"/proyectos"}
			    			imageSrc={imgBioItemC}
			    			description="proyectos" />
			    		<BioItem 
			    			className={"col-xs-4 col-sm-4 col-md-4s"}
			    			linkHref={"https://comunicacionhrl.secure.force.com/forms/FF_VFP_PCSumate"}
			    			imageSrc={imgBioItemB}
			    			description="..." />
			    	</div>
		    	</Section>

			</div>
		)
	}
}

export default Index