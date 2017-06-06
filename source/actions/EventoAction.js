import fetch from 'isomorphic-fetch';
import * as types from 'constants/RequestActionTypes';
let config = require('config/config');

//REQUEST EVENTS
export const requestEvents = () => { //accion que dispara el pedido de datos devents
    return{
        type: types.REQUEST_EVENT
    }
}

export const receiveEvents = (json) => { //accion que se dispara al terminar de recibir la consulta
    return {
        type: types.REQUEST_EVENT_SUCCESS,
        apiPage: json.page,
        apiPageFirst: json.pageFirst,
        apiPageLast: json.pageLast,
        apiPageTotal: json.pageTotal,
        apipageRowTotal: json.pageRowTotal,
        events: json.rows
    }
}

export const requestEventsError = () => { //se dispara esta accion para informar de un error
    return{
        type: types.REQUEST_EVENT_FAILURE,
    }
}

export const fetchEvents = (page = 1,limit = 25,filters = {}) => {

    return (dispatch) => {

        //1- dispatch: actualizo el estado informando que la api call comenzó
        dispatch(requestEvents())

        //2- devolvemos una promise a esperar
        return fetch(config.api_url+'eventos?page='+page)
            .then(response => {
                return response.json()
            })
            .then(json => {
                dispatch(receiveEvents(json))
            })
            .catch(err => {
                console.log(err)
                dispatch(requestEventsError())
            })   
    }
}

//REQUEST CATEGORIAS
export const requestCategoriesFromSection = () => { 
    return{
        type: types.REQUEST_CATEGORIES_SECTION
    }
}

export const receiveCategories = (json) => { 
    return {
        type: types.REQUEST_CATEGORIES_SECTION_SUCCESS,
        items: json.rows
    }
}

export const requestCategoriesFromSectionError = () => {
    return{
        type: types.REQUEST_CATEGORIES_SECTION_FAILURE,
    }
}

export const fetchCategoriesFromSection = (section) => {

    return (dispatch) => {

        //1- dispatch: actualizo el estado informando que la api call comenzó
        dispatch(requestCategoriesFromSection())

        //2- devolvemos una promise a esperar
        return fetch(config.api_url+'categorias?seccion='+section)
            .then(response => {
                return response.json()
            })
            .then(json => {
                dispatch(receiveCategories(json))
            })
            .catch(err => {
                console.log(err)
                dispatch(requestCategoriesFromSectionError())
            })   
    }
}