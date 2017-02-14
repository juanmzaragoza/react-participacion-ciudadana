import { connect } from 'react-redux';
import CommentsList from '../components/CommentsList';
import { fetchComments } from '../actions/CommentAction';

const mapStateToProps = (state, ownProps) => {
    return {
    	comments: state.result.content.comments
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getComments: (id, type) => {
      dispatch(fetchComments(ownProps.id, ownProps.type, 1, 25))
    },
  }
}

const CommentsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsList)

export default CommentsListContainer