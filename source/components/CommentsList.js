import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import { fetchComments } from 'actions/CommentAction';

import Comment from "components/Comment";

import * as utils from 'lib/utils'

export class CommentsList extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount(){
		if(this.props.getComments !== undefined){
			this.props.getComments();
		}
	}

	render(){
		return (
			<div>
				<header>
              		<h3>Comentarios publicados</h3>
             	</header>
             	{this.props.comments === undefined || this.props.comments.length == 0?
             		<div>No comments</div>
             		:
             		this.props.comments.map((item,index) => {
	             		return (
	             			<Comment key={index}
	             				username={item.usuario.username}
	             				gender={item.usuario.gender}
	             				body={item.descripcion}
	             				date={utils.getDateFormat(item.fecha_alta)} />
	             		)
	             	})
             	}
             	
			</div>
		)
	}
}

CommentsList.propTypes = {
  	comments: PropTypes.array,
  	getComments: PropTypes.func
}


//container
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

export const CommentsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsList)