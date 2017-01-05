import * as requestType from '../constants/RequestActionTypes'
import * as types from '../constants/ActionTypes'
import * as utils from '../lib/utils'

const initialState = {
  isFetching: false,
  errorRequest: false,
  items: []
}

export default function categoryFilter(state = initialState, action) { 
  switch (action.type) {
    case requestType.REQUEST_CATEGORIAS:
      return Object.assign({}, state, {
        isFetching: true,
        errorRequest: false
      })

    case requestType.REQUEST_CATEGORIAS_SUCCESS:
      let categorias = [];
      action.categorias.forEach(function(categoria){
        let obj = {
          id: categoria.id,
          name: categoria.nombre,
          active: false
        }
        categorias.push(obj);
      })
      return Object.assign({}, state, {
        isFetching: false,
        errorRequest: false,
        items: categorias
      })

    case requestType.REQUEST_CATEGORIAS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorRequest: true
      })

    case types.FILTER_BY_CATEGORY:
      let items = state.items.slice();
      items.forEach(function(categoria, index){
        if(categoria.id == action.category.id){
          categoria.active = categoria.active? false:true;
          items[index] = categoria;
        }
      });
      return Object.assign({}, state, {
        items: items
      })

    default:
      return state

  }
}