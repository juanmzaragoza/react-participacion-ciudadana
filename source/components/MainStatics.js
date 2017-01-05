import React, { PropTypes } from "react";
const imageVecinosVotando = require("../public/content/images/vecinos_votando.png");
const urnaVotacion = require("../public/content/images/urna_votacion.png");
const vecinosParticip = require("../public/content/images/vecinos_participando.png");

class MainStatics extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() { 
        if(this.props.componentDidMount !== undefined){
            this.props.componentDidMount();
        }
    }

    render() {

        const spin = <span className="glyphicon glyphicon-refresh spin"></span>

        return (
            <section id="content-dat" className="container-fluid">
                <div className="container">
                    <div className="row border-content">
                        <div className="col-md-5">
                            <h3>VECINOS PARTICIPANDO</h3>
                            <div className="vec-vot-img">
                                <img src={imageVecinosVotando} width="271" height="39" alt="..." />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row">
                                <div className="vot-img">
                                    <img src={urnaVotacion} width="50" height="55" alt="..." />
                                </div>
                                {this.props.isLoading? 
                                    <h3 style={{paddingLeft: '110px'}}>{spin}</h3>
                                    :
                                    <h3>{this.props.votes}</h3>
                                }
                                <p>Votaron proyectos</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="row">
                                <div className="vec-img">
                                    <img src={vecinosParticip} width="70" height="55" alt="..." />
                                </div>
                                {this.props.isLoading? 
                                    <h3 style={{paddingLeft: '154px'}}>{spin}</h3>
                                    :
                                    <h3>{this.props.subscriptions}</h3>
                                }
                                <p>Participaron en reuniones</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

MainStatics.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  votes: PropTypes.number,
  subscriptions: PropTypes.number
}

export default MainStatics
