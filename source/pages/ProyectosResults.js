import React from "react";

import Row from "../components/Layout/Row";
import CarouselImageProyectosContainer from "../containers/CarouselImageProyectosContainer"
import ResultsListGroupThumbnailContainer from "../containers/ResultsListGroupThumbnailContainer"

import Article from "../components/Layout/Article";
import Aside from "../components/Layout/Aside";
import CategoryFilterContainer from "../containers/CategoryFilterContainer"

import * as type from '../constants/ApiResultType'

const Results = (props) => {

	var sizeCols = [9,3]; //primera columna de la pagina de 9/12 y la segunda de 3/12
	var filter = {categoria: props.params.id_category};

	return(
		<div className="container">

			<Row>
	    		<CarouselImageProyectosContainer />   
	    	</Row>

		    <div className="row">
		        
		        <Article colSm={12} colMd={9}>
		        	<ResultsListGroupThumbnailContainer 
		        		filter={filter}
		        		type={type.RESULTS_EVENTO}
		        	/>
		        </Article >

	        	<Aside colSm={12} colMd={3}>
					<CategoryFilterContainer />
	          	</Aside>

		    </div>

		</div>
	)
}

export default Results