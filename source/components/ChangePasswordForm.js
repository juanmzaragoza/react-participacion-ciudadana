import React from "react";
import PropTypes from "prop-types";
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Field, reduxForm , Form } from 'redux-form';
import {  browserHistory } from 'react-router';

import { showLoginForm, changePassword } from 'actions/UserAction';

import Formulario from "components/Formulario";

const  { DOM: { input, select, textarea } } = React;

class ChangePassword extends React.Component {

	constructor(props) {
		super(props);
	}

  	required(value){
  		return value ? undefined : 'Campo requerido';
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

  	onSuccessClick(){
  		if(this.props.onSuccessClick() !== undefined){
  			this.props.onSuccessClick();
  		}
  	}

	render(){

		const { handleSubmit } = this.props;

		return (
			<section >
				<div className="container">

	          		<h2 className="h1">Cambiar contraseña</h2>
	          		<br/>

	          		<Formulario className="col-md-8" submit={ handleSubmit(this.props.onSubmit) }>

			            <Field className="form-control input-lg" 
			              label={"Nueva contraseña"}
			              id={"id_password"} 
			              name={"password"} 
			              placeholder={"Ingresa una contraseña"} 
			              component={this.renderField} 
			              required={true}
			              type={"password"} />

			            <Field className="form-control input-lg" 
			              label={"Confirmar contraseña"}
			              id={"id_confirm_password"} 
			              name={"confirm_password"} 
			              placeholder={"Repita la contraseña"} 
			              component={this.renderField} 
			              required={true}
			              type={"password"} />
						
						{this.props.errorMessage?
							<div className="alert alert-danger" role="alert">
				                <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
				                <span className="sr-only">Error:</span>
				                &nbsp; {this.props.errorMessage}
			              	</div>
			              	:
			              	null
			            }

			            {this.props.successMessage?
			            	<div className="alert alert-success" role="alert">
			                	<span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
				                <span className="sr-only">Exito:</span>
				                &nbsp; Contraseña modificada correctamente. Presione <a href="#" onClick={this.onSuccessClick.bind(this)}>aqui</a> para iniciar sesion
			              	</div>
			            	:
			            	<button type="submit" className="btn btn-primary btn-lg">Confirmar</button>
					   	}

		          	</Formulario>
		        </div>
	        </section>
		)
	}
}

ChangePassword.propTypes = {
  onSubmit: PropTypes.func,
  onSuccessClick: PropTypes.func,
  successMessage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  errorMessage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ])
}

const validate = values => {
	const errors = {};
	if (values.password !== values.confirm_password) {
    	errors.password = 'Las contraseñas deben coincidir';
  	}
  	return errors;
}

export const ChangePasswordForm = reduxForm({
  form: 'ChangePasswordForm',  // a unique identifier for this form
  validate
})(ChangePassword)


//container
const mapStateToProps = (state, ownProps) => {
    return {
      errorMessage: state.changePasswordForm.errorMessage,
      successMessage: state.changePasswordForm.successMessage
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

	var email = ownProps.email,
		token = ownProps.token;

  	return {
	    onSubmit: (formValues) => {
	    	var values = Object.assign({},formValues,{
		        email: email,
		        token: token
	      	})
	    	dispatch(changePassword(values));
	    },
	    onSuccessClick: () => {
	    	browserHistory.push('/');
	    	dispatch(showLoginForm());
	    }
  	}
}

export const ChangePasswordFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangePasswordForm)