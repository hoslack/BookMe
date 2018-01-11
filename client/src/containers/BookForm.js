import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import BookField from './BookField';

class BookForm extends Component {
	renderFields() {
		return (
			<div>
				<Field label="Book Title" type="text" name="title" component={BookField} />
				<Field label="Descritpion" type="text" name="descritpion" component={BookField} />
			</div>
		);
	}
	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(values => console.log(values))}>
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
})(BookForm);
