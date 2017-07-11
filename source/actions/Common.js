import * as messages from 'constants/CommonMessages';

export const dispatchError = (dispatch, action, err) => {
   console.log(err);
	if(err instanceof TypeError){
	    dispatch(action(messages.API_CALL_ERROR));
	} else{
	    dispatch(action(err.message));
	}
}