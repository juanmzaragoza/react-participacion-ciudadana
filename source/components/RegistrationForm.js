import React, { PropTypes } from "react";
import ReactDOM from 'react-dom';
import Formulario from "./Formulario";
import Input from "./Input";
import { Field, reduxForm , Form } from 'redux-form';
const  { DOM: { input, select, textarea } } = React;

class RegistrationForm extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount(){
		if(this.props.getNeighborhoods !== undefined){
			this.props.getNeighborhoods();
		}
	}

  	number(value){
  		return value && isNaN(Number(value)) ? 'El campo debe ser numerico' : undefined;
  	}

  	required(value){
  		return value ? undefined : 'Campo requerido';
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

  	renderInputs(id1, label1, placeholder1, type1, validation1, required1 = false, id2, label2, placeholder2 , type2, validation2, required2=false){
  		return (
  			<div className="row">
				<div className="col-xs-12 col-sm-6 col-md-6"> 
		  			<Field className="form-control input-lg" 
		  				required={required1}
			 			label={label1}
			 			id={id1} 
			 			name={id1} 
			 			placeholder={placeholder1} 
			 			validate={validation1}
			 			component={this.renderField} type={type1} />
		 		</div>
		 		<div className="col-xs-12 col-sm-6 col-md-6"> 
		 			<Field className="form-control input-lg" 
		 				required={required1}
			 			label={label2}
			 			id={id2} 
			 			name={id2} 
			 			placeholder={placeholder2} 
			 			validate={validation2}
			 			component={this.renderField} type={type2} />
			 	</div>
            </div>
  		)
  	}

  	renderInputsSelects(id1, label1, placeholder1, validation1, id2, label2, options){
  		return (
  			<div className="row">
  				<div className="col-xs-12 col-sm-6 col-md-6"> 
  					<Field className="form-control input-lg" 
			 			label={label1}
			 			id={id1} 
			 			name={id1} 
			 			placeholder={placeholder1} 
			 			validate={validation1}
			 			component={this.renderField} type={"text"}/>
			 	</div>
			 	<div className="col-xs-12 col-sm-6 col-md-6">
			   		<label htmlFor={id2}>{label2}</label>
					<Field className="form-control input-lg" id={id2} name={id2} ref={id2} component="select">
						<option value="">Seleccionar</option>
						{options.map((option,index) => {
	        	  			return(
		              			<option key={index} value={option.id}>{option.nombre}</option>
		              		)
		              	})}
		            </Field>
			  	</div>
		 	</div>
		)
  	}

	render(){

		const { handleSubmit } = this.props;

		return (
			<section >
				<div className="container">

	          		<h2 className="h1 text-center">Completá tus datos</h2>
	          		<br/>

	          		<Formulario className="col-md-8 col-md-offset-2" submit={ handleSubmit(this.props.onSubmit) }>

			            {this.renderInputs("nombre","Nombre","Nombre","text",null,false,"apellido","Apellido","Apellido","text",null,false)}
			            <br/>
			            
		             	{this.renderInputs("nombre_usuario","Nombre usuario","Nombre usuario","text",[this.required],true,"email","Correo electronico","Correo electronico","text",[this.required,this.email],true)}
					 	<br/>
			            
			            {this.renderInputs("password","Contraseña","Contraseña","password",[this.required],true,"confirm_password","Repetir contraseña","Repetir contraseña","password",[this.required],true)}
					 	<br/>

			            {this.renderInputsSelects("identificacion","Nro. Documento (DNI / LE / LC)","Ingrese su DNI",null,"genero","Género",[{"id":'m',"nombre":'Masculino'},{"id":'f',"nombre":'Femenino'}])}
					 	<br/>

					 	{this.renderInputsSelects("celular","Número de Celular","Número de Celular",[this.number],"barrio","Tu barrio",this.props.neighborhoods)}
					 	<br/>
						
						<div className="checkbox">
							<label>
								<Field name="subscribirse" id="subscribirse" component="input" type="checkbox"/>
								<p className="subcribir">¿Te gustaría recibir información sobre las obras y proyectos de la Ciudad? Suscribite!</p>
							</label>
			            </div>
			            <br/>
						
						{this.props.submitError?
							<div className="alert alert-danger" role="alert">
				                <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
				                <span className="sr-only">Error:</span>
				                &nbsp; Problema al crear usuario: {this.props.submitError}
			              	</div>
			              	:
			              	null
			            }

			            {this.props.submitSucess?
			            	<div className="alert alert-success" role="alert">
			                	<span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
				                <span className="sr-only">Exito:</span>
				                &nbsp; Registro completado correctamente
			              	</div>
			            	:
			            	<button type="submit" className="btn btn-primary btn-lg">Crear Cuenta</button>
					   	}

		          	</Formulario>
		        </div>
	        </section>
		)
	}
}

RegistrationForm.propTypes = {
  username: PropTypes.string,
  neighborhoods: PropTypes.array,
  getNeighborhoods: PropTypes.func,
  onSubmit: PropTypes.func,
  submitError: PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool
  ])
}

const validate = values => {
	const errors = {};
	if (values.password !== values.confirm_password) {
    	errors.password = 'Las contraseñas deben coincidir';
  	}
  	return errors;
}

export default reduxForm({
  form: 'RegistrationForm',  // a unique identifier for this form
  validate
})(RegistrationForm)