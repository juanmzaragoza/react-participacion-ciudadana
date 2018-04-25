import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router';
import Dotdotdot from 'react-dotdotdot';

class ThumbnailDescriptionItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			imgEffect: false
		}
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
			(this.props.label != undefined && this.props.label.length > 0)?
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
				:
				null
		)
	}

	renderCaption(){

		const moreInfo = (
				<Link to={this.props.linkHref} className={this.props.buttonClassName} role="button">
					{this.props.linkText? this.props.linkText:'Leer más'}
				</Link>
			),
			buttonAction = (
				<button className={this.props.buttonClassName} onClick={this.props.onClickButton} >
					{this.props.linkText? this.props.linkText:'Leer más'}
				</button>
			),
			actionButton = this.props.renderButton? buttonAction:moreInfo;



		return (
			(this.props.isCategory === true)?
				(<div className="caption">
					<div className="text-category">
						{this.renderTitle.bind(this)()}
						<p className={this.props.descriptionTextClass} ref="description"></p>
						<p>
							{ actionButton }
						</p>
					</div>
				</div>)
				:					
				(<div className="caption">
					{this.renderTitle.bind(this)()}
					<p className={this.props.descriptionTextClass} ref="description"></p>
					<p>
						{ actionButton }
					</p>
				</div>)
		)
	}

	activeEffect(){
		this.setState({
			imgEffect: true
		})
	}

	desactiveEffect(){
		this.setState({
			imgEffect: false
		})
	}

	render(){

		let classRoot = "col-xs-12 col-sm-"+this.props.colSm+" col-md-"+this.props.colMd;

		return(
			<div className={classRoot}>
				<div className="thumbnail">
					<Link to={this.props.linkHref} >
						{
							(this.props.thumbnailDisabled === false)?
					  		<img src={this.props.thumbnail_src} 
						  		className={(this.state.imgEffect && this.props.imgClassName != undefined)? `img-rounded ${this.props.imgClassName}`:`img-rounded`} 
						  		alt={this.props.label} 
						  		onMouseEnter={this.activeEffect.bind(this)} 
						  		onMouseLeave={this.desactiveEffect.bind(this)} />
						  	:
						  	null
						}
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
    isCategory: false,
    thumbnailDisabled: false,
    buttonClassName: 'btn btn-primary',
    renderButton: false
}

ThumbnailDescriptionItem.propTypes = {
  thumbnail_src: PropTypes.string.isRequired,
  label: PropTypes.string,
  description: PropTypes.string.isRequired,
  linkHref: PropTypes.string.isRequired,
  linkText: PropTypes.string,
  colSm: PropTypes.number,
  colMd: PropTypes.number,
  descriptionTextClass: PropTypes.string,
  isFirst: PropTypes.bool,
  isCategory: PropTypes.bool,
  linesPerTitle: PropTypes.number,
  imgClassName: PropTypes.string,
  buttonClassName: PropTypes.string, // per default has the 'btn btn-primary' value
  thumbnailDisabled: PropTypes.bool, // on true: disables image
  renderButton: PropTypes.bool, // on true: render the button on renderCaption()
  onClickButton: PropTypes.func, // on renderButton=true, bind the click button
}

export default ThumbnailDescriptionItem