const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookSchema = new Schema({
	title: String,
	description: String,
});

mongoose.model('books', BookSchema);
