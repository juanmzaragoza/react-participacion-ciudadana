import actors from '../actors';

export default function configureActors(store){

	var acting = false;
	store.subscribe(function() {
	  // Ensure that any action dispatched by actors do not result in a new
	  // actor run, allowing actors to dispatch with impunity.
	  if (!acting) {
	    acting = true;
	    for (var index in actors) {
	      actors[index](store.getState(), store.dispatch)
	    }
	    acting = false
	  }
	})

	return store;
}