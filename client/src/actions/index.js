import axios from 'axios';
import { FETCH_USER } from './types';
import { SUBMIT_BOOK } from './types';
import { FETCH_BOOKS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/auth/user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitBook = (values, callback) => async dispatch => {
  const res = await axios.post('/api/addbook', values).then(() => callback());
  dispatch({ type: SUBMIT_BOOK, payload: res.data });
};

export const fetchBooks = () => async dispatch => {
  const res = await axios.get('/api/books');
  dispatch({ type: FETCH_BOOKS, payload: res });
};
