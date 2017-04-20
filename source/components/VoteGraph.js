import React from "react";
import PropTypes from "prop-types";
import ReactHighcharts from "react-highcharts";
import { connect } from 'react-redux';

import { showLoginForm } from '../actions/UserAction';
import { vote } from '../actions/VoteAction';

import { AuthStore } from '../store/AuthStore';

export class VoteGraph extends React.Component {

	constructor(props) {
		super(props);
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
			  	<div className="row">
			     	<div className="col-xs-12 col-sm-12 col-md-12" >
				     	<ReactHighcharts config={config} ref="chart" />
				 	</div>
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


//container
const mapStateToProps = (state, ownProps) => {

  var opciones = [], 
    votos = [], 
    titulo = 'sin nombre',
    descripcion_breve = 'sin descripcion',
    descripcion = 'sin descripcion';

  if(state.voteForm.votation.error != true && state.voteForm.votation.content != null){
    var votation = state.voteForm.votation.content;

    state.voteForm.votation.content.opciones.map(function(opcion){
      opciones.push(opcion.nombre);
      votos.push(opcion.votos);
    })

    titulo = votation.nombre;
    descripcion = votation.descripcion;
    descripcion_breve = votation.descripcion != null? votation.descripcion.slice(0, 20):null;
  }

  return {
    opciones: opciones,
    votos: votos,
    titulo: titulo,
    descripcion_breve: descripcion_breve,
    descripcion: descripcion
  }
}

export const VoteGraphContainer = connect(
  mapStateToProps,
  null
)(VoteGraph)