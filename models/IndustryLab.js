// models/IndustryLab.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LabSchema = new Schema({
  srNo: Number,
  location: String,
  area: Number,
  assistant: String,
  incharge: String,
  cost: Number,
});

const IndustryLabSchema = new Schema({
  department: String,
  labs: [LabSchema],
});

module.exports = mongoose.model('IndustryLab', IndustryLabSchema);
