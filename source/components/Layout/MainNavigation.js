import { default as React, Component, PropTypes  } from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router';

class MainNavigation extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const imgBaParticipa = require("../../public/content/images/baparticipa.png"),
          miBaBtn = require("../../public/vendor/bastrap3/ba-btn.png");
    
    return (
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
                </div>
            		<div className="collapse navbar-collapse" id="main-nav">
              		<ul className="nav navbar-nav navbar-right register">
              			<li><Link to="/" activeClassName="link-active" onlyActiveOnIndex={true}>Inicio</Link></li>
              			<li><Link to="/obras" activeClassName="link-active">Obras</Link></li>
		              	<li><Link to="/proyectos" activeClassName="link-active">Proyectos</Link></li>
		              	<li><Link to="/trabajando_juntos" activeClassName="link-active">Trabajando juntos</Link></li>
                    <li><Link to="/ba_elige" activeClassName="link-active">BA Elige</Link></li>
                    {(this.props.userIsAuthenticated !== undefined && this.props.userIsAuthenticated === true)?
                      <li className="active-BA" onClick={this.props.userLogout}><a href="#">Cerrar sesion <span className="glyphicon glyphicon-log-out" aria-hidden="true" ></span></a></li>
                      :
                      <li>
                        <a href="#" onClick={this.props.userLogin}>Iniciar sesión</a>
                        <ul className="register_user">
                          <li><a href="#" onClick={this.props.userLogin}>Iniciar sesión</a></li>
                          <li><Link to="/registro_usuario">¿Sos Nuevo? Registrate.</Link></li>
                        </ul>
                      </li>
                    }
              		</ul>
            		</div>
          	</div>
        	</div>
      </nav>
    )
  }
}

MainNavigation.propTypes = {
  userIsAuthenticated: PropTypes.bool,
  userLogout: PropTypes.func,
  userLogin: PropTypes.func
}

export default MainNavigation