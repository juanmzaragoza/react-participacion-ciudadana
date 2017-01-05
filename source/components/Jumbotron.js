import React, { PropTypes } from "react"

class Jumbotron extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className={"jumbotron"}>
             	<img src={this.props.imageSrc} alt={this.props.imageAlt} />
		   	</div>
		)
	}
}

Jumbotron.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string
}

export default Jumbotron