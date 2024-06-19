const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true
    },
    submissionDate: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});

const feedbackCollection = mongoose.model('Feedback', feedbackSchema);
module.exports = feedbackCollection;
