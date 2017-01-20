import React, { PropTypes } from "react"
import CarouselRowContainer from "../containers/CarouselRowContainer"
import ThumbnailDescriptionItem from "../components/Item/ThumbnailDescriptionItem"
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

class ListGroupThumbnails extends React.Component {

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
			let thumbnailSrc;
			if(item.images !== undefined && item.images.length>0){
				thumbnailSrc = item.images[0].image.url;
			} else if(item.image_url){
				thumbnailSrc = item.image_url;
			} else {
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
					descriptionTextClass='text-limit-two-lines' />
			)
		});

		let i,j,chunk = 3, items = [];
		for (i=0,j=tempitems.length; i<j; i+=chunk) {
		    items.push(tempitems.slice(i,i+chunk))
		}

		return (
			items.map((item,index) => {
				return(
					<div className="row">
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

export default ListGroupThumbnails