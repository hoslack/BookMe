import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import BookField from './BookField';
import { connect } from 'react-redux';
import { submitBook } from '../actions';

class BookForm extends Component {
	renderFields() {
		return (
			<div>
				<Field label="Book Title" type="text" name="title" component={BookField} />
				<Field label="Descritpion" type="text" name="descritpion" component={BookField} />
			</div>
		);
	}

	onSubmit(values) {
		this.props.submitBook(values);
	}

	render() {
		const { handleSubmit } = this.props;
		return (
			<div>
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					{this.renderFields()}
					<Link to="/books" className="tealt btn red left">
						Cancel
						<i class="material-icons right">cancel</i>
					</Link>
					<button type="submit" className="tealt btn right">
						Submit
						<i class="material-icons right">send</i>
					</button>
				</form>
			</div>
		);
	}
}

const validate = values => {
	const errors = {};
	if (!values.title) {
		errors.title = 'Please enter a title';
	}
	if (!values.descritpion) {
		errors.descritpion = 'Please enter a title';
	}

	return errors;
};

export default reduxForm({
	validate,
	form: 'bookForm',
})(connect(null, { submitBook })(BookForm));
