import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import bookReducer from './bookReducer';

export default combineReducers({
	auth: authReducer,
	form: reduxForm,
	books: bookReducer,
});
