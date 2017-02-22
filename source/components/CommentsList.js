import React, { PropTypes } from "react";
import Comment from "./Comment";
import * as utils from '../lib/utils'

class CommentsList extends React.Component {

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

export default CommentsList