import { AuthStore } from '../store/AuthStore';
import {  checkIfUserAnswerVotation } from '../actions/VoteAction';

export default function VotationComplete(state, dispatch){

	if(showGraph(state)){
		//dispatch action que verifica si tiene que mostrar el grafico o no
		console.log("actors/VotationComplete");
		var user = JSON.parse(AuthStore.getUser());
		dispatch(checkIfUserAnswerVotation(state.voteForm.votation.content.id, user.id));
	}

}

function showGraph(state){
	return (state.user.isAuthenticated && !state.voteForm.graph.show && !state.voteForm.graph.verified
		&& state.routing.locationBeforeTransitions !== undefined && state.voteForm.votation.content.id !== undefined
		&& /(obra\/|evento\/)\d+(?=\s|$)/.test(state.routing.locationBeforeTransitions.pathname));
}