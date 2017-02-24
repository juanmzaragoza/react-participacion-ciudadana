import { connect } from 'react-redux'
import ContentMain from '../components/ContentMain'
import { fetchContent } from '../actions/ResultAction'
import { fetchVotation } from '../actions/VoteAction'

const mapStateToProps = (state, ownProps) => {
    return {
        error: state.result.errorRequest,
        content: state.result.content
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    componentDidMount: () => {
        dispatch(fetchContent(ownProps.type,ownProps.id,{'publicado':1}));
        dispatch(fetchVotation(ownProps.type,ownProps.id));
    }
  }
}

const ContentMainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentMain)

export default ContentMainContainer