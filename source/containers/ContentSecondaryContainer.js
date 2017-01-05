import { connect } from 'react-redux'
import ContentSecondary from '../components/ContentSecondary'
import { fetchContent } from '../actions/ResultAction'

const mapStateToProps = (state, ownProps) => {
    return {
    	error: state.result.errorRequest,
        content: state.result.content
    }
}

const ContentSecondaryContainer = connect(
  mapStateToProps,
  null
)(ContentSecondary)

export default ContentSecondaryContainer