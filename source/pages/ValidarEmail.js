import React from "react";
import Main from "components/Layout/Main";
import Section from "components/Layout/Section";

import { connect } from 'react-redux';

import { emailConfirmation } from 'actions/UserAction';

class ValidarEmail extends React.Component {

	constructor(props) {
    	super(props);
  	}

  	componentDidMount() {
	    if(this.props.componentDidMount !== undefined){
	    	this.props.componentDidMount();
	    }
  	}

  	render() {

	    return (
			<Main>

				{this.props.success?
					<Section >
						<div>
				            <h1>Confirmacion exitosa!</h1>
				        	<div className="alert alert-success" role="alert"> 
				        		<strong>Felicitaciones! &nbsp;</strong> 
				        		Ha confirmado correctamente su correo. <a href="/" className="alert-link">Presione aqui para dirigirse a la pagina principal</a>. 
				        	</div>
				        </div>
				    </Section>
			        :
			        null
			    }

			    {this.props.error?
			    	<Section >
				        <div>
				            <h1>Error en la validacion!</h1>
				        	<div className="alert alert-danger" role="alert"> 
				        		<strong>Ha ocurrido un problema! &nbsp;</strong> 
				        		Corrobore el usuario ingresado o que el token no haya expirado
				        	</div>
				        </div>
			        </Section>
			        :
			        null
			    }		        
	        	
	      	</Main>
		)

	}
}


//container
const mapStateToProps = (state, ownProps) => {
    return {
        error: state.user.validationProcess.error,
        success: state.user.validationProcess.success
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

	var email = ownProps.location.query.email,
		token = ownProps.location.query.token;

  	return {
    	componentDidMount: () => {
      		dispatch(emailConfirmation({
      			email: email,
      			token: token
      		}))
    	}
  	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ValidarEmail)