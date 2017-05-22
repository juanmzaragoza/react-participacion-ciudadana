import React from "react";

import Main from "components/Layout/Main";
import Row from "components/Layout/Row";
import Separator from "components/Layout/Separator";
import { CarouselImagesContainer } from "components/CarouselImageItems"
import { HoracioDiegoListThumbnailDescriptionContainer } from "components/ListThumbnailDescription";

const HoracioDiego = () => (
	<Main >

        <Row>
            <CarouselImagesContainer gallery={'horacioydiego'} />
        </Row>

        <Separator />

        <HoracioDiegoListThumbnailDescriptionContainer />
        
    </Main >
)

export default HoracioDiego