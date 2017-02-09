import React, { PropTypes } from "react";

class LoginForm extends React.Component {

  constructor(props) {
      super(props);
  }

  componentWillMount() {
    if(this.props.componentWillMount !== undefined){
      this.props.componentWillMount();
    }
  }

  componentDidMount() {
    if(this.props.componentDidMount !== undefined){
      this.props.componentDidMount();
    }
  }

  handleFormSubmit() {
    this.props.loginUsernamePassword(this.refs.username.value,this.refs.password.value);
  }

  onChange(e) {
    console.log(e.target.value)
  }

  render(){

    const imgBtnDefault = require("../public/vendor/bastrap3/ba-btn-default.png");

    return(
    
      <div className={this.props.classPrincipal} style={{overflow: "hidden"}}>
        <h2 className="h1 text-center">Entrá con tu cuenta</h2>
        <br />
        <form className="col-md-10 col-md-offset-1" action="#">
          <p className="text-center">
            <button className="btn btn-default btn-lg" href="#">Completá tus datos con <img src={imgBtnDefault} className="glyphicon glyphicon-ba" /></button>
          </p>
          <br />
          <br />

          <div className="form-group">
            <input className="form-control" id="id_username" name="username" ref="username" placeholder="Nombre de usuario" type="text" />
          </div>

          <div className="form-group">
            <input className="form-control" id="id_password" name="password" ref="password" placeholder="Contraseña" type="password" />
          </div>

          {this.props.loginError? 
              <div className="alert alert-danger" role="alert">
                <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                <span className="sr-only">Error:</span>
                Usuario o contraseña incorrecto
              </div>
              :
              null
          }

          <input className="btn btn-primary btn-xl btn-block" value="Entrar" readOnly onClick={this.handleFormSubmit.bind(this)} />

        </form>



      </div>
    )
    
  }

}

LoginForm.propTypes = {
  componentWillMount: PropTypes.func,
  componentDidMount: PropTypes.func,
  loginUsernamePassword: PropTypes.func,
  classPrincipal: PropTypes.string,
  loginError: PropTypes.bool,
  loginSuccess: PropTypes.bool
}

export default LoginForm