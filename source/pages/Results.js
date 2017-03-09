import React from "react";

import Row from "../components/Layout/Row";
import { ResultsListGroupThumbnailContainer } from "../components/ListGroupThumbnails"
import { CarouselImagesContainer } from "../components/CarouselImageItems"

import Article from "../components/Layout/Article";
import Aside from "../components/Layout/Aside";
import TagFilterContainer from "../containers/TagFilterContainer"

import * as type from '../constants/ApiResultType'

const Results = (props) => {

	let sizeCols = [9,3] //primera columna de la pagina de 9/12 y la segunda de 3/12
	var filter = {
		nombre: props.location.query.nombre,
		fecha: props.location.query.fecha,
		seccion: props.location.query.seccion
	};

	return(
		<div className="container">

			<Row>
	    		<CarouselImagesContainer gallery={'obras'} />
	    	</Row>

	        <div className="row">
	        	
	        	<Article colSm={12} colMd={9}>
		        	<ResultsListGroupThumbnailContainer 
		        		filter={filter}
		        		type={type.RESULTS_OBRA_EVENTO}
		        	/>
		        </Article >

	        	<Aside colSm={12} colMd={3}>
					<TagFilterContainer type={type.RESULTS_OBRA_EVENTO}/>
	          	</Aside>

	        </div>

		</div>
	)
}

export default Results