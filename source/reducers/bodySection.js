import * as types from '../constants/RequestActionTypes'
import * as actionTypes from '../constants/ActionTypes'

const initialState = {
  isFetching: false,
  errorRequest: false,
  items: []
}

export default function bodySection(state = initialState, action) {
  switch (action.type) {

    case types.REQUEST_ITEMS_GALLERY:
      return Object.assign({}, state, {
        isFetching: true,
        errorRequest: false
      })

    case types.REQUEST_ITEMS_GALLERY_SUCCESS:
      let items = [];
      action.items.forEach(function(image){
        items.push(image.image);
      })
      return Object.assign({}, state, {
        items: items
      })

    case types.REQUEST_ITEMS_GALLERY_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorRequest: true
      })

    case types.REQUEST_CATEGORIES_SECTION:
      return Object.assign({}, state, {
        isFetching: true,
        errorRequest: false
      })

    case types.REQUEST_CATEGORIES_SECTION_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        errorRequest: false,
        items: action.items
      })

    case types.REQUEST_CATEGORIES_SECTION_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorRequest: true
      })

    case actionTypes.CLEAR_BODY_SECTION:
      return Object.assign({}, state, {
        items: []
      })

    default:
      return state;
  }
}