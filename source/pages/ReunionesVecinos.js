import React from "react";

import Main from "../components/Layout/Main";
import Row from "../components/Layout/Row";
import Separator from "../components/Layout/Separator";
import CarouselImagesContainer from "../containers/CarouselImagesContainer"
import ReunionesVecinosListThumbnailDescriptionContainer from "../containers/ReunionesVecinosListThumbnailDescriptionContainer"

const ReunionesVecinos = () => (
	<Main >

        <Row>
            <CarouselImagesContainer gallery={'reunionesdevecinos'} />
        </Row>

        <Separator />

        <ReunionesVecinosListThumbnailDescriptionContainer />
        
    </Main >
)

export default ReunionesVecinos