import React, { PropTypes } from "react";
import { connect } from 'react-redux';
import { VoteFormContainer } from "../components/VoteForm";
import { VoteGraphContainer } from "../components/VoteGraph";

export class VoteSection extends React.Component {

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

export const VoteSectionContainer = connect(
  mapStateToProps,
  null
)(VoteSection)