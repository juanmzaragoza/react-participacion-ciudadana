import React from "react";
import PropTypes from "prop-types";

class Comment extends React.Component {

	constructor(props) {
		super(props);
	}

	render(){

		const avatarsFem = [
			require("../public/content/images/Avatar-F-01.png"),
			require("../public/content/images/Avatar-F-02.png"),
			require("../public/content/images/Avatar-F-03.png"),
			require("../public/content/images/Avatar-F-04.png"),
			require("../public/content/images/Avatar-F-05.png"),
		]

		const avatarsMasc = [
			require("../public/content/images/Avatar-M-01.png"),
			require("../public/content/images/Avatar-M-02.png"),
			require("../public/content/images/Avatar-M-03.png"),
			require("../public/content/images/Avatar-M-04.png"),
			require("../public/content/images/Avatar-M-05.png"),
		]

		const avatarsMod = [
			require("../public/content/images/Avatar-moderacion.png"),			
		];

		var avatars = avatarsMod;
		if(this.props.gender == "m"){
			avatars = avatarsMasc;
		} else if(this.props.gender == "f"){
			avatars = avatarsFem;
		}

		return (
			<div className="row">
		     	<div className="col-xs-12 col-sm-2 col-md-2">
			     	<div className="img_avatar"><img src={avatars[Math.floor((Math.random() * (avatars.length-1)))]} /></div>
			 	</div>
			 	<div className="col-xs-12 col-sm-10 col-md-10">
			     	<p className="well">
			     		<strong>{this.props.username}</strong> {this.props.body}
			     		<br /> 
			     		<span className="date_coment">{this.props.date}</span>
			     	</p>
			 	</div>
		 	</div>
		)
	}
}

Comment.propTypes = {
  imgSrc: PropTypes.object,
  username: PropTypes.string,
  body: PropTypes.string,
  date: PropTypes.string
}

export default Comment