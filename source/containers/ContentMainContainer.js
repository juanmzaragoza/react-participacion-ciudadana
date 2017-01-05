import { connect } from 'react-redux'
import ContentMain from '../components/ContentMain'
import { fetchContent } from '../actions/ResultAction'

const mapStateToProps = (state, ownProps) => {
    return {
        error: state.result.errorRequest,
        content: state.result.content
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    componentDidMount: () => {
        dispatch(fetchContent(ownProps.type,ownProps.id,{'publicado':1}))
    }
  }
}

const ContentMainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentMain)

export default ContentMainContainer