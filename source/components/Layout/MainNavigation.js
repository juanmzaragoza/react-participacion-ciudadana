import { default as React, Component, PropTypes  } from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router';
import LoginForm from "../../containers/MainNavigationFormContainer";
import ModalFade from "../ModalFade";

class MainNavigation extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate(){
    if(this.props.userIsAuthenticated !== undefined && this.props.userIsAuthenticated){
      var modal = ReactDOM.findDOMNode(this.refs["modal_form"]);
      modal.click();
    }    
  }

  render() {
    const imgBaParticipa = require("../../public/content/images/baparticipa.png"),
          miBaBtn = require("../../public/vendor/bastrap3/ba-btn.png");
    
    return (
      <div>
      	<nav className="navbar navbar-default" role="navigation">
          	<div className="container">
            	<div className="row">
              		<div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#main-nav">
                      <span className="sr-only">Menú</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                    <Link to="/" className="navbar-brand bapc" title="Participación Ciudadana">
                      <span className="logo-hast"><img src={imgBaParticipa} alt="..."/></span>
                      BAParticipa
                    </Link>
                  </div>
              		<div className="collapse navbar-collapse" id="main-nav">
                		<ul className="nav navbar-nav navbar-right">
                  			<li><Link to="/" activeClassName="link-active" onlyActiveOnIndex={true}>Inicio</Link></li>
                  			<li><Link to="/obras" activeClassName="link-active">Obras</Link></li>
    		              	<li><Link to="/proyectos" activeClassName="link-active">Proyectos</Link></li>
    		              	<li><Link to="/horacio_diego_y_vos" activeClassName="link-active">Horacio, Diego y Vos</Link></li>
                        <li><Link to="/ba_elige" activeClassName="link-active">BA Elige</Link></li>
                        {(this.props.userIsAuthenticated !== undefined && this.props.userIsAuthenticated === true)?
                          <li className="active-BA" onClick={this.props.userLogout}><a href="#">Cerrar sesion <span className="glyphicon glyphicon-log-out" aria-hidden="true" ></span></a></li>
                          :
                          <li className="active-BA"><a href="#" data-target="#modal_form"  data-toggle="modal">Entrar a <img src={miBaBtn} className="glyphicon glyphicon-ba" /></a></li>
                        }
                		</ul>
              		</div>
            	</div>
          	</div>
        </nav>

        <ModalFade id={"modal_form"} ref="modal_form" >
          <LoginForm classPrincipal={"modal-body"} ref="login_form" />
        </ModalFade> 

      </div>
    )
  }
}

MainNavigation.propTypes = {
  userIsAuthenticated: PropTypes.bool,
  userLogout: PropTypes.func
}

export default MainNavigation