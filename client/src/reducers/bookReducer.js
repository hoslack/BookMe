import _ from 'lodash';
import { SUBMIT_BOOK } from '../actions/types';
import { FETCH_BOOKS } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case SUBMIT_BOOK:
			return action.payload || false;
		case FETCH_BOOKS:
			return action.payload.data;
		default:
			return state;
	}
};


