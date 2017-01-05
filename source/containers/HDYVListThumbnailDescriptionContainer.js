import { connect } from 'react-redux';
import ListThumbnailDescription from '../components/ListThumbnailDescription';
import {  fetchCategoriesFromSection } from '../actions/EventoAction';

const mapStateToProps = (state, ownProps) => {

    return {
        items: getItemsFromAction(state.sectionHDYV.body.items),
        itemsPerRow: 4,
        colSm: 6,
        colMd: 3
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    componentWillMount: () => {
        dispatch(fetchCategoriesFromSection('horaciodiegovos'));
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
      description: element.descripcion,
      imageSrc: element.image.url,
      hrefText: '',
      linkHref: 'resultados/proyectos/'+element.id
    }
    items.push(item);
  });
  return items;
}

export default ObrasListThumbnailDescriptionContainer