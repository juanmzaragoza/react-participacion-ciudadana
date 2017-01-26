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
    case requestType.REQUEST_TAGS:
      return Object.assign({}, state, {
        isFetching: true,
        errorRequest: false
      })

    case requestType.REQUEST_TAGS_SUCCESS:
      let tags = [];
      action.tags.forEach(function(tag){
        let obj = {
          id: tag.id,
          name: tag.nombre,
          count: tag.count_obras+tag.count_eventos,
          active: false
        }
        tags.push(obj);
      })
      return Object.assign({}, state, {
        isFetching: false,
        errorRequest: false,
        items: utils.shuffle(tags)
      })

    case requestType.REQUEST_TAGS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorRequest: true
      })

    case types.FILTER_BY_TAG:
      let items = state.items.slice();
      items.forEach(function(tag, index){
        if(tag.id == action.tag.id){
          tag.active = tag.active? false:true;
          items[index] = tag;
        }
      });
      return Object.assign({}, state, {
        items: items
      })

    default:
      return state

  }
}