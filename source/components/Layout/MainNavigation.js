import { default as React, Component} from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { logout, showLoginForm } from 'actions/UserAction';
import config from 'config/config'

export class MainNavigation extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const miBaBtn = require("public/vendor/bastrap3/ba-btn.png");

    const loginLink = this.props.showLoginLink? 
      (<li>
        <a href="#" onClick={this.props.userLogin}>Iniciar sesión</a>
        <ul className="register_user">
          <li><a href="#" onClick={this.props.userLogin}>Iniciar sesión</a></li>
          <li><Link to="/registro">¿Sos Nuevo? Registrate.</Link></li>
        </ul>
      </li>)
      :
      <li className="disabled"><a href="#">Iniciar sesión</a></li>;

    
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
                <h3>#BAParticipa</h3>
              </div>

          		<div className="collapse navbar-collapse" id="main-nav">
            		<ul className="nav navbar-nav navbar-right register">
            			<li><Link to="/" activeClassName="link-active" onlyActiveOnIndex={true}>Inicio</Link></li>
            			<li><Link to="/obras" activeClassName="link-active">Obras</Link></li>
	              	<li><Link to="/proyectos" activeClassName="link-active">Proyectos</Link></li>
	              	<li><Link to="/reuniones_de_vecinos" activeClassName="link-active">Reuniones de Vecinos</Link></li>
                  <li><Link to="/voluntarios" activeClassName="link-active">Voluntariado</Link></li>
                  <li><a href={config.baelige_url} target="_blank">BA Elige</a></li>
                  {(this.props.userIsAuthenticated !== undefined && this.props.userIsAuthenticated === true)?
                    <li className="active-BA" onClick={this.props.userLogout}><a href="#">Cerrar sesion <span className="glyphicon glyphicon-log-out" aria-hidden="true" ></span></a></li>
                    :
                    loginLink
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
  showLoginLink: PropTypes.bool,
  userLogout: PropTypes.func,
  userLogin: PropTypes.func
}


//container
const mapStateToProps = (state, ownProps) => {
    return {
      userIsAuthenticated: state.user.isAuthenticated,
      showLoginLink: (state.routing.locationBeforeTransitions != null)? !state.routing.locationBeforeTransitions.pathname.includes('registro'):true
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    userLogout: (e) => {
      dispatch(logout());
    },
    userLogin: (e) => {
      dispatch(showLoginForm());
    }
  }
}

export const MainNavigationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainNavigation)