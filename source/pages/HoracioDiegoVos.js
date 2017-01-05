import React from "react";

import Main from "../components/Layout/Main";
import Row from "../components/Layout/Row";
import Separator from "../components/Layout/Separator";
import CarouselImageHDYVContainer from "../containers/CarouselImageHDYVContainer"
import HDYVListThumbnailDescriptionContainer from "../containers/HDYVListThumbnailDescriptionContainer"

const Obras = () => (
	<Main >

        <Row>
            <CarouselImageHDYVContainer />
        </Row>

        <Separator />

        <HDYVListThumbnailDescriptionContainer />
        
    </Main >
)

export default Obras