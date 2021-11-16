// Dependencies
require("dotenv").config();
const express = require("express")
const app = express()
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const {PORT = 3001, DATABASE_URL} = process.env

app.get("/", (req, res) => {
  res.send("yo World")
})

// Listener
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))