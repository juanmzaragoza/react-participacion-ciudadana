import React from "react";

import Main from "../components/Layout/Main";
import Row from "../components/Layout/Row";
import Separator from "../components/Layout/Separator";
import CarouselImagesContainer from "../containers/CarouselImagesContainer"
import ReunionesMinistrosListThumbnailDescriptionContainer from "../containers/ReunionesMinistrosListThumbnailDescriptionContainer"

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