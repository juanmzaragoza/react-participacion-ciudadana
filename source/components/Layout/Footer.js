import React from "react";
import { Link } from 'react-router';
var logoFooterGob = require("public/content/images/logo-footer-gob.png");

import config from 'config/config'

class Footer extends React.Component {

  constructor(props) {
      super(props)
  }

  renderLinksPublicInfo(){
    return(
      <div className="col-md-4 col-sm-4">
        <h4>Información pública</h4>
        <ul>
          <li><Link to="/obras">Obras</Link></li>
          <li><Link to="/proyectos">Proyectos</Link></li>
          <li><a href={config.baelige_url} target="_blank">BA Elige</a></li>
          <li><Link href="/reuniones_de_vecinos">Reuniones de Vecinos</Link></li>
          <li><Link href="/reuniones_de_ministros">Reuniones de Ministros</Link></li>
          {/*<li><a href="http://bit.ly/ContactPC3" target="_blank">Contacto</a></li>*/}
        </ul>
      </div>
    )
  }

  renderLinksContactInfo(){

    const email = require('config/config').mailto? require('config/config').mailto:'baparticipacionciudadana@buenosaires.gob.ar';

    return(
      <div className="col-md-4 col-sm-4">
        <h4>Información de contacto</h4>
        <ul>
          <li><a className="pointer-element"><i className="fa fa-phone"></i> (011) 4909-2402</a></li>
          <li><a href={`mailto:${email}?Subject=Comparti%20tu%20opinion`} className="pointer-element"><i className="fa fa-envelope"></i> {email}</a></li>
          <li>
            <a className="pointer-element">Seguinos en:</a>
            <ul className="follow-redes">
              <li><a href={config.facebook_url != undefined? config.facebook_url:"https://www.facebook.com/baparticipacion"} target="_blank"><i className="fa fa-facebook-square fa-lg"></i></a></li>
              <li><a href={config.twitter_url != undefined? config.twitter_url:"https://twitter.com/baparticipacion"} target="_blank"><i className="fa fa-twitter fa-lg"></i></a></li>
              <li><a href={config.instagram_url != undefined? config.instagram_url:"https://www.instagram.com/baparticipacionciudadana"} target="_blank"><i className="fa fa-instagram fa-lg"></i></a></li>
              {/*<li><a href="#"><i className="fa fa-youtube-play fa-lg"></i></a></li>
              <li><a href="#"><i className="fa fa-rss fa-lg"></i></a></li>*/}
            </ul>
          </li>
        </ul>
      </div>
    )
  }

  render() {
    return (
      <footer>
        <div className="footer">
          <div className="container">
            <div className="row">
              {this.renderLinksPublicInfo()}
              {this.renderLinksContactInfo()}
              <div className="col-md-4 col-sm-4">
                <img className="logo-footer-gob" src={logoFooterGob}/> 
                <div className="cleaner"></div>
                <div className="sub-brand">
                  <p>
                    Participación Ciudadana
                    <br />
                    <span className="text-muted">Subsecretaría de Comunicación.</span>
                  </p>
                </div>
              </div>    
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
