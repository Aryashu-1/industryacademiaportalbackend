// models/IndustrialVisit.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IndustrialVisitSchema = new Schema({
  companyName: String,
  date: String,
  description: String,
  companyLocation: String,
  images: [String],
});

module.exports = mongoose.model('IndustrialVisit', IndustrialVisitSchema);
