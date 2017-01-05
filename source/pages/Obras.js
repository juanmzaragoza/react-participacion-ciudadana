import React from "react";

import Main from "../components/Layout/Main";
import Row from "../components/Layout/Row";
import Separator from "../components/Layout/Separator";
import CarouselImageObrasContainer from "../containers/CarouselImageObrasContainer"
import ObrasListThumbnailDescriptionContainer from "../containers/ObrasListThumbnailDescriptionContainer"

const Obras = () => (
	<div>

	    <Main >

	        <Row>
	            <CarouselImageObrasContainer />
	        </Row>

	        <Separator />

	        <ObrasListThumbnailDescriptionContainer />
	        
	    </Main >

	</div>
)

export default Obras