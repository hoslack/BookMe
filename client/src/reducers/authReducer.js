import { FETCH_USER } from '../actions/types';
import { SUBMIT_BOOK } from '../actions/types';

export default (state = null, action) => {
	switch (action.type) {
		case FETCH_USER:
			return action.payload || false;
		case SUBMIT_BOOK:
			return action.payload || false;
		default:
			return state;
	}
};
