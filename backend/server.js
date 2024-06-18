/**
 * login details for MongoDB Atlas
 * username: Bakery
 * password: admin1234
 */

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const form = require("./models/ContactUsSchema.js");

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://Bakery:admin1234@divlynx.zljkrcc.mongodb.net/?retryWrites=true&w=majority&appName=divlynx",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

let submissions = [];
// Define a route to handle form submissions
app.post("/submit", (req, res) => {
  const formData = new form(req.body);
  formData
    .save()
    .then(() => res.status(200).send("Form data saved successfully"))
    .catch((error) => res.status(400).send("Error saving form data: " + error));
});
app.get("/submissions", (req, res) => {
  form
    .find()
    .then((form) => res.json(form))
    .catch((err) => res.json(err));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
