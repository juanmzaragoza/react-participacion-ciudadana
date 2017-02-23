import React, { PropTypes } from "react";
import SendButton from "./SendButton";
import { Field, reduxForm , Form } from 'redux-form';

class VoteForm extends React.Component {

	constructor(props) {
		super(props);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	handleFormSubmit(e) {
		if(this.props.canVote){
			if(this.props.onSubmit !== undefined){
				e = Object.assign({}, e, {
					votacion: this.props.id
				});
				this.props.onSubmit(e);
			}
		} else{
			if(this.props.onNoVote !== undefined){
				this.props.onNoVote();
			}
		}
  	}

	renderField ({ input, id, description, meta: { touched, error, warning } }) {
  		return (
            <div className="radio">
				<label>
					<input 
						{...input}
						type="radio" 
						id={"optionsRadios"+id} 
						value={id}
						required={true} />
			  		<p>{description}</p>
				</label>
		 	</div>
		)
  	}

	render(){

		const { handleSubmit } = this.props;

		return (
			(this.props.opciones != null && this.props.opciones.length>0)?
				<div>
					<header>
	              		<h2>{this.props.titulo}</h2>
	              		<p className="lead">{this.props.descripcion_breve}</p>
		            </header>
				 
				 	<article className="contenido">
	     				{this.props.contenido}
				 	</article>
				 	<div className="clear"></div>

				  	<div className="row">
				     	<div className="col-xs-12 col-sm-12 col-md-12" >
					     	<Form className="bg-vot" onSubmit={ handleSubmit(this.handleFormSubmit) } > 

					     		<header>
								  	<h3>{this.props.titulo}</h3>
	                         	</header>

							 	<div className="clear_ev"></div>
							 	{this.props.opciones.map( (opcion, index) => {
							 		return (
							 			<Field 
							 				key={index}
								 			id={opcion.id} 
								 			name={"opcion"}
								 			description={opcion.descripcion} 
								 			component={this.renderField} />
							 		)
							 	})}
							 	
							 	{this.props.messageError? 
					              	<div className="alert alert-warning" role="alert">
					                	<span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
						                <span className="sr-only">Error:</span>
						                &nbsp;No se pudo realizar la votacion. {this.props.messageError}
					              	</div>
					              	:
					              	null
					          	}

							  	<button type="submit" className="btn btn-vt btn-lg">Votar</button>
							  	<div className="clear"></div>

						 	</Form>
					 	</div>
				 	</div>	 
	             	<div className="clear"></div>
	        	</div>
	        	:
	        	null
		)
	}
}

VoteForm.propTypes = {
  id: PropTypes.number,
  titulo: PropTypes.string,
  descripcion_breve: PropTypes.string,
  contenido: PropTypes.string,
  opciones: PropTypes.array,
  canVote: PropTypes.bool,
  onSubmit: PropTypes.func,
  onNoVote: PropTypes.func
}

export default reduxForm({
  	form: 'VoteForm',  // a unique identifier for this form
})(VoteForm)