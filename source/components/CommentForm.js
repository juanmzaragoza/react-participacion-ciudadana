import React, { PropTypes } from "react";
import SendButton from "./SendButton";
import TextArea from "./TextArea";
import Formulario from "./Formulario";

class CommentForm extends React.Component {

	constructor(props) {
		super(props);
	}

	handleFormSubmit(e) {
		if(this.props.canPost){
			if(this.props.postComment !== undefined){
				this.props.postComment(this.refs.comentario.value());
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
					  <SendButton button={true} className="btn btn-default" value="Enviar Comentario" />

					  {this.props.error? 
			              <div className="alert alert-danger" role="alert">
			                <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
			                <span className="sr-only">Error:</span>
			                No se pudo enviar el comentario. Intentelo nuvamente mas tarde
			              </div>
			              :
			              null
			          }

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

export default CommentForm