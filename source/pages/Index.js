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

		const imgBioDescription = require("../public/content/images/Bio-Participación.png");
		const imgBioItemA = require("../public/content/images/Bio-items-A.png");
		const imgBioItemB = require("../public/content/images/Bio-items-B.png");
		const imgBioItemC = require("../public/content/images/Bio-items-C.png");

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
		    		<BioItem 
		    			className={"bio-descrip"}
		    			imageSrc={imgBioDescription}
		    			description="..." />
		    		<BioItem 
		    			className={"bio-items"}
		    			linkHref={"/trabajando_juntos"}
		    			imageSrc={imgBioItemA}
		    			description="..." />
		    		<BioItem 
		    			className={"bio-items"}
		    			linkHref={"#"}
		    			imageSrc={imgBioItemC}
		    			description="..." />
		    		<BioItem 
		    			className={"bio-items"}
		    			linkHref={"http://bit.ly/ContactPC3"}
		    			imageSrc={imgBioItemB}
		    			description="..." />
		    	</Section>

			</div>
		)
	}
}

export default Index