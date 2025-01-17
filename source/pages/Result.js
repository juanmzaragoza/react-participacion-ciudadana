import React from "react";

import Main from "components/Layout/Main";
import Section from "components/Layout/Section";
import Article from "components/Layout/Article";
import Aside from "components/Layout/Aside";
import Separator from "components/Layout/Separator";

import { ContentMainContainer } from "components/ContentMain";
import { ContentSecondaryContainer } from "components/ContentSecondary";

import {  requestResults } from 'actions/ResultAction'

import { CommentFormContainer } from "components/CommentForm"
import { CommentsListContainer } from "components/CommentsList"

import { VoteSectionContainer } from "components/VoteSection"

import { ButtonSubscribeContainer } from "components/Button";

class Result extends React.Component {

	constructor(props) {
    	super(props);
  	}

	render() {

		var sizeCols = [8,4] //primera columna de la pagina de 8/12 y la segunda de 4/12
		var filter = {
			id: this.props.params.id, 
			type: this.props.location.query.tipo
		};
		var path = this.props.location.pathname;
		var type = path.substring(path.indexOf("/")+1,path.lastIndexOf("/"));

		return(
			<Main> 

		        <div className="row">
		        	
		        	<Article colMd={8}>

			        	<ContentMainContainer 
			        		id={this.props.params.id_result}
			        		type={type} >

		          			<ButtonSubscribeContainer 
		          				id={this.props.params.id_result}
			        			type={type} />

		          		</ContentMainContainer>
			        	
			        	<Separator/>
			        	<VoteSectionContainer />

			        	<Separator/>
			        	<CommentFormContainer />

			        	<Separator/>
			        	<CommentsListContainer 
			        		id={this.props.params.id_result}
			        		type={type} />

			        </Article >

		        	<Aside colMd={4} colSm={12}>
		        		<ContentSecondaryContainer />
		          	</Aside>

		        </div>

			</Main>
		)
	}
}

export default Result