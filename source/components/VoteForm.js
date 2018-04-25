import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Field, reduxForm , Form } from 'redux-form';

import { showLoginForm } from 'actions/UserAction';
import { vote } from 'actions/VoteAction';

import { AuthStore } from 'store/AuthStore';

import SendButton from "components/SendButton";
import ThumbnailDescriptionItem from "components/Item/ThumbnailDescriptionItem";


class VoteFormComponent extends React.Component {

	constructor(props) {
		super(props);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	handleFormSubmit(opcionId) {
		if(this.props.canVote){
			if(this.props.onSubmit !== undefined){
				const answer = {
					votacion: this.props.id,
					opcion: opcionId
				};
				this.props.onSubmit(answer);
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

		//const { handleSubmit } = this.props;

		return (
			(this.props.opciones != null && this.props.opciones.length>0)?
			  	<div className="row">
			     	<div className="col-xs-12 col-sm-12 col-md-12" >
				     	{/*<Form className="bg-vot" onSubmit={ handleSubmit(this.handleFormSubmit) } > */}
				     	<div className="bg-vot">

				     		<header>
							  	<h3>{this.props.titulo}</h3>
               	</header>

							 	<div className="clear"></div>
							 	<div className="row">
								 	{this.props.opciones.map( (opcion, index) => {

								 		const imageUrl = opcion.image != null? opcion.image.url:"",
								 					thumbnailDisabled = opcion.image == null;

								 		return (
									 		<ThumbnailDescriptionItem 
												key={index}
												id={opcion.id} 
												thumbnail_src={imageUrl} 
												label={opcion.nombre}
												description={opcion.descripcion} 
												linkText={"Votar"} 
												linkHref={"#"}
												colSm={6}
												colMd={6}
												thumbnailDisabled={thumbnailDisabled}
												buttonClassName={"btn btn-vt btn-lg"}
												renderButton={true}
												onClickButton={e => this.handleFormSubmit(opcion.id)}  />

								 		)
								 	})}
								</div>
							 	
							 	{this.props.messageError? 
		              	<div className="alert alert-warning" role="alert">
		                	<span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
			                <span className="sr-only">Error:</span>
			                &nbsp;No se pudo realizar la votacion. {this.props.messageError}
		              	</div>
		              	:
		              	null
		          	}
		          	<div className="clear"></div>

							</div>
					 		{/*</Form>*/}
				 		</div>
			 		</div>
	        	:
	        	null
		)
	}
}

VoteFormComponent.propTypes = {
  id: PropTypes.number,
  titulo: PropTypes.string,
  opciones: PropTypes.array,
  canVote: PropTypes.bool,
  onSubmit: PropTypes.func,
  onNoVote: PropTypes.func
}

export const VoteForm = reduxForm({
  	form: 'VoteForm',  // a unique identifier for this form
})(VoteFormComponent)


//container
const mapStateToProps = (state, ownProps) => {

    var returnObj = {
      id: undefined,
      titulo: undefined,
      opciones: undefined,
      canVote: state.user.isAuthenticated,
      messageError: state.voteForm.error.isError? state.voteForm.error.message:null,
    }

    if(state.voteForm.votation.error != true && state.voteForm.votation.content != null){
      var votation = state.voteForm.votation.content;
      returnObj = Object.assign({}, returnObj, {
        id: votation.id,
        titulo: votation.nombre,
        opciones: votation.opciones
      });
    }

    return returnObj;
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit(e){
      var user = JSON.parse(AuthStore.getUser());
      dispatch(vote(e.votacion, e.opcion, user.id));
    },
    onNoVote(){
      dispatch(showLoginForm());
    }
  }
}

export const VoteFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VoteForm)