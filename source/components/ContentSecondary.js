import React, { PropTypes } from "react";
import { connect } from 'react-redux';

import { fetchContent } from '../actions/ResultAction';

import { ModalGallery } from "./ModalGallery";

export class ContentSecondary extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		if(this.props.componentDidMount !== undefined){
			this.props.componentDidMount();
		}
 	}

 	handleOnClickImage(e){
 		e.preventDefault();
 		console.log(this.refs.modalgallery)
 		this.refs.modalgallery.openModal();
 	}

 	renderImagesSection() {

 		var imagesUrl = [];

 		return(
			<section>

            	<h2>Imágenes</h2>
            	<div className="row row-modalcarousel" onClick={this.handleOnClickImage.bind(this)}>
        	  		{this.props.content.images.map((image,index) => {
        	  			imagesUrl.push(image.image.url);
        	  			if(image.image && image.position > 1){
        	  				return(
		              			<a 
		              				className="col-xs-6" 
		              				href={image.image.url} 
		              				title={image.image.name} 
		              				key={index}
		              				>
				                	<img className="img-responsive thumbnail" src={image.image.url} />
				              	</a>
		              		)
        	  			}
	              	})}
	            </div>

	            <ModalGallery images={imagesUrl} ref="modalgallery" />
	            
    		</section>  
 		)
	}

	renderFilesSection() {
		return(
			<section>
	            <h2>Descargas</h2>
	            <table className="table table-striped">
	              <thead>
	                <tr>
	                  <th>Archivo</th>
	                  <th>Descargar</th>
	                </tr>
	              </thead>
	              <tbody>
	              	{this.props.content.archivos.map((archivo,index) => {
	              		return(
	              			<tr key={index}>
		                      <td>{archivo.archivo.name}</td>
		                      <td><button className="btn btn-blue btn-block btn-sm"><span className="glyphicon glyphicon-arrow-down"></span></button></td>
		                    </tr>
	              		)
	              	})}
	              </tbody>
	            </table>
	          </section>
		)
 	}

	render(){

		const content = this.props.content;
		const spin = <span className="glyphicon glyphicon-refresh spin"></span>;

		return (
			this.props.error?
				null
				:
				(Object.getOwnPropertyNames(content).length === 0?
					spin
		            :
		            <div>
		            	{this.props.content.images.length > 0? this.renderImagesSection():null}
		            	{this.props.content.archivos.length > 0? this.renderFilesSection():null}
		            </div>
		        )
		)
	}
}

ContentSecondary.propTypes = {
	error: PropTypes.bool,
	content: PropTypes.object.isRequired,
	onClickImage: PropTypes.func,
  	componentDidMount: PropTypes.func
}


//container
const mapStateToProps = (state, ownProps) => {
    return {
    	error: state.result.errorRequest,
        content: state.result.content
    }
}

export const ContentSecondaryContainer = connect(
  mapStateToProps,
  null
)(ContentSecondary)