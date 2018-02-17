const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String,
  username: String,
  avatar: String,
});

module.exports = mongoose.model('users', userSchema);
