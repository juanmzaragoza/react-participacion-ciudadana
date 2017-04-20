import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router';
import Dotdotdot from 'react-dotdotdot';

class ThumbnailDescriptionItem extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount(){
		this.refs.description.innerHTML = this.props.description;
	}

	componentDidUpdate(){
		this.refs.description.innerHTML = this.props.description;
	}

	componentWillUnmount(){
		this.refs.description.innerHTML = "";
	}

	renderTitle() {
		return (
			(this.props.linesPerTitle > 0)?
				(<h3 title={this.props.label}> {/*elipsis*/}
					<Dotdotdot clamp={this.props.linesPerTitle}>
						{this.props.label}
					</Dotdotdot>
				</h3>)
				:
				(<h3 title={this.props.label}>
					{this.props.label}
				</h3>)
		)
	}

	renderCaption(){

		return (
			(this.props.isCategory === true)?
				(<div className="caption">
					<div className="text-category">
						{this.renderTitle.bind(this)()}
						<p className={this.props.descriptionTextClass} ref="description"></p>
						<p>
							<Link to={this.props.linkHref} className="btn btn-primary" role="button">
								{this.props.linkText? this.props.linkText:'Leer más'}
							</Link>
						</p>
					</div>
				</div>)
				:					
				(<div className="caption">
					{this.renderTitle.bind(this)()}
					<p className={this.props.descriptionTextClass} ref="description"></p>
					<p>
						<Link to={this.props.linkHref} className="btn btn-primary" role="button">
							{this.props.linkText? this.props.linkText:'Leer más'}
						</Link>
					</p>
				</div>)
		)
	}

	render(){

		let classRoot = "col-xs-12 col-sm-"+this.props.colSm+" col-md-"+this.props.colMd;

		return(
			<div className={classRoot}>
				<div className="thumbnail">
					<Link to={this.props.linkHref} >
				  		<img src={this.props.thumbnail_src} className={"img-rounded"} alt={this.props.label}/>
				  	</Link>
				  	{this.renderCaption.bind(this)()}
				</div>
		  	</div>
		)
	}

}

ThumbnailDescriptionItem.defaultProps = {
    linkText: '',
    descriptionTextClass: '',
    colSm: 6,
    colMd: 3,
    isCategory: false
}

ThumbnailDescriptionItem.propTypes = {
  thumbnail_src: PropTypes.string.isRequired,
  label: PropTypes.string,
  description: PropTypes.string.isRequired,
  linkHref: PropTypes.string.isRequired,
  linkText: PropTypes.string,
  linkParams: PropTypes.object,
  colSm: PropTypes.number,
  colMd: PropTypes.number,
  descriptionTextClass: PropTypes.string,
  isFirst: PropTypes.bool,
  isCategory: PropTypes.bool,
  linesPerTitle: PropTypes.number,
}

export default ThumbnailDescriptionItem