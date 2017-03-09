import React from "react";

class HeaderJumbotron  extends React.Component {

    constructor(props) {
          super(props);
    }

    render() {
        let style = {
            backgroundImage: 'url(' + require("../public/content/images/area.jpg") + ')'
        }

        return(
            <header className="jumbotron jumbotron-main jumbotron-small area-header" style={style}>
                <div className="jumbotron-overlay">
                    <div className="container">
                        <div className="area-title col-md-8 col-md-offset-2">
                            <h1>Discurso sobre los servicios digitales del Gobierno</h1>
                            <p className="lead">Compartimos el textual del jefe de Gobierno porteño, Mauricio Macri, en la Legislatura porteña durante la apertura de las sesiones ordinarias.</p>
                        </div>
                    </div>
                </div>
            </header>
        )        
    }
}

export default HeaderJumbotron