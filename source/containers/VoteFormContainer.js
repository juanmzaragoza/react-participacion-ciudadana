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

    if(state.voteForm.votation.error != true && state.voteForm.votation.content != null){
      var votation = state.voteForm.votation.content;
      returnObj = Object.assign({}, returnObj, {
        id: votation.id,
        titulo: votation.nombre,
        descripcion_breve: votation.descripcion != null? votation.descripcion.slice(0, 20):null,
        contenido: votation.descripcion,
        opciones: votation.opciones
      });
    }

    return returnObj;
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit(e){
      var user = JSON.parse(AuthStore.getUser());
      dispatch(vote(e.votacion, e.opcion, user.id));
    },
    onNoVote(){
      dispatch(showLoginForm());
    }
  }
}

const VoteFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VoteForm)

export default VoteFormContainer