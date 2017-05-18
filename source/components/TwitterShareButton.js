import React from "react";
import PropTypes from "prop-types";
import SocialNetworkShareButton from "components/SocialNetworkShareButton";
const config = require('config/config');

class TwitterShareButton extends React.Component {

	constructor(props) {
		super(props);
	}

	render(){

		const imgSocialTw = require("public/content/images/social-tw.png");
		const href = document.location.href;
		const url = config.share.twitter.url+"?url="+href+"&text=custom%20share%20text&original_referer="+href+"&related=twitterapi%2Ctwitter&via=twitterdev&hashtags=example%2Cdemo";
		
		return (
			<SocialNetworkShareButton url={url} img={imgSocialTw} /> 	
		)
	}
}

export default TwitterShareButton