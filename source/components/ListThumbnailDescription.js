import React, { PropTypes } from "react"
import CarouselRowContainer from "../containers/CarouselRowContainer"
import ThumbnailDescriptionItem from "../components/Item/ThumbnailDescriptionItem"

class ListThumbnailDescription extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		if(this.props.componentWillMount !== undefined){
			this.props.componentWillMount();
		}
	}

	render() {

		let colSm = (this.props.colSm !== undefined)? this.props.colSm:12/this.props.itemsPerRow;
		let colMd = (this.props.colMd !== undefined)? this.props.colMd:12/this.props.itemsPerRow;

		return(
			<div className="row">
				{this.props.items.map((item,index) => (
					<ThumbnailDescriptionItem 
						key={index}
						thumbnail_src={item.imageSrc} 
						label={item.name}
						description={item.description} 
						linkHref={item.linkHref}
						linkText={item.hrefText? item.hrefText:"Leer más"} 
						colSm={colSm}
						colMd={colMd}
						isCategory={item.isCategory? true:false} />
				))}
			</div>
		)
	}
}

ListThumbnailDescription.propTypes = {
  items: PropTypes.array.isRequired,
  itemsPerRow: PropTypes.number.isRequired,
  colSm: PropTypes.number
}

export default ListThumbnailDescription