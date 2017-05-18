import React from "react";

import Main from "components/Layout/Main";
import Row from "components/Layout/Row";
import Separator from "components/Layout/Separator";
import { CarouselImagesContainer } from "components/CarouselImageItems"
import { ReunionesMinistrosListThumbnailDescriptionContainer } from "components/ListThumbnailDescription";

const ReunionesMinistros = () => (
	<Main >

        <Row>
            <CarouselImagesContainer gallery={'reunionesconministro'} />
        </Row>

        <Separator />

        <ReunionesMinistrosListThumbnailDescriptionContainer />
        
    </Main >
)

export default ReunionesMinistros