import * as types from '../constants/RequestActionTypes'

const initialState = {
  body: {
    isFetching: false,
    errorRequest: false,
    items: []
  }  
}

export default function sectionHDYV(state = initialState, action) {
  let new_state;
  if(new_state = processBodyAction(state, action)){

    return new_state;

  } else{

    return state;

  }
}

function processBodyAction(state, action){
  switch (action.type) {
    case types.REQUEST_CATEGORIES_SECTION:
      return Object.assign({}, state, {
        body: Object.assign({}, state.body, {
          isFetching: true,
          errorRequest: false
        })
      })
    case types.REQUEST_CATEGORIES_SECTION_SUCCESS:
      return Object.assign({}, state, {
        body: Object.assign({}, state.body, {
          isFetching: false,
          errorRequest: false,
          items: action.items
        })
      })
    case types.REQUEST_CATEGORIES_SECTION_FAILURE:
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

