const mongoose = require('mongoose');

const caseStudySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    participants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Participant'
    }],
    results: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});

const caseStudiesCollection = mongoose.model('CaseStudy', caseStudySchema);
module.exports = caseStudiesCollection;
