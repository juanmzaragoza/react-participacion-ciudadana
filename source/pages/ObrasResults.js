import React from "react";

import Row from "components/Layout/Row";
import Section from "components/Layout/Section";
import Article from "components/Layout/Article";
import Aside from "components/Layout/Aside";
import { CarouselImagesContainer } from "components/CarouselImageItems"
import { ResultsListGroupThumbnailContainer } from "components/ListGroupThumbnails"

import { CommuneFilterContainer } from "components/SelectFilter";
import { TagFilterContainer } from "components/TagFilter";

import * as type from 'constants/ApiResultType'

const ObrasResults = (props) => {

	var sizeCols = [9,3]; //primera columna de la pagina de 9/12 y la segunda de 3/12
	var filter = {
		estado: props.params.id_state,
		publicado: 1
	};
	const imgDefault = require("public/content/images/Obras_en_tu_barrio-generica.png");

	return(
	    <div className="container">

	    	<Row>
	    		<CarouselImagesContainer gallery={'obras'} />
	    	</Row>

	        <div className="row">
	        	
	        	<Article colSm={12} colMd={9}>
		        	<ResultsListGroupThumbnailContainer 
		        		filter={filter}
		        		type={type.RESULTS_OBRA}
		        		imageDefault={imgDefault}
		        	/>
		        </Article >

	        	<Aside colSm={12} colMd={3}>
					<CommuneFilterContainer />
					<TagFilterContainer type={type.RESULTS_OBRA}/>
	          	</Aside>

	        </div>	

	    </div >
	)
}

export default ObrasResults