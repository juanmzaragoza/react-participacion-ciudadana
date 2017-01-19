import React from "react";

import Main from "../components/Layout/Main";
import Row from "../components/Layout/Row";
import Separator from "../components/Layout/Separator";
import CarouselImagesContainer from "../containers/CarouselImagesContainer"
import HDYVListThumbnailDescriptionContainer from "../containers/HDYVListThumbnailDescriptionContainer"

const Obras = () => (
	<Main >

        <Row>
            <CarouselImagesContainer gallery={'horaciodiegovos'} />
        </Row>

        <Separator />

        <HDYVListThumbnailDescriptionContainer />
        
    </Main >
)

export default Obras