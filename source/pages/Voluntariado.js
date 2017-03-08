import React from "react";

import Main from "../components/Layout/Main";
import Row from "../components/Layout/Row";
import Separator from "../components/Layout/Separator";
import Jumbotron from "../components/Jumbotron";
{/*import VoluntariadoListThumbnailDescriptionContainer from "../containers/VoluntariadoListThumbnailDescriptionContainer"*/}

const Voluntariado = () => (
    <Main >

        <Row>
            <Jumbotron imageSrc={require("../public/content/images/voluntarios.gif")} />
        </Row>

        <Separator />

        {/*<VoluntariadoListThumbnailDescriptionContainer />*/}
        
    </Main >
)

export default Voluntariado