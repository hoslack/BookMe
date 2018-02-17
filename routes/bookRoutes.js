const requireLogin = require('../middleWares/requireLogin');
const addBook = require('../controllers/addBook');
const showBooks = require('../controllers/showBooks');
const router = require('express').Router();

router.post('/addbook', requireLogin, addBook);

router.get('/books', showBooks);

module.exports = router;
