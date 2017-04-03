import React, { PropTypes } from "react";
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

import {  fetchResults, fetchMoreResults } from '../actions/ResultAction'

import { CarouselRowContainer } from "../components/CarouselRow"
import ThumbnailDescriptionItem from "../components/Item/ThumbnailDescriptionItem"

export class ListGroupThumbnails extends React.Component {

	constructor(props) {
  		super(props);
 	}

 	componentWillMount() {
 		if(this.props.componentWillMount !== undefined){
 			this.props.componentWillMount();
 		}
 	}

  	renderList(){

  		let tempitems = this.props.items.map((item,index) => {
			let thumbnailSrc = undefined;
			if(item.images !== undefined && item.images.length>0){
				for(let index in item.images){
					if(item.images[index].position == 1 && item.images[index].image !== null){
						thumbnailSrc = item.images[index].image.url;
					}
				}				
			} else if(item.image_url){
				thumbnailSrc = item.image_url;
			} else if(thumbnailSrc === undefined) {
				thumbnailSrc = require("../public/content/images/jumbo4.jpg");
			}
			return(
				<ThumbnailDescriptionItem 
					key={index}
					thumbnail_src={thumbnailSrc} 
					label={item.nombre}
					description={item.descripcion_breve} 
					linkHref={'/'+item.tipo+'/'+item.id}
					colSm={6}
					colMd={4} 
					descriptionTextClass='text-limit-two-lines'
					linesPerTitle={3} />
			)
		});

		let i,j,chunk = 3, items = [];
		for (i=0,j=tempitems.length; i<j; i+=chunk) {
		    items.push(tempitems.slice(i,i+chunk))
		}

		return (
			items.map((item,index) => {
				return(
					<div key={index} className="row">
						{item}
					</div>
				)
			})
		)
  	}

  	renderPagination() {
  		return (
  			<div className="row">
				<ReactPaginate 
				   previousLabel={""}
				   previousLinkClassName={"glyphicon glyphicon-chevron-left"}
                   nextLabel={""}
                   nextLinkClassName={"glyphicon glyphicon-chevron-right"}
                   breakLabel={<a href="">...</a>}
                   breakClassName={"break-me"}
                   pageCount={this.props.pageCount}
                   marginPagesDisplayed={2}
                   pageRangeDisplayed={5}
                   onPageChange={this.props.handlePageClick}
                   containerClassName={"pagination"}
                   activeClassName={"active"} />
            </div>
  		)
  	}

 	render(){

 		const spin = <div className="col-md-12 col-sm-12 list-group list-group-content list-group-multi"><h1 style={{textAlign: 'center'}}><span className="glyphicon glyphicon-refresh spin"></span></h1></div>;
 		const spinFirstLoading = this.props.isLoading? spin:null;

		return(
			<div>
				{this.renderList()}
				{spinFirstLoading}
				{this.renderPagination()}
		    </div>
		)
	}
}

ListGroupThumbnails.propTypes = {
  items: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  colSm: PropTypes.number.isRequired,
  colMd: PropTypes.number.isRequired,
  pageCount: PropTypes.number,
  componentWillMount: PropTypes.func,
  handlePageClick: PropTypes.func
}

//container
const mapStateToProps = (state, ownProps) => {
    return {
        items: state.results.items,
        isLoading: (state.results.isFetching || state.results.errorRequest),
        page: state.results.page,
        pageCount: state.results.pageCount,
        colSm: 12,
        colMd: 9
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

  var resultsPerPage = 6;
  var filtroPorNombre = {nombre: ownProps.filter.nombre};
  var filtroPorTag = {tag_nombre: ownProps.filter.tag_nombre};
  
  return {
    componentWillMount: () => {
      dispatch(fetchResults(1,resultsPerPage,filtroPorNombre,ownProps.type,false));
      dispatch(fetchResults(1,resultsPerPage,filtroPorTag,ownProps.type,true));
    },
    handlePageClick: (e) => {
      dispatch(fetchResults(e.selected+1,resultsPerPage,filtroPorNombre,ownProps.type,false));
      dispatch(fetchResults(e.selected+1,resultsPerPage,filtroPorTag,ownProps.type,true));
    }
  }
}

export const ResultsListGroupThumbnailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListGroupThumbnails)