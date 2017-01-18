import React, { PropTypes } from "react"
import { Link } from 'react-router'

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

	renderCaption(){
		return (
			(this.props.isCategory === true)?
				(<div className="caption">
					<div className="text-category">
						<h3>{this.props.label}</h3>
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
					<h3>{this.props.label}</h3>
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
}

export default ThumbnailDescriptionItem