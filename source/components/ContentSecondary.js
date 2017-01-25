import React, { PropTypes } from "react";

class ContentSecondary extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		if(this.props.componentDidMount !== undefined){
			this.props.componentDidMount();
		}
 	}

 	renderImagesSection() {
 		return(
			<section>
            	<h2>Imágenes</h2>
            	<div className="row row-modalcarousel">
        	  		{this.props.content.images.map((image,index) => {
        	  			if(image.image && image.position > 1){
        	  				return(
		              			<a className="col-xs-6" href={image.image.url} title={image.image.name} key={index}>
				                	<img className="img-responsive thumbnail" src={image.image.url} />
				              	</a>
		              		)
        	  			}
	              	})}
	            </div>
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
  	componentDidMount: PropTypes.func
}

export default ContentSecondary