import { default as React, Component} from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { Modal } from "react-bootstrap";
import { connect } from 'react-redux';
import { Field, reduxForm , Form, SubmissionError } from 'redux-form';

import { hideResetPasswordForm, emailResetPassword } from 'actions/UserAction';

import Formulario from "components/Formulario";
import Input from "components/Input";
import { ModalResetPasswordCaptcha } from 'components/Captcha';

const  { DOM: { input, select, textarea } } = React;

export class ModalResetPassword extends React.Component {

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

  email(value){
    return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Direccion email invalida' : undefined
  }

  renderField ({ input, id, placeholder, className, label, required, type, meta: { touched, error, warning } }) {
    
    const formGroup = (touched && error)? "form-group has-error":"form-group ";

    return (
      <div className={formGroup}>
        <label htmlFor={id}>{label}</label>
        <input {...input} className={className} id={id} placeholder={placeholder} type={type} required={required}/>
        {touched && ((error && <span id="error" className="help-block">{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    )
  }

  render() {
    
    const { handleSubmit } = this.props;
    var show = this.props.show? true:false;

    return (
      <Modal show={show} onHide={this.props.closeModal}>

        <Modal.Header>
          <button type="button" className="close" aria-label="Close" onClick={this.props.closeModal}>
            <span aria-hidden="true">×</span>
          </button>
          <h3 className="modal-title" id="modal-header-title">Ingresa tu correo electronico</h3>
        </Modal.Header>

        <Formulario action="#" submit={ handleSubmit((values)=>{this.props.onSubmit(values, this.props.submitEnabled);}) } >

          <Modal.Body>

            <Field className="form-control input-lg" 
              label={"Correo electrónico"}
              id={"id_email"} 
              name={"email"} 
              placeholder={"Ingresa tu correo electrónico"} 
              component={this.renderField} 
              validate={this.email}
              required={true}
              type={"text"} />

            <p className="help-block">
              Su correo debe estar registrado en el sistema para que podamos enviarle las instrucciones
              para recuperar su contraseña
            </p>

            <div className="form-group">
              <ModalResetPasswordCaptcha />
            </div>

            {this.props.successMessage?
              <div className="alert alert-success" role="alert">
                <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
                <span className="sr-only">Ok:</span>
                &nbsp; {this.props.successMessage}
              </div>
              :
              null
            }
                  
            {this.props.errorMessage?
              <div className="alert alert-danger" role="alert">
                <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                <span className="sr-only">Error:</span>
                &nbsp; <b>Error.</b> {this.props.errorMessage}
              </div>
              :
              null
            }

          </Modal.Body>

          <Modal.Footer>
            <button type="button" className="btn btn-default" onClick={this.props.closeModal}>Cancelar</button>
            {!this.props.successMessage?
              <button type="submit" className="btn btn-primary">Resetear Contraseña</button>
              :
              null
            }
          </Modal.Footer>

        </Formulario>

      </Modal>
    )
  }
}

ModalResetPassword.propTypes = {
  show: PropTypes.bool,
  closeModal: PropTypes.func,
  componentWillMount: PropTypes.func,
  componentDidMount: PropTypes.func,
  onSubmit: PropTypes.func,
  successMessage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  errorMessage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  submitEnabled: PropTypes.bool
}

const validate = values => {
  const errors = {};
  return errors;
}

export const ModalResetPasswordForm = reduxForm({
  form: 'ModalResetPasswordForm',  // a unique identifier for this form
  validate
})(ModalResetPassword)


//container
const mapStateToProps = (state, ownProps) => {    
    return {
      show: (state.loginForm.restartPassword && state.loginForm.restartPassword.visible),
      successMessage: state.loginForm.restartPassword.successMessage,
      errorMessage: state.loginForm.restartPassword.errorMessage,
      submitEnabled: state.captcha.verified
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    closeModal: () => {
      dispatch(hideResetPasswordForm());
    },
    onSubmit: (formValues, extraVerification) => {

      var nameHost = location.protocol.concat("//").concat(window.location.hostname),
          port = window.location.port;

      var values = Object.assign({},formValues,{
        host: (window.location.port)? nameHost.concat(':').concat(port).concat('/'):nameHost.concat('/')
      })

      dispatch(emailResetPassword(values, extraVerification));

    }
  }
}

export const ModalResetPasswordContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalResetPasswordForm)