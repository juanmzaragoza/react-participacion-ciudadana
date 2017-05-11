import * as requestType from '../constants/RequestActionTypes'
import * as types from '../constants/ActionTypes'
import * as utils from '../lib/utils'
import * as common from './common';

const initialState = {
  isFetching: false,
  errorRequest: false,
  items: []
}

export default function communeFilter(state = initialState, action) { 
  switch (action.type) {
    case requestType.REQUEST_COMUNAS:
      return Object.assign({}, state, {
        isFetching: true,
        errorRequest: false
      })

    case requestType.REQUEST_COMUNAS_SUCCESS:
      let comunas = [];
      action.comunas.forEach(function(commune){
        let obj = {
          id: commune.id,
          name: commune.nombre,
          active: false
        }
        comunas.push(obj);
      })
      return Object.assign({}, state, {
        isFetching: false,
        errorRequest: false,
        items: comunas
      })

    case requestType.REQUEST_COMUNAS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorRequest: true
      })

    case types.FILTER_BY_COMMUNE:

      let items = state.items.slice();
      
      return Object.assign({}, state, {
        items: common.selectOnefilter(items, action.commune.id)
      })

    default:
      return state

  }
}