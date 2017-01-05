import fetch from 'isomorphic-fetch';
import * as types from '../constants/RequestActionTypes';
let config = require('../config/config');

export const requestStatics = () => { 
    return{
        type: types.REQUEST_STATICS
    }
}

export const receiveStatics = (json) => { 
    return {
        type: types.REQUEST_STATICS_SUCCESS,
        votes: json.votos,
        subscriptions: json.suscripciones
    }
}

export const requestStaticsError = () => {
    return{
        type: types.REQUEST_STATICS_FAILURE,
    }
}

export const fetchStatics = () => {

    return (dispatch) => {

        //1- dispatch: actualizo el estado informando que la api call comenzó
        dispatch(requestStatics())

        //2- devolvemos una promise a esperar
        return fetch(config.api_url+'contador')
            .then(response => {
                return response.json()
            })
            .then(json => {
                dispatch(receiveStatics(json))
            })
            .catch(err => {
                console.log(err)
                dispatch(requestStaticsError())
            })   
    }
}