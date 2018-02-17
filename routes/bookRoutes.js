const requireLogin = require('../middleWares/requireLogin');
const addBook = require('../controllers/addBook');
const router = require('express').Router();

router.post('/addbook', requireLogin, addBook);

router.get('/api/books', (req, res) => {
	Book.find()
		.then(books => {
			res.send(books);
		})
		.catch(err => {
			res.status(400).send('unable to read from database');
		});
});

module.exports = router;
