import { connect } from 'react-redux';
import CommentForm from '../components/CommentForm';
import { showLoginForm } from '../actions/UserAction';
import { comment as c } from '../actions/CommentAction';
import { AuthStore } from '../store/AuthStore';

const mapStateToProps = (state, ownProps) => {
    return {
      canPost: state.user.isAuthenticated,
      id: state.result.content.id,
      type: state.result.content.obra_etapas !== undefined? 'obra':'evento',
      messageError: state.commentEntity.error.isError? state.commentEntity.error.message:null,
      commentSuccess: state.commentEntity.success
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    postComment: (id, type, comment) => {
      var user = JSON.parse(AuthStore.getUser());
      console.log("Tengo que acceder al local storage para obtener usuario");
      dispatch(c(id, type, comment, user.id));
    },
    onNoComment: () => {
      dispatch(showLoginForm());
    }
  }
}

const CommentFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm)

export default CommentFormContainer