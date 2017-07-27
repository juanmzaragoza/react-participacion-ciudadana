import * as actionTypes from 'constants/SubscriptionActionTypes';
import {dispatchError} from './Common';

let config = require('config/config');
import { AuthStore } from 'store/AuthStore';

//check if user is subscribed
export const checkIfUserIsSubscribed = (id, request_type) => {

    return (dispatch) => {

        if(!AuthStore.isAuthenticated()){
            dispatch(userIsNotSubscribed());
        } else{
            return fetch(config.api_url+'auth/'+request_type+'/'+id+'/suscripto', {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'bearer '+AuthStore.getJwt()
                    }
                })
                .then(response => {
                    if(response.status == 200){
                        return response.json();
                    }
                    throw new Error("Error la comprobacion de la suscripcion");
                })
                .then(json => {
                    dispatch(receiveSuscriptionCheck(json));            
                })
                .catch(err => {
                    dispatch(userIsNotSubscribed());
                })
        }
    }
}

export const receiveSuscriptionCheck = (json,user_id) => {

    var response =  {
        type: actionTypes.USER_ISNOT_SUBSCRIBED
    }

    if(json.suscripto !== undefined && json.suscripto == true){
        response.type = actionTypes.USER_IS_SUBSCRIBED;
    }

    return response;
}

export const userIsNotSubscribed = () => {
    return {
        type: actionTypes.USER_ISNOT_SUBSCRIBED
    }
}

//subscribe
export const subscribeSuccess = (json) => { 
    if(json.fecha_baja == null){
        return {
            type: actionTypes.USER_IS_SUBSCRIBED
        }
    } else{
        return {
            type: actionTypes.USER_ISNOT_SUBSCRIBED
        }
    }
    
}

/*export const subscribeError = (error) => { 
    return{
        type: actionTypes.USER_ISNOT_SUBSCRIBED,
        error: error
    }
}*/

export const subscribe = (id, request_type) => {

    return (dispatch) => {

        return fetch(config.api_url+'auth/'+request_type+'/'+id+'/suscribirse', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'bearer '+AuthStore.getJwt()
                },
                body: JSON.stringify({
                    data: ''
                })
            }).then(response => {
                if(response.status == 200){
                    return response.json();
                } else if(response.status == 404){
                    throw new Error("Entidad no encontrada");
                } else if(response.status == 401){
                    throw new Error("Problema con la autenticacion");
                }
                throw new Error("Problema interno");
                
            })
            .then(json => {
                dispatch(subscribeSuccess(json));
            })
            .catch(err => {
                console.log(err);
                //dispatch(subscribeError(err.message));
            });
    }
}

export const getAllSubscriptions = () => {
    
    return (dispatch) => {

        dispatch(suscriptionsTestingOk());

        if(!AuthStore.isAuthenticated()){
            dispatch(userIsNotAuthenticated());
        } else{

            dispatch(requestSubscriptions());

            return fetch(config.api_url+'auth/suscripciones', {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'bearer '+AuthStore.getJwt()
                    }
                }).then(response => {
                    if(response.status == 200){
                        return response.json();
                    } else if(response.status == 401){
                        throw new Error("Problema con la autenticacion");
                    }
                    throw new Error("Problema interno");
                    
                })
                .then(json => {
                    dispatch(receiveSubscriptions(json));
                })
                .catch(err => {
                    dispatchError(dispatch,requestSubscriptionsError,err);
                });
        }
    }
}

export const suscriptionsTestingOk = () => { 
    return{
        type: actionTypes.REQUEST_SUBSCRIPTIONS_TESTING_OK
    }
}

export const requestSubscriptions = () => { 
    return{
        type: actionTypes.REQUEST_SUBSCRIPTIONS
    }
}

export const receiveSubscriptions = (json) => {
    return {
        type: actionTypes.REQUEST_SUBSCRIPTIONS_SUCCESS,
        content: json
    }
}

export const requestSubscriptionsError = (error) => {
    return{
        type: actionTypes.REQUEST_SUBSCRIPTIONS_FAILURE,
        error: error
    }
}

export const userIsNotAuthenticated = () => { 
    return{
        type: actionTypes.USER_ISNOT_AUTHENTICATED
    }
}