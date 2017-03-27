import React from "react";
import Main from "../components/Layout/Main";
import Separator from "../components/Layout/Separator";
import { ChangePasswordFormContainer } from "../components/ChangePasswordForm";

const CambiarContrasena = (props) => {

    return (
		<Main>

			<Separator />

			<ChangePasswordFormContainer 
				email={props.location.query.email}
				token={props.location.query.token} />
        	
      	</Main>
	)
}

export default CambiarContrasena