import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import {fetchStatics} from '../actions/StaticsAction'

const imageVecinosVotando = require("../public/content/images/vecinos_votando.png");
const urnaVotacion = require("../public/content/images/urna_votacion.png");
const vecinosParticip = require("../public/content/images/vecinos_participando.png");

export class MainStatics extends React.Component {

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
                <div className="row border-content">
                    <div className="container">
                        <div className="col-xs-12 col-sm-6 col-md-6">
                            <div className="row">
                                <div className="cont-datos-vot">
                                    <div className="title-dat-C">
                                        <h2>VECINOS PARTICIPANDO</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-3 col-md-3">
                            <div className="row">
                                <div className="cont-datos-vot">
                                    <div className="vec-img-A">
                                        <img src={urnaVotacion} width="50" height="55" alt="..." />
                                    </div>
                                    <div className="cant-vot-A">
                                        {this.props.isLoading? 
                                            <h2 style={{paddingLeft: '42px'}}>{spin}</h2>
                                            :
                                            <h2>{this.props.votes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h2>
                                        }
                                    </div>
                                    <div className="title-dat-A">
                                        <p>Votaron proyectos</p>
                                    </div>
                                  </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-3 col-md-3">
                            <div className="row">
                                <div className="cont-datos-vot">
                                    <div className="vec-img">
                                        <img src={vecinosParticip} width="70" height="55" alt="..." />
                                    </div>
                                    <div className="cant-vot">
                                        {this.props.isLoading? 
                                            <h2 style={{paddingLeft: '66px'}}>{spin}</h2>
                                            :
                                            <h2>{this.props.subscriptions.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h2>
                                        }
                                    </div>
                                    <div className="title-dat">
                                        <p>Participaron en reuniones</p>
                                    </div>
                                 </div>
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


//container
const mapStateToProps = (state, ownProps) => {

    return {
        isLoading: (state.requestStatics.isFetching || state.requestStatics.errorRequest),
        votes: state.requestStatics.votes,
        subscriptions: state.requestStatics.subscriptions
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    componentDidMount: () => {
        dispatch(fetchStatics())
    }
  }
}

export const MainStaticsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainStatics)
