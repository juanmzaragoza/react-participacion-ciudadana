import fetch from 'isomorphic-fetch';
import * as types from '../constants/RequestActionTypes';
let config = require('../config/config')

export const requestItems = () => { //accion que dispara el pedido de datos devents
    return{
        type: types.REQUEST_ITEM
    }
}

export const receiveItems = (json) => { //accion que se dispara al terminar de recibir la consulta
    return {
        type: types.REQUEST_ITEM_SUCCESS,
        apiPage: json.page,
        apiPageFirst: json.pageFirst,
        apiPageLast: json.pageLast,
        apiPageTotal: json.pageTotal,
        apipageRowTotal: json.pageRowTotal,
        items: json.rows
    }
}

export const requestItemsError = () => { //se dispara esta accion para informar de un error
    return{
        type: types.REQUEST_ITEM_FAILURE,
    }
}

export const fetchItemsBySeccion = (page = 1,limit = 25,filters = {}) => {

    return (dispatch) => {

        //1- dispatch: actualizo el estado informando que la api call comenzó
        dispatch(requestItems())

        //2- devolvemos una promise a esperar
        return fetch(config.api_url+'obras_eventos?page='+page+'&seccion='+filters.seccion_clave)
            .then(response => {
                return response.json()
            })
            .then(json => {
                dispatch(receiveItems(json))
            })
            .catch(err => {
                console.log(err)
                dispatch(requestItemsError())
            })   
    }
}