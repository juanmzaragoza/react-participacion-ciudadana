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
      messageError: state.commentForm.error.isError? state.commentForm.error.message:null,
      commentSuccess: state.commentForm.success
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    postComment: (id, type, comment) => {
      var user = JSON.parse(AuthStore.getUser());
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