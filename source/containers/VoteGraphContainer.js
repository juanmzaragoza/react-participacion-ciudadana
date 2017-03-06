import { connect } from 'react-redux';
import VoteGraph from '../components/VoteGraph';
import { showLoginForm } from '../actions/UserAction';
import { vote } from '../actions/VoteAction';
import { AuthStore } from '../store/AuthStore';

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

const VoteGraphContainer = connect(
  mapStateToProps,
  null
)(VoteGraph)

export default VoteGraphContainer