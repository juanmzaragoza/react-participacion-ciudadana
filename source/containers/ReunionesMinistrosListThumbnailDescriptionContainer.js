import { connect } from 'react-redux';
import ListThumbnailDescription from '../components/ListThumbnailDescription';
import {  fetchCategoriesFromSection } from '../actions/EventoAction';
import {  clearBodySection } from '../actions/SectionAction';

const mapStateToProps = (state, ownProps) => {

    return {
        items: getItemsFromAction(state.bodySection.items),
        itemsPerRow: 2,
        colSm: 6,
        colMd: 6
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    componentDidMount: () => {
        dispatch(fetchCategoriesFromSection('reunionesconministro'));
    },
    componentWillUnmount: () => {
      dispatch(clearBodySection());
    }
  }
}

const ReunionesMinistrosListThumbnailDescriptionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListThumbnailDescription)

function getItemsFromAction(itemsArray){
  let items = [];
  itemsArray.forEach(function(element,index){
    let item = {
      description: element.descripcion,
      imageSrc: element.image.url,
      hrefText: '',
      linkHref: 'resultados/proyectos/'+element.id,
      isCategory: true
    }
    items.push(item);
  });
  return items;
}

export default ReunionesMinistrosListThumbnailDescriptionContainer