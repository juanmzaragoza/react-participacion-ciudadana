import { connect } from 'react-redux';
import CarouselImageItems from '../components/CarouselImageItems';
import {  fetchImagesFromGallery } from '../actions/MediaAction';

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

const CarouselImagesContainer = connect(
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

export default CarouselImagesContainer