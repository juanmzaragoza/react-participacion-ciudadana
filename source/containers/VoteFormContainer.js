import { connect } from 'react-redux';
import VoteForm from '../components/VoteForm';
import { showLoginForm } from '../actions/UserAction';
import { vote } from '../actions/VoteAction';
import { AuthStore } from '../store/AuthStore';

const mapStateToProps = (state, ownProps) => {

    var returnObj = {
      id: undefined,
      titulo: undefined,
      descripcion_breve: undefined,
      contenido: undefined,
      opciones: undefined,
      canVote: state.user.isAuthenticated,
      messageError: state.voteForm.error.isError? state.voteForm.error.message:null,
    }

    if(state.result.content.votaciones !== undefined && state.result.content.votaciones.length > 0){

      var votacionesActivas = state.result.content.votaciones.filter(function(votacion){
        return votacion.publicado == 1 && votacion.estado == 1
      })
      votacionesActivas.sort(function(a, b){
        var dateA = new Date(a.fecha_alta), dateB = new Date(b.fecha_alta);
        return dateB-dateA;
      })
      var votacion = votacionesActivas[0];

      returnObj = Object.assign({}, returnObj, {
        id: votacion.id,
        titulo: votacion.nombre,
        descripcion_breve: votacion.descripcion != null? votacion.descripcion.slice(0, 20):null,
        contenido: votacion.descripcion,
        opciones: votacion.opciones
      });
    }

    return returnObj;
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (e) => {
      var user = JSON.parse(AuthStore.getUser());
      dispatch(vote(e.votacion, e.opcion, user.id));
    },
    onNoVote: () => {
      dispatch(showLoginForm());
    }
  }
}

const VoteFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VoteForm)

export default VoteFormContainer