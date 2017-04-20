import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import SendButton from "./SendButton";
import TextArea from "./TextArea";
import Formulario from "./Formulario";

import { showLoginForm } from '../actions/UserAction';
import { comment as c } from '../actions/CommentAction';

import { AuthStore } from '../store/AuthStore';

export class CommentForm extends React.Component {

	constructor(props) {
		super(props);
	}

	handleFormSubmit(e) {
		if(this.props.canPost){
			if(this.props.postComment !== undefined){
				this.props.postComment(this.props.id, this.props.type, this.refs.comentario.value());
			}
		} else{
			if(this.props.onNoComment !== undefined){
				this.props.onNoComment();
			}
		}
  	}

	render(){

		const classFormGroup = this.props.error? "form-group has-error":"form-group";

		return (
			<div>
				<header>
	          		<h3>Dejá tu Comentario</h3>
	          		<p>Aquí podes dejarnos un breve comentario de lo que te parece la obra/proyecto</p>
	         	</header>
	         	<Formulario className="col-md-12" submit={this.handleFormSubmit.bind(this)}>
					<div className={classFormGroup}>
					  <label htmlFor="comentarios">Comentarios</label>
					  <TextArea className="form-control input-lg" rows="3" placeholder="Dejenos su comentario" id="comentario" ref="comentario" />
					  <br />
					  {this.props.messageError? 
			              <div className="alert alert-danger" role="alert">
			                <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
			                <span className="sr-only">Error:</span>
			                No se pudo enviar el comentario. {this.props.messageError}
			              </div>
			              :
			              null
			          }
			          {this.props.commentSuccess? 
			              <div className="alert alert-success" role="alert">
			                <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
			                <span className="sr-only">Exito:</span>
			                Comentario enviado correctamente
			              </div>
			              :
			              null
			          }
					  <SendButton button={true} className="btn btn-default" value="Enviar Comentario" />

					  

					</div>
			    </Formulario>
			</div>
		)
	}
}

CommentForm.propTypes = {
  error: PropTypes.bool,
  canPost: PropTypes.bool,
  postComment: PropTypes.func,
  onNoComment: PropTypes.func
}


const mapStateToProps = (state, ownProps) => {
    return {
      canPost: state.user.isAuthenticated,
      id: state.result.content.id,
      type: state.result.content.obra_etapas !== undefined? 'obra':'evento',
      messageError: state.commentForm.error.isError? state.commentForm.error.message:null,
      commentSuccess: state.commentForm.success
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    postComment: (id, type, comment) => {
      var user = JSON.parse(AuthStore.getUser());
      dispatch(c(id, type, comment, user.id));
    },
    onNoComment: () => {
      dispatch(showLoginForm());
    }
  }
}

export const CommentFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm)