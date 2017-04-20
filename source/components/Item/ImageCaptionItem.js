import React from "react";
import PropTypes from "prop-types";

class ImageCaptionItem extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount(){
		this.refs.title.innerHTML = this.props.title;
		this.refs.description.innerHTML = this.props.description;
	}

	componentDidUpdate(){
		this.refs.title.innerHTML = this.props.title;
		this.refs.description.innerHTML = this.props.description;
	}

	componentWillUnmount(){
		this.refs.title.innerHTML = "";
		this.refs.description.innerHTML = "";
	}

	render(){

		const classItem = this.props.isFirst? "item active":"item";
		const imageSrc = this.props.imageSrc? this.props.imageSrc:require("../../public/content/images/op04.jpg");
		
		return(
			<div className={classItem} >
				<img src={imageSrc} alt={this.props.description}/>
				<div className="carousel-caption">
				 	<h2 ref="title"></h2>
				 	<p ref="description"></p>
			  	</div>
			</div>
		)
	}
	
}

//ImageCaptionItem.propTypes = {
  /*thumbnail_src: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkHref: PropTypes.string.isRequired,
  linkText: PropTypes.string,
  descriptionTextClass: PropTypes.string*/
//}

export default ImageCaptionItem