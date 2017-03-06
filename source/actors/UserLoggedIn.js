import { AuthStore } from '../store/AuthStore';
import {  refreshJWT } from '../actions/UserAction';

export default function UserLoggedIn(state, dispatch){

	if(state.user.isAuthenticated){
		var user = JSON.parse(AuthStore.getUser()),
			expiration_date = new Date(user.token_exp * 1000),
			actual_date = new Date();

		actual_date.setMinutes(actual_date.getMinutes() - 10);

		if(actual_date >= expiration_date){
			console.log("Actualizar token con fecha actual "+actual_date+" y fecha de expiracion "+expiration_date );
			dispatch(refreshJWT());
		}

	}

}