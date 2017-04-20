import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router';

class SocialNetworkShareButton extends React.Component {

	constructor(props) {
		super(props);
		this.openPopup = this.openPopup.bind(this);
	}

	openPopup(e){
		e.preventDefault();
		window.open(this.refs.link.props.href, this.props.title, "width=500,height=500");
	}

	render(){

		return (
			<Link onClick={this.openPopup} href={this.props.url} ref="link"> 
				{(this.props.img != undefined && this.props.img != '')?
					<img src={this.props.img}  />
					:
					"Compartir en "+this.props.title
				}
			</Link>	      	
		)
	}
}

SocialNetworkShareButton.propTypes = {
	title: PropTypes.string,
	img: PropTypes.string,
	url: PropTypes.string.isRequired,
	textToShare: PropTypes.string,
	urlToShare: PropTypes.string
}

export default SocialNetworkShareButton