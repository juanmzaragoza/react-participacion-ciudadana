import fetch from 'isomorphic-fetch';
import * as types from 'constants/RequestActionTypes';
let config = require('config/config');

//HEADER'S ACTIONS
export const requestImagesFromGallery = () => { 
    return{
        type: types.REQUEST_IMAGES_GALLERY
    }
}

export const receiveImages = (json) => { 
    return {
        type: types.REQUEST_IMAGES_GALLERY_SUCCESS,
        images: json.images
    }
}

export const requestImagesError = () => {
    return{
        type: types.REQUEST_IMAGES_GALLERY_FAILURE,
    }
}

export const fetchImagesFromGallery = (clave) => {

    return (dispatch) => {

        //1- dispatch: actualizo el estado informando que la api call comenzó
        dispatch(requestImagesFromGallery())

        //2- devolvemos una promise a esperar
        return fetch(config.api_url+'galeria/'+clave)
            .then(response => {
                return response.json()
            })
            .then(json => {
                dispatch(receiveImages(json))
            })
            .catch(err => {
                console.log(err)
                dispatch(requestImagesError())
            })   
    }
}

//BODY'S ACTIONS
export const requestItemsFromGallery = () => { 
    return{
        type: types.REQUEST_ITEMS_GALLERY
    }
}

export const receiveItems = (json) => { 
    return {
        type: types.REQUEST_ITEMS_GALLERY_SUCCESS,
        items: json.images
    }
}

export const requestItemsError = () => {
    return{
        type: types.REQUEST_ITEMS_GALLERY_FAILURE,
    }
}

export const fetchItemsFromGallery = (clave) => {

    return (dispatch) => {

        //1- dispatch: actualizo el estado informando que la api call comenzó
        dispatch(requestItemsFromGallery())

        //2- devolvemos una promise a esperar
        return fetch(config.api_url+'galeria/'+clave)
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