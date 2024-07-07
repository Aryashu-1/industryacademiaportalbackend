// models/ResearchPublication.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResearchPublicationSchema = new Schema({
  title: String,
  authors: String,
  publication: String,
  date: String,
});

module.exports = mongoose.model('ResearchPublication', ResearchPublicationSchema);
