import { connect } from 'react-redux'
import {  incrementPage, decrementPage, incrementPageAndCallAPI } from '../actions/PaginationAction'
import {  fetchItemsBySeccion } from '../actions/ItemAction'
import CarouselRow from '../components/CarouselRow'

const mapStateToProps = (state, ownProps) => {

    let itemsLength = state.indexItems.items.length
    return {
        id: ownProps.id? ownProps.id:"carousel-preview-list",
        children: ownProps.children,
        itemsPerRow: ownProps.itemsPerRow,
        isFirstPage: (state.pagination.page === 1),
        isLastPage: ((state.pagination.page)*ownProps.itemsPerRow) >= itemsLength,
        page: state.pagination.page,
        pageAPI: state.indexItems.page,
        totalRows: itemsLength,
        totalAPIItems: (state.indexItems.page-1)*state.indexItems.limit,
        interval: ownProps.interval
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onGetNextPage: (totalRows, page, pageAPI, totalAPIItems) => {
      let fetchItems = fetchItemsBySeccion(pageAPI,25,{seccion_clave: "AGENDASEMANAL"})
      dispatch(incrementPageAndCallAPI(totalRows, page, ownProps.itemsPerRow, fetchItems, totalAPIItems))
    },
    onGetPrevPage: (totalRows) => {
      dispatch(decrementPage(totalRows))
    }
  }
}

const CarouselRowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CarouselRow)

export default CarouselRowContainer