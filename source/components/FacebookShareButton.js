import React, { PropTypes } from "react";
import MetaTags from 'react-meta-tags';

import SocialNetworkShareButton from "./SocialNetworkShareButton";
const config = require('../config/config');

class FacebookShareButton extends React.Component {

	constructor(props) {
		super(props);
	}

	renderMetaTags() {
		return (
			(this.props.title != undefined)?
				<MetaTags>
		            <meta property="og:url"           content={window.location.href} />
				  	<meta property="og:type"          content="website" />
				 	<meta property="og:title"         content={this.props.title} />
				  	<meta property="og:description"   content={this.props.description} />
				  	<meta property="og:image"         content={this.props.image} />
	          	</MetaTags>
	          	:
	          	null
	        
		)
	}

	render(){

		const imgSocialFb = require("../public/content/images/social-fb.png");
		const href = document.location.href;
		const url = config.share.facebook.url+"?app_id="+config.share.facebook.app_id+"&display=popup&href="+href;

		return (
			<div>
				{this.renderMetaTags.bind(this)()}
				<SocialNetworkShareButton 
					url={url} 
					img={imgSocialFb} />
			</div>
		)
	}
}

export default FacebookShareButton