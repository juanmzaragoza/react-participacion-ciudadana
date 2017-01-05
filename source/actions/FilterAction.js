import fetch from 'isomorphic-fetch'
import * as types from '../constants/ActionTypes'
import * as requestTypes from '../constants/RequestActionTypes'
let config = require('../config/config')

export const filterByCategory = (category) => {
    return{
        type: types.FILTER_BY_CATEGORY,
        category: category
    }
}

export const filterByCommune = (commune) => {
    return{
        type: types.FILTER_BY_COMMUNE,
        commune: commune
    }
}

export const requestComunas = () => { //accion que dispara el pedido de datos de obras
    return{
        type: requestTypes.REQUEST_COMUNAS
    }
}

export const receiveComunas = (json) => { //accion que se dispara al terminar de recibir la consulta
    return {
        type: requestTypes.REQUEST_COMUNAS_SUCCESS,
        comunas: json.rows
    }
}

export const requestComunasError = () => { //se dispara esta accion para informar de un error
    return{
        type: requestTypes.REQUEST_COMUNAS_FAILURE,
    }
}

export const fetchComunas = (page = 1,limit = 50,filters = {}) => {

    return (dispatch) => {

        //1- dispatch: actualizo el estado informando que la api call comenzó
        dispatch(requestComunas())

        //2- devolvemos una promise a esperar
        let queryParams = ''
        for(var filterName in filters) {
            queryParams += '&'+filterName+'='+filters[filterName]
        }

        return fetch(config.api_url+'comunas?limit='+limit+'&page='+page+queryParams)
            .then(response => {
                return response.json()
            })
            .then(json => {
                dispatch(receiveComunas(json))
            })
            .catch(err => {
                console.log(err)
                dispatch(requestComunasError())
            })   
    }
}

export const requestCategorias = () => { //accion que dispara el pedido de datos de obras
    return{
        type: requestTypes.REQUEST_CATEGORIAS
    }
}

export const receiveCategorias = (json) => { //accion que se dispara al terminar de recibir la consulta
    return {
        type: requestTypes.REQUEST_CATEGORIAS_SUCCESS,
        categorias: json.rows
    }
}

export const requestCategoriasError = () => { //se dispara esta accion para informar de un error
    return{
        type: requestTypes.REQUEST_CATEGORIAS_FAILURE,
    }
}

export const fetchCategorias = (page = 1,limit = 50,filters = {}) => {

    return (dispatch) => {

        //1- dispatch: actualizo el estado informando que la api call comenzó
        dispatch(requestCategorias())

        //2- devolvemos una promise a esperar
        let queryParams = ''
        for(var filterName in filters) {
            queryParams += '&'+filterName+'='+filters[filterName]
        }

        return fetch(config.api_url+'categorias?limit='+limit+'&page='+page+queryParams)
            .then(response => {
                return response.json()
            })
            .then(json => {
                dispatch(receiveCategorias(json))
            })
            .catch(err => {
                console.log(err)
                dispatch(requestCategoriasError())
            })   
    }
}