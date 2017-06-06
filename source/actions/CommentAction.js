import fetch from 'isomorphic-fetch';
import * as types from 'constants/RequestActionTypes';
import * as messages from 'constants/CommonMessages';

let config = require('config/config')
import { AuthStore } from 'store/AuthStore';

//DO COMMENT
export const commentSuccess = (json) => { //accion que se dispara al terminar de recibir la consulta
    return {
        type: types.COMMENT_SUCCESS,
        comment: json
    }
}

export const commentError = (error) => { //se dispara esta accion para informar de un error
    return{
        type: types.COMMENT_FAILURE,
        error: error
    }
}

export const comment = (id, type, comment, id_user) => {

    return (dispatch) => {

        return fetch(config.api_url+'auth/comentario/crear', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'bearer '+AuthStore.getJwt()
                },
                body: JSON.stringify({
                    usuario: id_user,
                    entidad: id,
                    tipo: type,
                    comentario: comment
                })
            }).then(response => {
                if(response.status == 200){
                    return response.json();
                } else if(response.status == 400){
                    throw new Error("Verifique el comentario ingresado");
                }
                throw new Error("Ocurrio un problema con la autenticacion");
                
            })
            .then(json => {
                dispatch(commentSuccess(json));
            })
            .catch(err => {
                console.log(err);
                dispatch(commentError(messages.API_CALL_ERROR));
            });
    }
}

//REQUEST COMENTS
export const requestComments = () => { 
    return{
        type: types.REQUEST_COMMENTS
    }
}

export const receiveComments = (json) => { //accion que se dispara al terminar de recibir la consulta
    return {
        type: types.REQUEST_COMMENTS_SUCCESS,
        content: json.rows
    }
}

export const requestCommentsError = () => { //se dispara esta accion para informar de un error
    return{
        type: types.REQUEST_COMMENTS_FAILURE,
    }
}

export const fetchComments = (id, type, page = 1,limit = 25,filters = {}) => {

    return (dispatch) => {

        dispatch(requestComments());

        return fetch(config.api_url+type+'/'+id+'/comentarios?limit='+limit+'&page='+page)
            .then(response => {
                return response.json()
            })
            .then(json => {
                dispatch(receiveComments(json))
            })
            .catch(err => {
                console.log(err)
                dispatch(requestCommentsError())
            })   
    }
}