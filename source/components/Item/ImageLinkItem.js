import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router';

class ImageLinkItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			show: false
		};
	}

	componentDidMount(){
		this.setState({
			show: true
		})
	}

	render() {

		const linkHref = this.props.linkHref? this.props.linkHref:"/";
		const imageSrc = this.props.imageSrc? this.props.imageSrc:null;
		const description = this.props.description? this.props.description:"Ausencia de imagen";
		const target = this.props.target? this.props.target:"";
		const animatedClass = this.props.animatedClass? this.props.animatedClass:"";

		return (
			<Link to={linkHref} target={target}>
				<img src={imageSrc} alt={description} ref="img" className={this.state.show? `img-thumbnail ${animatedClass}`:"img-thumbnail"} />
			</Link>
		)
	}
}

export default ImageLinkItem