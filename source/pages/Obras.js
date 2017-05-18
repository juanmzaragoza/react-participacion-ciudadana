import React from "react";

import Main from "components/Layout/Main";
import Row from "components/Layout/Row";
import Separator from "components/Layout/Separator";
import { CarouselImagesContainer } from "components/CarouselImageItems"
import { ObrasListThumbnailDescriptionContainer } from "components/ListThumbnailDescription";

const Obras = () => (
	<div>

	    <Main >

	        <Row>
	            <CarouselImagesContainer gallery={'obras'} />
	        </Row>

	        <Separator />

	        <ObrasListThumbnailDescriptionContainer />
	        
	    </Main >

	</div>
)

export default Obras