import React, { PropTypes } from "react";
import SocialNetworkShareButton from "./SocialNetworkShareButton";
const config = require('../config/config');

class FacebookShareButton extends React.Component {

	constructor(props) {
		super(props);
	}

	render(){

		const imgSocialFb = require("../public/content/images/social-fb.png");
		const href = document.location.href;
		const url = config.share.facebook.url+"?app_id="+config.share.facebook.app_id+"&display=popup&href="+href;

		return (
			<SocialNetworkShareButton 
				url={url} 
				img={imgSocialFb} /> 	
		)
	}
}

export default FacebookShareButton