import { default as React, Component, PropTypes  } from "react";
import ReactDOM from "react-dom";
import { Modal } from "react-bootstrap";
import Formulario from "./Formulario";
import Input from "./Input";

class ModalLogin extends React.Component {

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
    this.props.loginUsernamePassword(this.refs.username.value(),this.refs.password.value());
  }

  render() {
    var show = this.props.show? true:false;
    return (
      <Modal show={show}>

        <Modal.Header>
          <button type="button" className="close" aria-label="Close" onClick={this.props.closeModal}>
            <span aria-hidden="true">×</span>
          </button>
          <h3 className="modal-title" id="modal-header-title">Ingresar a Mi Cuenta</h3>
        </Modal.Header>

        <Formulario action="#" submit={this.handleFormSubmit.bind(this)}>

          <Modal.Body>

            <div className="form-group">
              <label htmlFor="id_username">Nombre de usuario</label>
              <Input className="form-control input-lg" id="id_username" name="username" ref="username" placeholder="Nombre de usuario" type="text" />
            </div>

            <div className="form-group">
              <label htmlFor="id_password">Contraseña</label> 
              <span className="passw"><a href="#">Olvidé mi contraseña.</a></span>
              <Input className="form-control input-lg" id="id_password" name="password" ref="password" placeholder="Contraseña" type="password" />
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

          </Modal.Body>

          <Modal.Footer>
            <button type="button" className="btn btn-default" onClick={this.props.closeModal}>Cancelar</button>
            <button type="submit" className="btn btn-primary">Ingresar</button>
          </Modal.Footer>

        </Formulario>

      </Modal>
    )
  }
}

ModalLogin.propTypes = {
  show: PropTypes.bool,
  closeModal: PropTypes.func,
  componentWillMount: PropTypes.func,
  componentDidMount: PropTypes.func,
  loginUsernamePassword: PropTypes.func,
  loginError: PropTypes.bool
}

export default ModalLogin