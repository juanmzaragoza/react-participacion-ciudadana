import { AuthStore } from 'store/AuthStore';
import {  refreshJWT } from 'actions/UserAction';
let config = require('config/config');

export default function UserLoggedIn(state, dispatch){

	if(state.user.isAuthenticated){
		var user = JSON.parse(AuthStore.getUser()),
			expiration_date = new Date(user.token_exp * 1000),
			actual_date = new Date();

		actual_date.setMinutes(actual_date.getMinutes() + config.token_refresh);

		if(actual_date >= expiration_date){
			console.log("Actualizar token con fecha actual "+actual_date+" y fecha de expiracion "+expiration_date );
			dispatch(refreshJWT());
		}

	}

}