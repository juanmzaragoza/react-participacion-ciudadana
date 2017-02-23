import fetch from 'isomorphic-fetch';
import * as types from '../constants/RequestActionTypes';
let config = require('../config/config')
import { AuthStore } from '../store/AuthStore';

//DO VOTATION
export const voteSuccess = (json) => { //accion que se dispara al terminar de recibir la consulta
    return {
        type: types.VOTE_SUCCESS,
        vote: json
    }
}

export const voteError = (error) => { //se dispara esta accion para informar de un error
    return{
        type: types.VOTE_FAILURE,
        error: error
    }
}

export const vote = (votation_id, option_id, user_id) => {

    return (dispatch) => {

        return fetch(config.api_url+'auth/voto/crear', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'bearer '+AuthStore.getJwt()
                },
                body: JSON.stringify({
                    usuario: user_id,
                    votacion: votation_id,
                    opcion: option_id
                })
            }).then(response => {
                if(response.status == 200 || response.status == 400){
                    return response.json();
                }
                throw new Error("Ocurrio un problema con la autenticacion");
                
            })
            .then(json => {
                if(json.code == 400){
                    throw new Error(json.error);
                } else{
                    dispatch(voteSuccess(json));    
                }     
            })
            .catch(err => {
                console.log(err);
                dispatch(voteError(err.message));
            });
    }
}