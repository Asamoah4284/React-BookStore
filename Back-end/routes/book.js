const express = require("express");
// const { data } = require("autoprefixer");
const {
  createBook,
  getBooks,
  getBook,
  deleteBook,
  updateBook,
} = require("../controllers/bookController");

const router = express.Router();

// GET all books
router.get("/", getBooks);

// Get a single book
// Post a new book
router.post("/", createBook);

router.get("/:id", getBook);
// Delete a  book
router.delete("/:id", deleteBook);
// UPDATE a workout
router.patch("/:id", updateBook);

module.exports = router;
