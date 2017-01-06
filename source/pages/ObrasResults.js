import React from "react";

import Row from "../components/Layout/Row";
import Section from "../components/Layout/Section";
import Article from "../components/Layout/Article";
import Aside from "../components/Layout/Aside";
import CarouselImageObrasContainer from "../containers/CarouselImageObrasContainer"
import ResultsListGroupThumbnailContainer from "../containers/ResultsListGroupThumbnailContainer"

import CommuneFilterContainer from "../containers/CommuneFilterContainer"

import * as type from '../constants/ApiResultType'

const ObrasResults = (props) => {

	var sizeCols = [9,3]; //primera columna de la pagina de 9/12 y la segunda de 3/12
	var filter = {
		estado: props.params.id_state,
		publicado: 1
	};

	return(
	    <div className="container">

	    	<Row>
	    		<CarouselImageObrasContainer />   
	    	</Row>

	        <div className="row">
	        	
	        	<Article colSm={12} colMd={9}>
		        	<ResultsListGroupThumbnailContainer 
		        		filter={filter}
		        		type={type.RESULTS_OBRA}
		        	/>
		        </Article >

	        	<Aside colSm={12} colMd={3}>
					<CommuneFilterContainer />
	          	</Aside>

	        </div>	

	    </div >
	)
}

export default ObrasResults