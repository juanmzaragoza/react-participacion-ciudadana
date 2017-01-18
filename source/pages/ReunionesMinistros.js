import React from "react";

import Main from "../components/Layout/Main";
import Row from "../components/Layout/Row";
import Separator from "../components/Layout/Separator";
import CarouselImageReunionesMinistrosContainer from "../containers/CarouselImageReunionesMinistrosContainer"
import ReunionesMinistrosListThumbnailDescriptionContainer from "../containers/ReunionesMinistrosListThumbnailDescriptionContainer"

const ReunionesMinistros = () => (
	<Main >

        <Row>
            <CarouselImageReunionesMinistrosContainer />
        </Row>

        <Separator />

        <ReunionesMinistrosListThumbnailDescriptionContainer />
        
    </Main >
)

export default ReunionesMinistros