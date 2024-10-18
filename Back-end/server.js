require("dotenv").config();
const express = require("express");
const bookRoutes = require("./routes/book");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// PORT = 3000;
// routes
app.use("/api/books", bookRoutes);

// connect to db
mongoose
  .connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, function () {
      console.log("Database && Connected Server is running on port 4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// const port = 3000;
