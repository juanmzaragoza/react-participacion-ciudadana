import React from "react";
var logoBa = require("../../public/vendor/bastrap3/logo-ba.svg");
var logoBaPc = require("../../public/vendor/bastrap3/ba-PC-header.png");

const Header = () => (
  <header className="navbar navbar-primary navbar-top">
    <div className="container">
      <div className="row">
        <div className="col-md-9 col-sm-6">
          <img className="logo-ba" src={logoBa}/>
        </div>
        <div className="col-md-3 col-sm-6  oculto">
          <span className="title-subse">
            Participación Ciudadana<br/>Subsecretaría de Comunicación
          </span>
        </div>
      </div>
    </div>
  </header>
)

export default Header