import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux'

import { MainBoxSearchBAContainer } from "components/MainBoxSearchBA"

export class MainVideo extends React.Component {

	constructor(props) {
        super(props)
    }

    render() {

      const videoPrincipal = require("public/content/videos/Participacion_Ciudadana_Pagina720.mp4");

    	return (
		    <section id="video" >
          <videojs></videojs>
		        <video width="100%" autoPlay={true} loop="loop" preload="auto" muted >
		            <source src={videoPrincipal} />
		        </video>
		        <MainBoxSearchBAContainer />
		    </section>
		)

    }

}


//container
/*const mapStateToProps = (state, ownProps) => {

    return {
        text: state.button.active
    }
}*/

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onScrollMainVideo: () => {
      //dispatch(toggleState())
      console.log("scroll")
    }
  }
}

export const MainVideoContainer = connect(
  null,
  mapDispatchToProps
)(MainVideo)