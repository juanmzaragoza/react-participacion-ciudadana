import React from "react";

import Main from "../components/Layout/Main";
import Row from "../components/Layout/Row";
import Article from "../components/Layout/Article";
import Aside from "../components/Layout/Aside";

import { TagFilterContainer } from "../components/TagFilter";
import { CarouselImagesContainer } from "../components/CarouselImageItems";
import { ResultsListGroupThumbnailContainer } from "../components/ListGroupThumbnails";

import * as type from '../constants/ApiResultType';

const Voluntariado = () => {

	let sizeCols = [9,3] //primera columna de la pagina de 9/12 y la segunda de 3/12
	var filter = {
		seccion: 'VOLUNTARIADO'
	};

	return (
	    <Main >

	        <Row>
	            <CarouselImagesContainer gallery={'voluntariado'} />
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
	        
	    </Main >
	)
}

export default Voluntariado