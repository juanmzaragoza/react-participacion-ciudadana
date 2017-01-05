import React from "react";

import Main from "../components/Layout/Main";
import Row from "../components/Layout/Row";
import Separator from "../components/Layout/Separator";
import CarouselImageProyectosContainer from "../containers/CarouselImageProyectosContainer"
import ProyectosListThumbnailDescriptionContainer from "../containers/ProyectosListThumbnailDescriptionContainer"

const Proyectos = () => (
	<div>

	    <Main >

	        <Row>
	            <CarouselImageProyectosContainer />
	        </Row>

	        <Separator />

	        <ProyectosListThumbnailDescriptionContainer />

	    </Main >

	</div>
)

export default Proyectos