import React, { PropTypes } from "react"

class ImageCaptionItem extends React.Component {

	constructor(props) {
		super(props);
	}

	render(){

		const classItem = this.props.isFirst? "item active":"item";
		const imageSrc = this.props.imageSrc? this.props.imageSrc:require("../../public/content/images/op04.jpg");
		
		return(
			<div className={classItem} >
				<img src={imageSrc} alt={this.props.description}/>
				<div className="carousel-caption">
				 	<h3>{this.props.title}</h3>
				 	<p>{this.props.description}</p>
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