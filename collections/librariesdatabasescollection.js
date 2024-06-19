const mongoose = require('mongoose');

const librariesDatabasesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const librariesDatabasesCollection = mongoose.model('LibrariesDatabases', librariesDatabasesSchema);
module.exports = librariesDatabasesCollection;
