import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router';

class ImageLinkItem extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {

		const linkHref = this.props.linkHref? this.props.linkHref:"/";
		const imageSrc = this.props.imageSrc? this.props.imageSrc:null;
		const description = this.props.description? this.props.description:"Ausencia de imagen";

		return (
			<Link to={linkHref}>
				<img src={imageSrc} alt={description} className="img-thumbnail" />
			</Link>
		)
	}
}

export default ImageLinkItem