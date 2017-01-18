import { connect } from 'react-redux';
import ListThumbnailDescription from '../components/ListThumbnailDescription';
import {  fetchCategoriesFromSection } from '../actions/EventoAction';

const mapStateToProps = (state, ownProps) => {

    return {
        items: getItemsFromAction(state.sectionReunionesVecinos.body.items),
        itemsPerRow: 2,
        colSm: 6,
        colMd: 6
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    componentWillMount: () => {
        dispatch(fetchCategoriesFromSection('reunionesdevecinos'));
    }
  }
}

const ReunionesVecinosListThumbnailDescriptionContainer = connect(
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

export default ReunionesVecinosListThumbnailDescriptionContainer