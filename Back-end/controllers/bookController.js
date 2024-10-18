const Book = require("./../models/booksModule");
const mongoose = require("mongoose");

// get all book
const getBooks = async function (req, res) {
  const books = await Book.find({}).sort({ createedAt: -1 });
  res.status(200).json(books);
};

// get a single book
const getBook = async function (req, res) {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "Invalid book id" });
  }
  const book = await Book.findById(id);
  if (!book) {
    return res.status(404).json({ message: "book not found" });
  }
  res.status(200).json(book);
};
// create a new book
const createBook = async function (req, res) {
  const { title, author, year, image } = req.body;
  try {
    const newBook = await Book.create({ title, author, year, image });
    res.status(200).json(newBook);
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// delete a book
const deleteBook = async function (req, res) {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Book" });
  }
  const book = await Book.findOneAndDelete({ _id: id });
  if (!book) {
    return res.status(404).json({ message: "book not found" });
  }
  res.status(200).json(book);
};

// update a book
const updateBook = async function (req, res) {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Book" });
  }
  const book = await Book.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!book) {
    return res.status(404).json({ message: "book not found" });
  }
  res.status(200).json(book);
};
module.exports = {
  createBook,
  getBooks,
  getBook,
  deleteBook,
  updateBook,
};
