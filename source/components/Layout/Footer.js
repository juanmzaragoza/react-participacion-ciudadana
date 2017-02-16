import React from "react";
import { Link } from 'react-router';
var logoFooterGob = require("../../public/content/images/logo-footer-gob.png");

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
          <li><a href="#">BA Elige</a></li>
          <li><Link href="#">Reuniones de Vecinos</Link></li>
          <li><Link href="#">Reuniones de Ministros</Link></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>
    )
  }

  renderLinksContactInfo(){
    return(
      <div className="col-md-4 col-sm-4">
        <h4>Información de contacto</h4>
        <ul>
          <li><a href="#"><i className="fa fa-phone"></i> (011) 4909-2402</a></li>
          <li><a href="#"><i className="fa fa-envelope"></i> baparticipacionciudadana@buenosaires.gob.ar</a></li>
          <li>
            <a href="#">Seguinos en:</a>
            <ul className="follow-redes">
              <li><a href="https://www.facebook.com/BaParticipacionCiudadana/"><i className="fa fa-facebook-square fa-lg"></i></a></li>
              <li><a href="https://twitter.com/BAPartCiudadana"><i className="fa fa-twitter fa-lg"></i></a></li>
              <li><a href="https://www.instagram.com/baparticipacionciudadana/"><i className="fa fa-instagram fa-lg"></i></a></li>
              <li><a href="#"><i className="fa fa-youtube-play fa-lg"></i></a></li>
              <li><a href="#"><i className="fa fa-rss fa-lg"></i></a></li>
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
