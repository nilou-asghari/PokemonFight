const express = require("express");
const cors = require("cors");
const app = express();
// const connectDB = require("./dbinit");
// const pokemon = require("./routes/PokemonRoute");
require("dotenv").config();
require("colors");

// connectDB();

const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(cors);
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
