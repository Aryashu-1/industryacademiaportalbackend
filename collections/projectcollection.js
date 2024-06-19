const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }, // e.g., "academic" or "industry"
    partners: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Partner'
    }],
    status: {
        type: String,
        required: true
    }, // e.g., "ongoing" or "completed"
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date
    }
}, {
    timestamps: true
});

const projectCollection = mongoose.model('Project', projectSchema);
module.exports = projectCollection;
