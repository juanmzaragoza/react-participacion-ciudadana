import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router';

//import {  toggleState } from '../actions'

import { SearchBarContainer } from '../components/SearchBar'
import ProjectsDayPickerContainer from '../containers/ProjectsDayPickerContainer'

export class MainBoxSearchBA extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="box-btn-miBA " style={{display:'none'}}>
                <div className="container ">
                    <div className="row bg-content">
                        <div className="col-xs-12 col-sm-7 col-md-9">
                            <Link to="/resultados?seccion=AGENDASEMANAL">
                                <button className="btn btn-AGD btn-block btn-xl">AGENDA SEMANAL</button>
                            </Link>
                            <div className="clear"></div>
                    
                            <SearchBarContainer />
                     
                            <h2>¡Sumate y Participá!</h2>
                            <h3>en todas las obras, iniciativas y eventos de cada barrio.</h3>
                     
                        </div>
                        <div className="col-xs-12 col-sm-5 col-md-3">
                            <ProjectsDayPickerContainer />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


//container
const mapStateToProps = (state, ownProps) => {

    return {
        show: false
    }
}

/*const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onScroll: () => {
      //dispatch(toggleState())
      console.log("scroll")
    }
  }
}*/

export const MainBoxSearchBAContainer = connect(
  mapStateToProps,
  null
)(MainBoxSearchBA)