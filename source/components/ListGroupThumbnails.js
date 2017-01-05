import React, { PropTypes } from "react"
import CarouselRowContainer from "../containers/CarouselRowContainer"
import ThumbnailDescriptionItem from "../components/Item/ThumbnailDescriptionItem"
import ReactDOM from 'react-dom';

class ListGroupThumbnails extends React.Component {

	constructor(props) {
  		super(props);
  		this.handleScroll = this.handleScroll.bind(this);
 	}

 	componentWillMount() {  
 		this.props.componentWillMount();
 		window.addEventListener("scroll", this.handleScroll, false);
 	}

  	handleScroll(e){
  		//this function will be triggered if user scrolls
	    const windowHeight = $(window).height();
	    const inHeight = window.innerHeight;
	    const scrollT = $(window).scrollTop();
	    const totalScrolled = scrollT+inHeight;

	    if(totalScrolled> this.props.page*windowHeight){  //user reached at bottom
		    if(this.props.getMoreResults){
		    	this.props.getMoreResults(this.props.page+1);
		    }
	    }
  	}

  	componentWillUnmount(){
  		window.removeEventListener("scroll", this.handleScroll, false);
  	}

  	renderList(){
		return (
			this.props.items.map((item,index) => {
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
			})
		)
  	}

 	render(){

 		const spin = <div className="col-md-12 col-sm-12 list-group list-group-content list-group-multi"><h1 style={{textAlign: 'center'}}><span className="glyphicon glyphicon-refresh spin"></span></h1></div>;
 		const spinFirstLoading = this.props.isLoading? spin:null;

		return(
			<div>
				{this.renderList()}
				{spinFirstLoading}
		    </div>
		)
	}
}

ListGroupThumbnails.propTypes = {
  items: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  colSm: PropTypes.number.isRequired,
  colMd: PropTypes.number.isRequired,
  componentDidMount: PropTypes.func,
  getMoreResults: PropTypes.func
}

export default ListGroupThumbnails