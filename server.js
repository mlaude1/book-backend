// Dependencies
require("dotenv").config();
const express = require("express")
const app = express()
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const {PORT = 3001, DATABASE_URL} = process.env

////////////////////
// Database Connection
////////////////////
// Establish DB connection
mongoose.connect(DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})

// Connection events
mongoose.connection
.on("open", () => console.log("Connected to Mongo"))
.on("close", () => console.log("Disconnected from Mongo"))
.on("error", (err) => console.log(err))

////////////////////
// Bookmark Model
////////////////////
const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  description: String,
  coverImage: String,
  starRating: Number
})

const Book = mongoose.model("Book", BookSchema)

////////////////////
// MiddleWare
////////////////////
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("yo World")
})

// Index Route
app.get("/books", async (req, res) => {
  try {
      res.json(await Book.find({}));
  } catch (error) {
      res.status(400).json(error);
  }
});

// Create Route
app.post("/books", async (req, res) => {
  try {
      res.json(await Book.create(req.body));
  } catch (error) {
      res.status(400).json(error);
  }
});  

// Delete Route
app.delete("/books/:id", async (req, res) => {
  // get the id from params
  const id = req.params.id;
  // delete the book
  try {res.json(await Book.findByIdAndRemove(id));
  } catch (error) {
      res.status(400).json(error);
  }
});

// Update Route
app.put("/books/:id", async (req, res) => {
  // get the id from params
  const id = req.params.id;
  // update the book
  try {res.json(await Book.findByIdAndUpdate(id, req.body, {new: true}))
  } catch (error) {
      res.status(400).json(error);
  }
});

// Listener
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))