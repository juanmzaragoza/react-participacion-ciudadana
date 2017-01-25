import React from "react";

import Main from "../components/Layout/Main";
import Section from "../components/Layout/Section";
import MainVideoContainer from "../containers/MainVideoContainer";
import MainStaticsContainer from "../containers/MainStaticsContainer";
import AgendaSemanalCarouselThumbnailContainer from "../containers/AgendaSemanalCarouselThumbnailContainer"
import ImageLinkItem from "../components/Item/ImageLinkItem";
import BioItem from "../components/Item/BioItem";

class Index extends React.Component {

	render() {

		const imageHoracio = require("../public/content/images/Encuentros_con_Horacio.png");
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

		    	<Section id={"content-nav-category"} title={'Participá'}>
		    		<ImageLinkItem 
		    			linkHref="#"
		    			imageSrc={imageBAElige}
		    			description="..." />
		    		<ImageLinkItem 
		    			linkHref="horacio_diego_y_vos"
		    			imageSrc={imageHoracio}
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

		        <Section id={"content-nav-agenda"} title={'Últimas Iniciativas Participativas '}>
		        	<AgendaSemanalCarouselThumbnailContainer  />
	        	</Section>

	        	<Section id={"content-nav-bio"} renderInOneCol={true} >
		    		<BioItem 
		    			className={"bio-descrip"}
		    			imageSrc={imgBioDescription}
		    			description="..." />
		    		<BioItem 
		    			className={"bio-items"}
		    			linkHref={"/horacio_diego_y_vos"}
		    			imageSrc={imgBioItemA}
		    			description="..." />
		    		<BioItem 
		    			className={"bio-items"}
		    			linkHref={"#"}
		    			imageSrc={imgBioItemC}
		    			description="..." />
		    		<BioItem 
		    			className={"bio-items"}
		    			linkHref={"#"}
		    			imageSrc={imgBioItemB}
		    			description="..." />
		    	</Section>

			</div>
		)
	}
}

export default Index