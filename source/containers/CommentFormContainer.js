import { connect } from 'react-redux'
import CommentForm from '../components/CommentForm'
import { fetchContent } from '../actions/ResultAction'

const mapStateToProps = (state, ownProps) => {
    return {
      canPost: state.user.isAuthenticated
        //error: state.result.errorRequest
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    postComment: (id, comment) => {
      console.log("Tengo que acceder al local storage para obtener usuario");
    },
    onNoComment: () => {
      console.log("No estoy logueado. No puedo hacer comentario");
    }
  }
}

const CommentFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm)

export default CommentFormContainer