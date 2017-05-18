import React from "react";

import Main from "components/Layout/Main";
import Row from "components/Layout/Row";
import Separator from "components/Layout/Separator";
import { CarouselImagesContainer } from "components/CarouselImageItems"
import { TrabajandoJuntosListThumbnailDescriptionContainer } from "components/ListThumbnailDescription"

const Obras = () => (
	<Main >

        <Row>
            <CarouselImagesContainer gallery={'reunionesdevecinos'} />
        </Row>

        <Separator />

        <TrabajandoJuntosListThumbnailDescriptionContainer />
        
    </Main >
)

export default Obras