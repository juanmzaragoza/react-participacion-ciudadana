import React, { PropTypes } from "react"
import CarouselRowContainer from "../containers/CarouselRowContainer"
import ThumbnailDescriptionItem from "../components/Item/ThumbnailDescriptionItem"

class CarouselThumbnailItems extends React.Component {

  	constructor(props) {
  		super(props)
 	}

 	componentDidMount() {  
 		this.props.componentDidMount();
 	}

 	render() {

 		const spin = <h1 style={{textAlign: 'center'}}><span className="glyphicon glyphicon-refresh spin"></span></h1>

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
								description={item.descripcion_breve} 
								linkHref={item.href}
								linkText={"Leer más"}
								descriptionTextClass={this.props.descriptionTextClass} />
						))
					}
				</CarouselRowContainer>
		)
	}
}

CarouselThumbnailItems.propTypes = {
  items: PropTypes.array.isRequired,
  visibleItems: PropTypes.number.isRequired,
  descriptionTextClass: PropTypes.string,
  componentDidMount: PropTypes.func
}

export default CarouselThumbnailItems