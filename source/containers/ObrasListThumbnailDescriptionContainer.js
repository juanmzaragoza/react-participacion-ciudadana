import { connect } from 'react-redux';
import ListThumbnailDescription from '../components/ListThumbnailDescription';
import {  fetchItemsFromGallery } from '../actions/MediaAction';
import {  clearBodySection } from '../actions/SectionAction';

const mapStateToProps = (state, ownProps) => {

    return {
      items: getItemsFromAction(state.bodySection.items),
      itemsPerRow: 3,
      colSm: 6,
      colMd: 4
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    componentDidMount: () => {
      dispatch(fetchItemsFromGallery('obra_etapas'));
    },
    componentWillUnmount: () => {
      dispatch(clearBodySection());
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