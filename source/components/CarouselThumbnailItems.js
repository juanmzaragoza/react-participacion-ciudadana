import React, { PropTypes } from "react"
import { connect } from 'react-redux'

import CarouselRowContainer from "../containers/CarouselRowContainer"
import ThumbnailDescriptionItem from "../components/Item/ThumbnailDescriptionItem"

import {  incrementPage, decrementPage } from '../actions/PaginationAction'
import {fetchItemsBySeccion} from '../actions/ItemAction'

export class CarouselThumbnailItems extends React.Component {

  	constructor(props) {
  		super(props)
 	}

 	componentDidMount() {  
 		this.props.componentDidMount();
 	}

 	render() {

 		const spin = <h1 style={{textAlign: 'center'}}><span className="glyphicon glyphicon-refresh spin"></span></h1>;

		return(
			this.props.isLoading?
				spin
				:
				<CarouselRowContainer itemsPerRow={this.props.visibleItems} >
					{this.props.items.map((item,index) => (
							<ThumbnailDescriptionItem 
								key={index}
								thumbnail_src={(item.image_url != null)? 
									item.image_url:
									require("../public/content/images/agenda01.png")}
								label={item.nombre}
								description={this.props.withDescription? item.descripcion_breve:""} 
								linkHref={item.href}
								linkText={"Leer más"}
								descriptionTextClass={this.props.descriptionTextClass} />
						))
					}
				</CarouselRowContainer>
		)
	}
}

CarouselThumbnailItems.defaultProps = {
    withDescription: true
}

CarouselThumbnailItems.propTypes = {
  items: PropTypes.array.isRequired,
  visibleItems: PropTypes.number.isRequired,
  withDescription: PropTypes.bool,
  descriptionTextClass: PropTypes.string,
  componentDidMount: PropTypes.func
}

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
        dispatch(fetchItemsBySeccion(1,25,{seccion_clave: 'DESTACADOS'}))
    }
  }
}

export const AgendaSemanalCarouselThumbnailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CarouselThumbnailItems)