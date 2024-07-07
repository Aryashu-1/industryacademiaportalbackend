const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CollaboratedProjectSchema = new Schema({
    projectName: {
        type: String,
        required: true
    },
    client: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    projectUrl: {
        type: String,
        required: true
    },
    popular: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('CollaboratedProject', CollaboratedProjectSchema);
