// models/Internship.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InternshipSchema = new Schema({
  companyName: String,
  duration: String,
  role: String,
  description: String,
  location: String,
  workFromHome: Boolean,
  stipend: String,
  url: String,
  fullTime: Boolean,
  companyLogo: String,
  category: String,
});

module.exports = mongoose.model('Internship', InternshipSchema);
