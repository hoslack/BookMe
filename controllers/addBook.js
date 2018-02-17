const Book = require('../models/Book');

module.exports = (req, res) => {
  const { title, description } = req.body;
  const book = new Book({
    title,
    description,
  });
  book
    .save()
    .then(books => {
      res.send('item saved to database');
    })
    .catch(err => {
      res.status(400).send('unable to send to database');
    });
};
