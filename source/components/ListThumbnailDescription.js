import React, { PropTypes } from "react";
import { connect } from 'react-redux';

import {  fetchCategoriesFromSection } from '../actions/EventoAction';
import {  clearBodySection } from '../actions/SectionAction';
import {  fetchItemsFromGallery } from '../actions/MediaAction';

import { CarouselRowContainer } from "../components/CarouselRow";
import ThumbnailDescriptionItem from "../components/Item/ThumbnailDescriptionItem";

export class ListThumbnailDescription extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		if(this.props.componentDidMount !== undefined){
			this.props.componentDidMount();
		}
	}

	componentWillMount() {
		if(this.props.componentWillMount !== undefined){
			this.props.componentWillMount();
		}
	}

	componentWillUnmount() {
		if(this.props.componentWillUnmount !== undefined){
			this.props.componentWillUnmount();
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


//////////////////////////////////////////////////////////////
// ReunionesVecinosListThumbnailDescriptionContainer
//////////////////////////////////////////////////////////////
const mapStateToPropsReunionesVecinos = (state, ownProps) => {

    return {
        items: getItemsFromAction(state.bodySection.items,'resultados/proyectos/'),
        itemsPerRow: 2,
        colSm: 6,
        colMd: 6
    }
}

const mapDispatchToPropsReunionesVecinos = (dispatch, ownProps) => {
  return {
    componentDidMount: () => {
        dispatch(fetchCategoriesFromSection('reunionesdevecinos'));
    },
    componentWillUnmount: () => {
      dispatch(clearBodySection());
    }
  }
}

export const ReunionesVecinosListThumbnailDescriptionContainer = connect(
  mapStateToPropsReunionesVecinos,
  mapDispatchToPropsReunionesVecinos
)(ListThumbnailDescription)

//////////////////////////////////////////////////////////////
// ReunionesMinistrosListThumbnailDescriptionContainer
//////////////////////////////////////////////////////////////
const mapStateToPropsReunionesMinistros = (state, ownProps) => {

    return {
        items: getItemsFromAction(state.bodySection.items,'resultados/proyectos/'),
        itemsPerRow: 2,
        colSm: 6,
        colMd: 6
    }
}

const mapDispatchToPropsReunionesMinistros = (dispatch, ownProps) => {
  return {
    componentDidMount: () => {
        dispatch(fetchCategoriesFromSection('reunionesconministro'));
    },
    componentWillUnmount: () => {
      dispatch(clearBodySection());
    }
  }
}

export const ReunionesMinistrosListThumbnailDescriptionContainer = connect(
  mapStateToPropsReunionesMinistros,
  mapDispatchToPropsReunionesMinistros
)(ListThumbnailDescription)


//////////////////////////////////////////////////////////////
// ProyectosListThumbnailDescriptionContainer
//////////////////////////////////////////////////////////////
const mapStateToPropsProyectosListThumbnail = (state, ownProps) => {
  return {
    items: getItemsFromAction(state.bodySection.items,'resultados/proyectos/'),
    itemsPerRow: 3,
    colSm: 6,
    colMd: 4
  }
}

const mapDispatchToPropsProyectosListThumbnail = (dispatch, ownProps) => {
  return {
    componentDidMount: () => {
        dispatch(fetchCategoriesFromSection('proyectos'));
    },
    componentWillUnmount: () => {
      dispatch(clearBodySection());
    }
  }
}

export const ProyectosListThumbnailDescriptionContainer = connect(
  mapStateToPropsProyectosListThumbnail,
  mapDispatchToPropsProyectosListThumbnail
)(ListThumbnailDescription)

//////////////////////////////////////////////////////////////
// ObrasListThumbnailDescriptionContainer
//////////////////////////////////////////////////////////////
const mapStateToPropsObrasListThumbnail = (state, ownProps) => {

    return {
      items: getItemsObrasFromAction(state.bodySection.items),
      itemsPerRow: 3,
      colSm: 6,
      colMd: 4
    }
}

const mapDispatchToPropsObrasListThumbnail = (dispatch, ownProps) => {
  return {
    componentDidMount: () => {
      dispatch(fetchItemsFromGallery('obra_etapas'));
    },
    componentWillUnmount: () => {
      dispatch(clearBodySection());
    }
  }
}

export const ObrasListThumbnailDescriptionContainer = connect(
  mapStateToPropsObrasListThumbnail,
  mapDispatchToPropsObrasListThumbnail
)(ListThumbnailDescription)

//////////////////////////////////////////////////////////////
// HDYVListThumbnailDescriptionContainer
//////////////////////////////////////////////////////////////
const mapStateToPropsHDYVList = (state, ownProps) => {

    return {
        items: getItemsHDYVFromAction(state.bodySection.items),
        itemsPerRow: 4,
        colSm: 6,
        colMd: 3
    }
}

const mapDispatchToPropsHDYVList = (dispatch, ownProps) => {
  return {
    componentDidMount: () => {
        dispatch(fetchCategoriesFromSection('horaciodiegovos'));
    },
    componentWillUnmount: () => {
      dispatch(clearBodySection());
    }
  }
}

export const HDYVListThumbnailDescriptionContainer = connect(
  mapStateToPropsHDYVList,
  mapDispatchToPropsHDYVList
)(ListThumbnailDescription)

function getItemsHDYVFromAction(itemsArray){
  let items = [];
  itemsArray.forEach(function(element,index){

    let linkHref = 'resultados/proyectos/'+element.id;
    if(element.nombre == "Reuniones de Vecinos"){
      linkHref = 'reuniones_de_vecinos';
    } else if(element.nombre == "Reuniones con Ministros"){
      linkHref = 'reuniones_con_ministros';
    }

    let item = {
      description: element.descripcion,
      imageSrc: element.image.url,
      hrefText: '',
      linkHref: linkHref
    }
    items.push(item);
  });
  return items;
}

function getItemsObrasFromAction(itemsArray){
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

function getItemsFromAction(itemsArray, url){
  let items = [];
  itemsArray.forEach(function(element,index){
    let item = {
      description: element.descripcion,
      imageSrc: element.image.url,
      hrefText: '',
      linkHref: url+element.id,
      isCategory: true
    }
    items.push(item);
  });
  return items;
}