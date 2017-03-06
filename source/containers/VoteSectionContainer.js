import React, { PropTypes } from "react";
import { connect } from 'react-redux';
import VoteFormContainer from "../containers/VoteFormContainer";
import VoteGraphContainer from "../containers/VoteGraphContainer";

class VoteSection extends React.Component {

	constructor(props) {
		super(props);
	}

	render(){

		return (
			<div>
				{this.props.showGraph?
					<VoteGraphContainer />
					:
					<VoteFormContainer />
				}
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
    return {
      showGraph: state.voteForm.graph.show
    }
}

const VoteSectionContainer = connect(
  mapStateToProps,
  null
)(VoteSection)

export default VoteSectionContainer;