// models/MOU.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
  year: Number,
  activity: String,
});

const MOUSchema = new Schema({
  sNo: Number,
  organization: String,
  address: String,
  url: String,
  validity: String,
  duration: String,
  activities: [ActivitySchema],
});

module.exports = mongoose.model('MOU', MOUSchema);
