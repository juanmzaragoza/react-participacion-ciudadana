import fetch from 'isomorphic-fetch'
import * as types from 'constants/RequestActionTypes'
let config = require('config/config')

export const requestObras = () => { //accion que dispara el pedido de datos de obras
    return{
        type: types.REQUEST_OBRA
    }
}

export const receiveObras = (json) => { //accion que se dispara al terminar de recibir la consulta
    return {
        type: types.REQUEST_OBRA_SUCCESS,
        apiPage: json.page,
        apiPageFirst: json.pageFirst,
        apiPageLast: json.pageLast,
        apiPageTotal: json.pageTotal,
        apipageRowTotal: json.pageRowTotal,
        obras: json.rows
    }
}

export const requestObrasError = () => { //se dispara esta accion para informar de un error
    return{
        type: types.REQUEST_OBRA_FAILURE,
    }
}

export const fetchObras = (page = 1,limit = 25,filters = {}) => {

    return (dispatch) => {

        //1- dispatch: actualizo el estado informando que la api call comenzó
        dispatch(requestObras())

        //2- devolvemos una promise a esperar
        let queryParams = ''
        for(var filterName in filters) {
            queryParams += '&'+filterName+'='+filters[filterName]
        }

        return fetch(config.api_url+'obras?limit='+limit+'&page='+page+queryParams)
            .then(response => {
                return response.json()
            })
            .then(json => {
                dispatch(receiveObras(json))
            })
            .catch(err => {
                console.log(err)
                dispatch(requestObrasError())
            })   
    }
}