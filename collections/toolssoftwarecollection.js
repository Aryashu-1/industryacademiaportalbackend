const mongoose = require('mongoose');

const toolsSoftwareSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    downloadLink: {
        type: String,
        required: true
    },
    version: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});

const toolsSoftwareCollection = mongoose.model('ToolsSoftware', toolsSoftwareSchema);
module.exports = toolsSoftwareCollection;
