// models/ResearchCenter.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResearchCenterSchema = new Schema({
  centerName: String,
  advisors: String,
  focus: String,
  locationUrl: String,
  address: String,
});

module.exports = mongoose.model('ResearchCenter', ResearchCenterSchema);
