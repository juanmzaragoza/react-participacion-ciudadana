import * as types from '../constants/RequestActionTypes'

const initialState = {
  header: {
    isFetching: false,
    errorRequest: false,
    images: []
  },
  body: {
    isFetching: false,
    errorRequest: false,
    items: []
  }  
}

export default function sectionObras(state = initialState, action) {
  let new_state;
  if(new_state = processHeaderAction(state, action)){

    return new_state;

  } else if(new_state = processBodyAction(state, action)){

    return new_state;

  } else{

    return state;

  }
}

function processHeaderAction(state, action){
  switch (action.type) {
    case types.REQUEST_IMAGES_GALLERY:
      return Object.assign({}, state, {
        header: Object.assign({}, state.header, {
          isFetching: true,
          errorRequest: false
        })
      })
    case types.REQUEST_IMAGES_GALLERY_SUCCESS:
      let images = [];
      action.images.forEach(function(image){
        images.push(image.image);
      })
      return Object.assign({}, state, {
        header: Object.assign({}, state.header, {
          isFetching: false,
          errorRequest: false,
          images: images
        })
      })
    case types.REQUEST_IMAGES_GALLERY_FAILURE:
      return Object.assign({}, state, {
        header: Object.assign({}, state.header, {
          isFetching: false,
          errorRequest: true
        })
      })
    default:
      return false;
  }
}

function processBodyAction(state, action){
  switch (action.type) {
    case types.REQUEST_ITEMS_GALLERY:
      return Object.assign({}, state, {
        body: Object.assign({}, state.body, {
          isFetching: true,
          errorRequest: false
        })
      })
    case types.REQUEST_ITEMS_GALLERY_SUCCESS:
      let items = [];
      action.items.forEach(function(image){
        items.push(image.image);
      })
      return Object.assign({}, state, {
        body: Object.assign({}, state.body, {
          isFetching: false,
          errorRequest: false,
          items: items
        })
      })
    case types.REQUEST_ITEMS_GALLERY_FAILURE:
      return Object.assign({}, state, {
        body: Object.assign({}, state.body, {
          isFetching: false,
          errorRequest: true
        })
      })
    default:
      return false;
  }
}