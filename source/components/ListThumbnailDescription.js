import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import {  fetchCategoriesFromSection } from 'actions/EventoAction';
import {  clearBodySection } from 'actions/SectionAction';
import {  fetchItemsFromGallery } from 'actions/MediaAction';

import { CarouselRowContainer } from "components/CarouselRow";
import ThumbnailDescriptionItem from "components/Item/ThumbnailDescriptionItem";

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
						isCategory={item.isCategory? true:false}
            imgClassName={"animated tada"} />
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
// HoracioDiegoListThumbnailDescriptionContainer
//////////////////////////////////////////////////////////////
const mapStateToPropsHoracioDiego = (state, ownProps) => {

    return {
        items: getItemsFromAction(state.bodySection.items,'resultados/proyectos/',false),
        itemsPerRow: 2,
        colSm: 6,
        colMd: 6
    }
}

const mapDispatchToPropsHoracioDiego = (dispatch, ownProps) => {
  return {
    componentDidMount: () => {
        dispatch(fetchCategoriesFromSection('horacioydiego'));
    },
    componentWillUnmount: () => {
      dispatch(clearBodySection());
    }
  }
}

export const HoracioDiegoListThumbnailDescriptionContainer = connect(
  mapStateToPropsHoracioDiego,
  mapDispatchToPropsHoracioDiego
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
// TrabajandoJuntosListThumbnailDescriptionContainer
//////////////////////////////////////////////////////////////
const mapStateToPropsTrabajandoJuntosList = (state, ownProps) => {

    return {
        items: getItemsTrabajandoJuntosFromAction(state.bodySection.items),
        itemsPerRow: 3,
        colSm: 6,
        colMd: 4
    }
}

const mapDispatchToPropsTrabajandoJuntosList = (dispatch, ownProps) => {
  return {
    componentDidMount: () => {
        dispatch(fetchCategoriesFromSection('REUNIONESDEVECINOS'));
    },
    componentWillUnmount: () => {
      dispatch(clearBodySection());
    }
  }
}

export const TrabajandoJuntosListThumbnailDescriptionContainer = connect(
  mapStateToPropsTrabajandoJuntosList,
  mapDispatchToPropsTrabajandoJuntosList
)(ListThumbnailDescription)

function getItemsTrabajandoJuntosFromAction(itemsArray){
  let items = [];
  itemsArray.forEach(function(element,index){

    let linkHref = 'resultados/proyectos/'+element.id;
    if(element.nombre.toLowerCase() == "horacio y diego"){
      linkHref = 'horacio_y_diego';
    } else if(element.nombre.toLowerCase() == "reuniones con ministros"){
      linkHref = 'reuniones_de_ministros';
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

export function getItemsObrasFromAction(itemsArray){
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

function getItemsFromAction(itemsArray, url, isCategory = true){
  let items = [];
  itemsArray.forEach(function(element,index){
    let item = {
      description: element.descripcion,
      imageSrc: element.image.url,
      hrefText: '',
      linkHref: url+element.id,
      isCategory: isCategory
    }
    items.push(item);
  });
  return items;
}