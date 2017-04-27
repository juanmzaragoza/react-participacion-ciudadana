import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router';

class BioItem extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {

		const className = this.props.className? this.props.className:"";
		const imgElement = <img src={this.props.imageSrc} alt={this.props.description} className="img-thumbnail" />

		return (
			<div className={className}>
				{(this.props.linkHref != undefined && this.props.linkHref != '')?
					<a href={this.props.linkHref} target={this.props.target} >
						{imgElement}
					</a>:
					imgElement
				}
			</div>
		)
	}
}

BioItem.propTypes = {
  className: PropTypes.string,
  linkHref: PropTypes.string,
  imageSrc: PropTypes.string,
  description: PropTypes.string,
}

export default BioItem