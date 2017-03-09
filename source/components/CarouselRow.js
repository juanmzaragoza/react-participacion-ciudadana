import React, { PropTypes } from "react";
import { connect } from 'react-redux';

import {  incrementPage, decrementPage, incrementPageAndCallAPI } from '../actions/PaginationAction';
import {  fetchItemsBySeccion } from '../actions/ItemAction';

export const CarouselRow = ({id,children, title = '', itemsPerRow, 
	isFirstPage = false, isLastPage = false, totalRows, page, 
	pageAPI, onGetPrevPage, onGetNextPage, totalAPIItems, interval = 0, itemsIntoRows = true}) => {

	let itemFirst = true;

	let items = []
	var i,j,chunk = itemsPerRow > 0? itemsPerRow:4
	for (i=0,j=children.length; i<j; i+=chunk) {
	    items.push(children.slice(i,i+chunk))
	}

	let carousel_id = id? id:"carousel-preview-list";

	return (
		<div id={carousel_id} className="carousel slide" data-interval={interval? interval: "false"}>

			{/* Wrapper for slides */}
			<div className="carousel-inner">
				{items.map((item,index) => {
					let isFirst = itemFirst;
					if(itemFirst){
						itemFirst = false;
					}
					if(itemsIntoRows){
						let className = isFirst? "item active":"item"
						return (
							<div key={index} className={className} >
								{item}
							</div>
						)
					} else{
						return (
							item
						)
					}
				})}
			</div>

			{/* Controls */}
		    <a className="left carousel-control" style={{display: (isFirstPage? 'none':'')}} href={"#"+carousel_id} data-slide="prev" onClick={e=>{onGetPrevPage? onGetPrevPage(totalRows):null}}> 
		    	<span className="glyphicon glyphicon-chevron-left"></span> 
		    </a> 
		    <a className="right carousel-control" style={{display: (isLastPage? 'none':'')}} href={"#"+carousel_id} data-slide="next" onClick={e=>{onGetNextPage? onGetNextPage(totalRows,page,pageAPI,totalAPIItems):null}}> 
		    	<span className="glyphicon glyphicon-chevron-right"></span> 
		    </a>

		</div>
	)
}

CarouselRow.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  itemsPerRow: PropTypes.number.isRequired,
  isFirstPage: PropTypes.bool,
  isLastPage: PropTypes.bool,
  totalRows: PropTypes.number,
  onGetPrevPage: PropTypes.func,
  onGetNextPage: PropTypes.func,
  itemsIntoRows: PropTypes.bool
}

//containers
const mapStateToProps = (state, ownProps) => {

    let itemsLength = state.indexItems.items.length
    return {
        id: ownProps.id? ownProps.id:"carousel-preview-list",
        children: ownProps.children,
        itemsPerRow: ownProps.itemsPerRow,
        isFirstPage: (state.pagination.page === 1),
        isLastPage: ((state.pagination.page)*ownProps.itemsPerRow) >= itemsLength,
        page: state.pagination.page,
        pageAPI: state.indexItems.page,
        totalRows: itemsLength,
        totalAPIItems: (state.indexItems.page-1)*state.indexItems.limit,
        interval: ownProps.interval
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onGetNextPage: (totalRows, page, pageAPI, totalAPIItems) => {
      let fetchItems = fetchItemsBySeccion(pageAPI,25,{seccion_clave: "AGENDASEMANAL"})
      dispatch(incrementPageAndCallAPI(totalRows, page, ownProps.itemsPerRow, fetchItems, totalAPIItems))
    },
    onGetPrevPage: (totalRows) => {
      dispatch(decrementPage(totalRows))
    }
  }
}

export const CarouselRowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CarouselRow)