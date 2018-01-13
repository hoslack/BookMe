import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import sha1 from 'sha1';
import superagent from 'superagent';
import BookField from './BookField';
import { connect } from 'react-redux';
import { submitBook } from '../actions';
import keys from '../config/keys';

class BookNew extends Component {
	renderFields() {
		return (
			<div>
				<Field label="Book Title" type="text" name="title" component={BookField} />
				<Field label="Description" type="text" name="description" component={BookField} />
			</div>
		);
	}

	uploadFile(files) {
		const image = files[0];
		const cloudName = 'df2ethf4o';
		const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
		const timestamp = Date.now() / 1000;
		const upload_preset = keys.upload_preset;
		const api_secret = keys.api_secret;
		const api_key = keys.api_key;
		const paramStr = `timestamp=${timestamp}&upload_preset=${upload_preset}${api_secret}`;
		const signature = sha1(paramStr);
		const params = {
			api_key: api_key,
			timestamp: timestamp,
			upload_preset: upload_preset,
			signature: signature,
		};

		let uploadRequest = superagent.post(url);
		uploadRequest.attach('file', image);

		Object.keys(params).forEach(key => {
			uploadRequest.field(key, params[key]);
		});

		uploadRequest.end((err, res) => {
			if (err) {
				alert(err);
				return;
			}

			console.log('Upload Successful', JSON.stringify(res.body.url));
		});
	}

	onSubmit(values) {
		this.props.submitBook(values, () => {
			this.props.history.push('/books');
		});
	}

	render() {
		const { handleSubmit } = this.props;
		return (
			<div>
				<Dropzone onDrop={this.uploadFile.bind(this)} />
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
})(connect(null, { submitBook })(BookNew));
