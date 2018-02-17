const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookSchema = new Schema({
  title: String,
  description: String,
});

module.exports = mongoose.model('books', BookSchema);
