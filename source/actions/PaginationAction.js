import fetch from 'isomorphic-fetch'
import * as types from 'constants/ActionTypes'

export const incrementPage = (totalRows) => {
    return{
        type: types.INCREMENT_PAGE,
        totalRows: totalRows
    }
}

export const decrementPage = (totalRows) => {
    return{
        type: types.DECREMENT_PAGE,
        totalRows: totalRows
    }
}

/*
@totalRows: cantidad de filas de resultado
@page: pagina de la paginacion de la vista
@itemsPerPage: cantidad de items por pagina
@pageAPI: pagina de la paginacion de la API
@fetchItems: callback que se ejecutara si page*itemsPerPage > totalRows
*/
export const incrementPageAndCallAPI = (totalItems, page, itemsPerPage, fetchItems, totalAPIItems) => {

	return (dispatch) => {

		//traigo nuevos items si supero la cantidad de items totales
		if((page+1)*itemsPerPage > totalAPIItems){
			dispatch(fetchItems)
		}

		//sino aumento la pagina
		dispatch(incrementPage(totalItems)) 

    }
}

export const restartPagination = () => {
    return {
        type: types.RESTART_PAGE_NUMBERS,
    }
}