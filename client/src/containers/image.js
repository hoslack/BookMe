import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import sha1 from 'sha1';
import superagent from 'superagent';

class Image extends Component {
	uploadFile(files) {
		const image = files[0];
		const cloudName = 'df2ethf4o';
		const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

		const timestamp = Date.now() / 1000;
		const upload_preset = 'i50l2x2r';
		const api_secret = 'S253wP6tc6hhr2G69DzzWdpi7Gw';
		const api_key = '986696942147982';

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

	render() {
		return (
			<div>
				<h1>Upload</h1>
				<Dropzone onDrop={this.uploadFile.bind(this)} />
			</div>
		);
	}
}

export default Image;
