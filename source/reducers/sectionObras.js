import * as types from '../constants/RequestActionTypes'

const initialState = {
  body: {
    isFetching: false,
    errorRequest: false,
    items: []
  }  
}

export default function sectionObras(state = initialState, action) {
  let new_state;
  if(new_state = processBodyAction(state, action)){

    return new_state;

  } else{

    return state;

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