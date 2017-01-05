import React, { PropTypes } from "react"

class Article extends React.Component {

	constructor(props) {
		super(props);
	}

	render(){

		let className = this.props.colSm? " col-sm-"+this.props.colSm:"";
		className += this.props.colMd? " col-md-"+this.props.colMd:"";
		className += this.props.colXs? " col-xs-"+this.props.colXs:"";

		return (
			<article className={className}>
				{this.props.children}
			</article>
		)
	}
}

Article.propTypes = {
  colSm: PropTypes.number,
  colMd: PropTypes.number,
  colXs: PropTypes.number
}

export default Article