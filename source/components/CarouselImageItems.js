import React, { PropTypes } from "react"
import { connect } from 'react-redux';

import CarouselRow from "../components/CarouselRow";
import ImageCaptionItem from "../components/Item/ImageCaptionItem";

import {  fetchImagesFromGallery } from '../actions/MediaAction';

export class CarouselImageItems extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		if(this.props.componentWillMount !== undefined){
			this.props.componentWillMount();
		}
	}

	render(){
		let itemFirst = true;
		return(
			<CarouselRow itemsPerRow={1} interval={6000} itemsIntoRows={false} >

				{this.props.items.map((item,index) => {
					let isFirst = itemFirst;
					if(itemFirst){
						itemFirst = false
					}
					return(
						<ImageCaptionItem 
							key={index}
							title={item.name} 
							description={item.description}
							isFirst={isFirst}
							imageSrc={item.imageSrc} />
					)	
				})}
		      	
			</CarouselRow>
		)
	}
	
}

CarouselImageItems.propTypes = {
  items: PropTypes.array.isRequired,
  imageSrc: PropTypes.object
}


const mapStateToProps = (state, ownProps) => {
    return {
        items: getItemsFromAction(state.headerSection.images)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    componentWillMount: () => {
        dispatch(fetchImagesFromGallery(ownProps.gallery));
    }
  }
}

export const CarouselImagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CarouselImageItems)

function getItemsFromAction(itemsArray){
    let items = [];
    itemsArray.forEach(function(element,index){
        let item = {
            name: element.name,
            description: element.description,
            imageSrc: element.url
        }
        items.push(item);
    });
    return items;
}