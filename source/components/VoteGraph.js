import React, { PropTypes } from "react";
import ReactHighcharts from "react-highcharts";


class VoteGraph extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount(){
		let chart = this.refs.chart.getChart();
		chart.reflow();
	}

	render(){

		const config = {
	  		chart: {
		    	type: 'bar'
		  	},
		  	title: {
		        text: 'Resultado de '+this.props.titulo
	    	},
	    	subtitle: {
		        text: this.props.descripcion_breve
		    },
		  	xAxis: {
		    	categories: this.props.opciones
		  	},
		  	yAxis: {
		        title: {
		            text: 'Cantidad de votos',
		            align: 'high'
		        },
		        labels: {
		            overflow: 'justify'
		        }
		    },
		  	tooltip: {
		        formatter: function(){
		           return this.x+'<br/><b>'+ this.y +' votos</b>' ;
		         }
		    },
		  	series: [{
		  		showInLegend: false,
		    	data: this.props.votos
		  	}]
		};

		return (
			(this.props.opciones != null && this.props.opciones.length>0)?
				<div>
					<header>
	              		<h2>{this.props.titulo}</h2>
	              		<p className="lead">{this.props.descripcion_breve}</p>
		            </header>
				 
				 	<article className="contenido">
	     				{this.props.descripcion}
				 	</article>
				 	<div className="clear"></div>

				  	<div className="row">
				     	<div className="col-xs-12 col-sm-12 col-md-12" >
					     	<ReactHighcharts config={config} ref="chart" />
					 	</div>
				 	</div>	 
	             	<div className="clear"></div>
	        	</div>
	        	:
	        	null
		)
	}
}

VoteGraph.propTypes = {
  id: PropTypes.number,
  titulo: PropTypes.string,
  descripcion_breve: PropTypes.string,
  contenido: PropTypes.string,
  opciones: PropTypes.array,
  canVote: PropTypes.bool,
  onSubmit: PropTypes.func,
  onNoVote: PropTypes.func
}

export default VoteGraph;