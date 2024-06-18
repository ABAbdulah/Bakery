const mongoose = require("mongoose");
// Define a schema and model for form data
const formSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  message: String,
});

module.exports = mongoose.model("form", formSchema);
