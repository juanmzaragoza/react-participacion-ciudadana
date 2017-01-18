import React from "react";

import Main from "../components/Layout/Main";
import Row from "../components/Layout/Row";
import Separator from "../components/Layout/Separator";
import CarouselImageReunionesVecinosContainer from "../containers/CarouselImageReunionesVecinosContainer"
import ReunionesVecinosListThumbnailDescriptionContainer from "../containers/ReunionesVecinosListThumbnailDescriptionContainer"

const ReunionesVecinos = () => (
	<Main >

        <Row>
            <CarouselImageReunionesVecinosContainer />
        </Row>

        <Separator />

        <ReunionesVecinosListThumbnailDescriptionContainer />
        
    </Main >
)

export default ReunionesVecinos