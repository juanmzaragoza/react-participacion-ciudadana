import fetch from 'isomorphic-fetch'
import * as types from 'constants/RequestActionTypes'
let config = require('config/config')
import { checkIfUserIsSubscribed } from 'actions/SubscriptionAction'

export const requestResults = () => {
    return {
        type: types.REQUEST_RESULT
    }
}

export const receiveResults = (json, append, filters) => { //accion que se dispara al terminar de recibir la consulta

    return {
        limit: json.limit,
        type: types.REQUEST_RESULT_SUCCESS,
        apiPage: json.page,
        apiPageFirst: json.pageFirst,
        apiPageLast: json.pageLast,
        apiPageTotal: json.pageTotal,
        apipageRowTotal: json.pageRowTotal,
        items: json.rows,
        append: append,
        filters: filters
    }
}

export const requestResultsError = () => { //se dispara esta accion para informar de un error
    return{
        type: types.REQUEST_RESULT_FAILURE,
    }
}

export const fetchResults = (page = 1,limit = 25,filters = {}, request_type, append = true) => {

    return (dispatch) => {

        //1- dispatch: actualizo el estado informando que la api call comenzó
        dispatch(requestResults())

        //2- devolvemos una promise a esperar
        return fetch(getFullUrl(page, limit, filters, request_type))
            .then(response => {
                return response.json()
            })
            .then(json => {
                dispatch(receiveResults(json, append, filters))
            })
            .catch(err => {
                console.log(err)
                dispatch(requestResultsError())
            })   
    }
}

const getFullUrl = (page = 1,limit = 25,filters = {}, request_type) => {

    var url = config.api_url+request_type+'?';

    for(var filterName in filters) {
        if(filters[filterName] !== undefined){
            if(Array.isArray(filters[filterName])){
                for(var index in filters[filterName]) {
                    url += filterName+'='+filters[filterName][index]+'&';
                }
            } else{
                url += filterName+'='+filters[filterName]+'&';
            }            
        }
    }

    if(page){
        url += 'page='+page+'&';
    }

    if(limit){
        url += 'limit='+limit+'&';
    }

    return url;


}

export const requestContent = () => {
    return {
        type: types.REQUEST_CONTENT
    }
}

export const receiveContent = (json) => { //accion que se dispara al terminar de recibir la consulta

    return {
        type: types.REQUEST_CONTENT_SUCCESS,
        content: json
    }
}

export const requestContentError = () => { //se dispara esta accion para informar de un error
    return{
        type: types.REQUEST_CONTENT_FAILURE,
    }
}

export const fetchContent = (request_type, content_id ,filters = {}) => {

    return (dispatch) => {

        //1- dispatch: actualizo el estado informando que la api call comenzó
        dispatch(requestContent());

        //2- devolvemos una promise a esperar
        return fetch(getFullUrl(0, 0, filters, request_type+'/'+content_id))
            .then(response => {
                return response.json()
            })
            .then(json => {
                if(json.code === 404){
                    dispatch(requestContentError())
                } else{
                    dispatch(receiveContent(json))
                    dispatch(checkIfUserIsSubscribed(content_id,request_type))
                }                
            })
            .catch(err => {
                console.log(err)
                dispatch(requestContentError())
            })   
    }
}