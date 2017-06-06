import {INCREMENT_PAGE, DECREMENT_PAGE, RESTART_PAGE_NUMBERS} from 'constants/ActionTypes'
import { LOCATION_CHANGE } from 'react-router-redux'

const initialState = {
  page: 1,
  totalRows: 1
}

export default function pagination(state = initialState, action) {
  switch (action.type) {
    
    case INCREMENT_PAGE:
      return Object.assign({}, state, {
        page: state.page + 1,
        totalRows: action.totalRows
      })

    case DECREMENT_PAGE:
      return Object.assign({}, state, {
        page: state.page > 1? state.page - 1:1,
        totalRows: action.totalRows
      })

    case LOCATION_CHANGE:
      return Object.assign({}, state, {
        page: 1
      })

    default:
      return state

  }
}