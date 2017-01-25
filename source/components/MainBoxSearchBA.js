import React from "react";
import SearchBarContainer from '../containers/SearchBarContainer'
import ProjectsDayPickerContainer from '../containers/ProjectsDayPickerContainer'
import { Link } from 'react-router';

const MainBoxSearchBA = () => {

    return (
        <div className="box-btn-miBA " style={{display:'none'}}>
            <div className="container ">
                <div className="row bg-content">
                    <div className="col-md-9">
                        <Link className="btn btn-primary btn-block btn-xl" to="/resultados?seccion=AGENDASEMANAL">
                            AGENDA SEMANAL
                        </Link>
                        <div className="clear"></div>
                
                        <SearchBarContainer />
                 
                        <h2>¡Sumate y Participá!</h2>
                        <h3>en todas las obras, iniciativas y eventos de cada barrio.</h3>
                 
                    </div>
                    <div className="col-md-3">
                        <ProjectsDayPickerContainer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBoxSearchBA