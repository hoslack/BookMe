const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookSchema = new Schema({
	title: String,
	description: String,
	image: String,
	_user: { type: Schema.Types.ObjectId, ref: 'User' },
});

mongoose.model('books', BookSchema);
