import fetch from 'isomorphic-fetch';
import * as types from '../constants/RequestActionTypes';
import * as voteTypes from '../constants/VoteActionTypes';
import * as messages from '../constants/CommonMessages';

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
                dispatch(voteError(messages.API_CALL_ERROR));
            });
    }
}

export const requestVotation = () => {
    return {
        type: types.REQUEST_VOTATION
    }
}

export const receiveVotation = (json) => { //accion que se dispara al terminar de recibir la consulta

    return {
        type: types.REQUEST_VOTATION_SUCCESS,
        votation: json
    }
}

export const requestVotationError = () => { //se dispara esta accion para informar de un error
    return{
        type: types.REQUEST_VOTATION_FAILURE,
    }
}

export const fetchVotation = (request_type, content_id) => {

    return (dispatch) => {

        //1- dispatch: actualizo el estado informando que la api call comenzó
        dispatch(requestVotation())

        //2- devolvemos una promise a esperar
        return fetch(config.api_url+'votaciones?publicado=1&estado=1&ultima=1&'+request_type+'='+content_id)
            .then(response => {
                return response.json()
            })
            .then(json => {
                if(json.code === 200){
                    dispatch(receiveVotation(json))
                } else{
                    dispatch(requestVotationError())
                }                
            })
            .catch(err => {
                console.log(err)
                dispatch(requestVotationError())
            })   
    }
}

export const checkIfUserAnswerVotation = (id, user_id) => {

    return (dispatch) => {

        dispatch(requestVotationCheck())

        return fetch(config.api_url+'auth/votacion/'+id, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'bearer '+AuthStore.getJwt()
                }
            })
            .then(response => {
                return response.json()
            })
            .then(json => {
                dispatch(receiveVotationCheck(json,user_id));            
            })
            .catch(err => {
                console.log(err)
                dispatch(requestVotationError())
            })
    }
}

export const receiveVotationCheck = (json,user_id) => {

    var response =  {
        type: voteTypes.USER_NOT_ANSWERED_VOTATION,//USER_ANSWERED_VOTATION
        votation: json
    }, user_answered = false;

    if(json.usuarios_participantes !== undefined){
        user_answered = json.usuarios_participantes.some(function(element,index){
            return element.id == user_id;
        });
    }

    if(user_answered){
        response.type = voteTypes.USER_ANSWERED_VOTATION;
    }

    return response;
}

export const requestVotationCheck = () => {
    return {
        type: voteTypes.USER_ANSWERED_VOTATION_CHECKED
    }
}

