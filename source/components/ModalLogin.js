import { default as React, Component} from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { Modal } from "react-bootstrap";
import { connect } from 'react-redux';
import { Field, reduxForm , Form, SubmissionError } from 'redux-form';

import { hideLoginForm, login, showResetPasswordForm } from '../actions/UserAction';

import Formulario from "./Formulario";
import { LoginCaptcha } from './Captcha';

export class ModalLogin extends React.Component {

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

  renderField ({ input, id, placeholder, className, label, required, type, extra = false,meta: { touched, error, warning } }) {
    
    const formGroup = (touched && error)? "form-group has-error":"form-group ";

    return (
      <div className={formGroup}>
        <label htmlFor={id}>{label}</label>
        {extra? extra:null}
        <input {...input} className={className} id={id} placeholder={placeholder} type={type} required={required}/>
        {touched && ((error && <span id="error" className="help-block">{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    )
  }

  required(value){
    return value ? undefined : 'Campo requerido';
  }

  closeModal(){
    if(this.props.closeModal !== undefined){
       this.props.closeModal();
    }
  }

  render() {

    const { handleSubmit } = this.props;
    var show = this.props.show? true:false;

    return (
      show? 
        <Modal show={show} onHide={this.closeModal.bind(this)}>

          <Modal.Header>
            <button type="button" className="close" aria-label="Close" onClick={this.props.closeModal}>
              <span aria-hidden="true">×</span>
            </button>
            <h3 className="modal-title" id="modal-header-title">Ingresar a Mi Cuenta</h3>
          </Modal.Header>

          <Formulario action="#" submit={ handleSubmit((values)=>{this.props.onSubmit(values, this.props.submitEnabled);})/*handleSubmit(this.props.onSubmit)*/ } >

            <Modal.Body>

              <Field className="form-control input-lg" 
                label={"Nombre de usuario"}
                id={"id_username"} 
                name={"username"} 
                placeholder={"Nombre de usuario"} 
                component={this.renderField} 
                validate={this.required}
                required={true}
                type={"text"} />

              <Field className="form-control input-lg" 
                label={"Contraseña"}
                id={"id_password"} 
                name={"password"} 
                placeholder={"Contraseña"} 
                component={this.renderField} 
                validate={this.required}
                required={true}
                type={"password"}
                extra={<span className="passw"><a href="#" onClick={this.props.handleResetPassword}>Olvidé mi contraseña</a></span>} />

              <div className="form-group">
                <LoginCaptcha />
              </div>

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
              <button  type="submit" className="btn btn-primary">Ingresar</button>
            </Modal.Footer>

          </Formulario>

        </Modal>
        :
        null
    )
  }
}

ModalLogin.propTypes = {
  show: PropTypes.bool,
  closeModal: PropTypes.func,
  componentWillMount: PropTypes.func,
  componentDidMount: PropTypes.func,
  onSubmit: PropTypes.func,
  handleResetPassword: PropTypes.func,
  errorMessage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ])
}

const validate = values => {
  const errors = {};
  return errors;
}

export const ModalLoginForm = reduxForm({
  form: 'ModalLoginForm',  // a unique identifier for this form
  validate
})(ModalLogin)


//container
const mapStateToProps = (state, ownProps) => {
    
    var captchaError = state.captcha.error? state.captcha.errorMessage: false;

    return {
      show: !state.user.isAuthenticated && state.loginForm.visible,
      errorMessage: state.user.loginFailed || state.captcha.errorMessage,
      submitEnabled: state.captcha.verified
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    closeModal: () => {
      dispatch(hideLoginForm());
    },
    onSubmit: (values, extraVerification) => {
      dispatch(login(values.username,values.password,extraVerification));
    },
    handleResetPassword: () => {
      dispatch(showResetPasswordForm());
    }
  }
}

export const ModalLoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalLoginForm)
