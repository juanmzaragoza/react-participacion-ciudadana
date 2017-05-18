import fetch from 'isomorphic-fetch';
import * as types from 'constants/RequestActionTypes';
let config = require('config/config');

export const requestNeighborhoods = () => { 
    return{
        type: types.REQUEST_NEIGHBORHOODS
    }
}

export const receiveNeighborhoods = (json) => { 
    return {
        type: types.REQUEST_NEIGHBORHOODS_SUCCESS,
        neighborhoods: json.rows
    }
}

export const requestNeighborhoodsError = () => {
    return{
        type: types.REQUEST_NEIGHBORHOODS_FAILURE,
    }
}

export const fetchNeighborhoods = (page = 1,limit = 25) => {

    return (dispatch) => {

        //1- dispatch: actualizo el estado informando que la api call comenzó
        dispatch(requestNeighborhoods())

        //2- devolvemos una promise a esperar
        return fetch(config.api_url+'barrios?page='+page+'&limit='+limit)
            .then(response => {
                return response.json()
            })
            .then(json => {
                dispatch(receiveNeighborhoods(json))
            })
            .catch(err => {
                console.log(err)
                dispatch(requestNeighborhoodsError())
            })   
    }
}