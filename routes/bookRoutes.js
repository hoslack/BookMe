const mongoose = require('mongoose');
const requireLogin = require('../middleWares/requireLogin');
const Book = mongoose.model('books');

module.exports = app => {
	app.post('api/addbook', requireLogin, (req, res) => {
		const { title, description, image } = req.body;

		const book = new Book({
			title,
			description,
			image,
			_user: req.user.id,
		});

		book.save();
	});
};
