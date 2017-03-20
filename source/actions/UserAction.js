import fetch from 'isomorphic-fetch';

import * as types from '../constants/AuthConstants';
import * as requestTypes from '../constants/RequestActionTypes';
import * as userTypes from '../constants/UserConstants';

let config = require('../config/config')
import { AuthStore } from '../store/AuthStore';

export const requestLogin = () => { 
    return{
        type: types.LOGIN_API_REQUEST
    }
}

export const loginSuccess = (json) => { //accion que se dispara al terminar de recibir la consulta
    return {
        type: types.LOGIN_API_SUCCESS,
        user: json
    }
}

export const loginError = (error) => { //se dispara esta accion para informar de un error
    return{
        type: types.LOGIN_API_FAILURE,
        error: error
    }
}

export const login = (username, password) => {

    return (dispatch) => {

        //1- dispatch: actualizo el estado informando que la api call comenzó
        dispatch(requestLogin());

        //2- devolvemos una promise a esperar
        return fetch(config.api_url+'auth', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            }).then(response => {
                if(response.status == 200){
                    return response.json();
                }
                if(response.status == 401){
                    throw new Error("Usuario o contraseña incorrectos");
                }
                throw new Error("Ocurrio un problema con la autenticacion");
                
            })
            .then(json => {
                dispatch(loginSuccess(json));
                dispatch(hideLoginForm());
            })
            .catch(err => {
                console.log(err);
                dispatch(loginError(err.message));
            });
    }
}

export const refreshLogin = () => {
    return{
        type: types.LOGIN_USER
    }
}

export const logout = () => {
    return{
        type: types.LOGOUT_USER
    }
}

export const showLoginForm = () => {
    return{
        type: types.SHOW_LOGIN_FORM
    }
}

export const hideLoginForm = () => {
    return{
        type: types.HIDE_LOGIN_FORM
    }
}

//CREATE USER
export const createUserSuccess = (json) => { //accion que se dispara al terminar de recibir la consulta
    return {
        type: userTypes.CREATE_USER_SUCCESS,
        user: json
    }
}

export const createUserError = (error) => { //se dispara esta accion para informar de un error
    return{
        type: userTypes.CREATE_USER_FAILURE,
        error: error
    }
}

export const createUser = (values) => {

    return (dispatch) => {

        return fetch(config.api_url+'usuario/crear', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombre: values.nombre,
                    apellido: values.apellido,
                    nombre_usuario: values.nombre_usuario,
                    email: values.email,
                    password: values.password,
                    identificacion: values.identificacion,
                    genero: values.genero,
                    celular: values.celular,
                    barrio: values.barrio,
                    host: values.host
                })
            }).then(response => {
                if(response.status == 200 || response.status == 400){
                    return response.json();
                }
                throw new Error("Ocurrio un problema inesperado. Intente nuevamente en unos minutos");  
            })
            .then(json => {
                if(json.code == 400){
                    throw new Error(json.error);
                } else{
                    dispatch(createUserSuccess(json));    
                }                
            })
            .catch(err => {
                console.log(err);
                dispatch(createUserError(err.message));
            });
    }
}

export const refreshJWT = () => {

    return (dispatch) => {

        //2- devolvemos una promise a esperar
        return fetch(config.api_url+'auth/actualizacion', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'bearer '+AuthStore.getJwt()
                }
            }).then(response => {
                if(response.status == 200){
                    return response.json();
                }
                if(response.status == 401){
                    throw new Error("Usuario o contraseña incorrectos");
                }
                throw new Error("Ocurrio un problema con la autenticacion");
                
            })
            .then(json => {
                dispatch(loginSuccess(json));
            })
            .catch(err => {
                console.log(err);
                dispatch(logout());
            });
    }
}

//USER CONFIRM EMAIL
export const emailConfirmationSuccess = (json) => { //accion que se dispara al terminar de recibir la consulta
    return {
        type: userTypes.CONFIRM_EMAIL_SUCCESS,
        user: json
    }
}

export const emailConfirmationError = (error) => { //se dispara esta accion para informar de un error
    return{
        type: userTypes.CONFIRM_EMAIL_ERROR,
        error: error
    }
}

export const emailConfirmation = (values) => {

    return (dispatch) => {

        return fetch(config.api_url+'usuario/verificar', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: values.email,
                    token: values.token
                })
            }).then(response => {
                if(response.status == 200 || response.status == 400){
                    return response.json();
                }
                throw new Error("Ocurrio un problema inesperado. Intente nuevamente en unos minutos");  
            })
            .then(json => {
                if(json.code == 400){
                    throw new Error(json.error);
                } else{
                    dispatch(emailConfirmationSuccess(json));    
                }                
            })
            .catch(err => {
                console.log(err);
                dispatch(emailConfirmationError(err.message));
            });
    }
}