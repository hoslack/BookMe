import axios from 'axios';
import { FETCH_USER } from './types';
import { SUBMIT_BOOK } from './types';

export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/user');
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitBook = (values, callback) => async dispatch => {
	const res = await axios.post('/api/addbook', values).then(() => callback());
	dispatch({ type: SUBMIT_BOOK, payload: res.data });
};
