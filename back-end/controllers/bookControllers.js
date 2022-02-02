const { bookModel } = require("../models");

const addBook = async (req, res, next) => {
  try {
    let results = await bookModel.postBook(req.body, req.user_id);
    if (!results) throw new Error("FAILURE");
    res.status(201).send("Book added.");
  } catch (err) {
    next(err);
  }
};

const allUserBooks = async (req, res, next) => {
  try {
    const results = await bookModel.getAllBooks(req.user_id);
    if (!results) throw new Error("NO_RECORD_FOUND");
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
};

const removeBook = async (req, res, next) => {
  const id = req.params.id;
  try {
    const results = await bookModel.deleteBook(id);
    if (!results) throw new Error("FAILURE");
    res.status(200).send("Book deleted.");
  } catch (err) {
    next(err);
  }
};

const booksById = async (req, res, next) => {
  try {
    const results = await bookModel.getBookById(req.params.bookId);
    if (!results) throw new Error("NO_RECORD_FOUND");
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
};

module.exports = { addBook, booksById, removeBook, allUserBooks };
