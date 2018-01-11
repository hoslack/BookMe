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
					<Link to="/" className="tealt btn red left">
						Cancel
						<i class="material-icons right">cancel</i>
					</Link>
					<button type="submit" className="tealt btn right">
						Submit
						<i class="material-icons right">done</i>
					</button>
				</form>
			</div>
		);
	}
}

export default reduxForm({
	form: 'bookForm',
})(BookForm);
