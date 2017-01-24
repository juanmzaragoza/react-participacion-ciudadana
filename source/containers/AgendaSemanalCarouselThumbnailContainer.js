import { connect } from 'react-redux'
import {  incrementPage, decrementPage } from '../actions/PaginationAction'
import CarouselThumbnailItems from '../components/CarouselThumbnailItems'

import {fetchItemsBySeccion} from '../actions/ItemAction'

const mapStateToProps = (state, ownProps) => {

    let visibleItems = 4

    return {
        isLoading: (state.indexItems.isFetching || state.indexItems.errorRequest),
        items: state.indexItems.items.length > 0? 
        	state.indexItems.items.map((item) => {
        		return Object.assign({}, item, {
			        href: '/'+item.tipo+'/'+item.id
			      })	
        	}): [],
        visibleItems: visibleItems,
        withDescription: false,
        descriptionTextClass: 'text-limit-five-lines'
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    componentDidMount: () => {
        dispatch(fetchItemsBySeccion(1,25,{seccion_clave: 'AGENDASEMANAL'}))
    }
  }
}

const AgendaSemanalCarouselThumbnailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CarouselThumbnailItems)

export default AgendaSemanalCarouselThumbnailContainer