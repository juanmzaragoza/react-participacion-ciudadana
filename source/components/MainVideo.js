import React, { PropTypes } from "react";
import MainBoxSearchBAContainer from "../containers/MainBoxSearchBAContainer"

const MainVideo = (onScrollMainVideo) => (
    <section id="video" >
        <video width="100%" autoPlay={true} loop="loop" preload="auto" muted >
            <source src="content/videos/Participacion_Ciudadana_Pagina720.mp4" />
        </video>
        <MainBoxSearchBAContainer />
    </section>
)

MainVideo.propTypes = {
  onScrollMainVideo: PropTypes.func.isRequired
}

export default MainVideo