import React from "react";
import PropTypes from "prop-types";

class Aside extends React.Component {

	constructor(props) {
		super(props);
	}

	render(){

		let className = this.props.colSm? " col-sm-"+this.props.colSm:"";
		className += this.props.colMd? " col-md-"+this.props.colMd:"";
		className += this.props.colXs? " col-xs-"+this.props.colXs:"";

		return (
			<aside className={className}>
				{this.props.children}
			</aside>
		)
	}
}

Aside.propTypes = {
  colSm: PropTypes.number,
  colMd: PropTypes.number,
  colXs: PropTypes.number
}

export default Aside