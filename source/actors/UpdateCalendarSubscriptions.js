import { AuthStore } from '../store/AuthStore';
import { getAllSubscriptions } from '../actions/SubscriptionAction';

export default function UpdateCalendarSubscriptions(state, dispatch){

	if(showCalendarEvents(state)){
		//dispatch action que verifica si tiene que mostrar el grafico o no
		console.log("show calendar")
		dispatch(getAllSubscriptions());
	}

}

function showCalendarEvents(state){//usuario autenticado, susbcripcion no pedidas y pagina index
	return (state.user.isAuthenticated && !state.subscription.successRequest && !state.subscription.isFetching
		&& state.routing.locationBeforeTransitions !== undefined
		&& /^\/$/.test(state.routing.locationBeforeTransitions.pathname));
}