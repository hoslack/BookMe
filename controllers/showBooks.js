const Book = require('../models/Book');

module.exports = (req, res) => {
  Book.find()
    .then(books => {
      res.send(books);
    })
    .catch(err => {
      res.status(400).send('unable to read from database');
    });
};
