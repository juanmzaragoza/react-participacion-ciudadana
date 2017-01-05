import { connect } from 'react-redux';
import ListThumbnailDescription from '../components/ListThumbnailDescription';
import {  fetchItemsFromGallery } from '../actions/MediaAction';

const mapStateToProps = (state, ownProps) => {

    return {
      items: getItemsFromAction(state.sectionObras.body.items),
      itemsPerRow: 3,
      colSm: 6,
      colMd: 4
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    componentWillMount: () => {
        dispatch(fetchItemsFromGallery('obra_etapas'));
    }
  }
}

const ObrasListThumbnailDescriptionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListThumbnailDescription)

function getItemsFromAction(itemsArray){
    let items = [];
    itemsArray.forEach(function(element,index){
        let item = {
            description: element.description,
            imageSrc: element.url,
            hrefText: '',
            linkHref: element.author_name
        }
        items.push(item);
    });
    return items;
}

export default ObrasListThumbnailDescriptionContainer