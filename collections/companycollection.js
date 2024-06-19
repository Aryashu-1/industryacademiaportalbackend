const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    jobOpportunities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'JobOpportunity'
    }],
    collaborativeProjects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    }]
}, {
    timestamps: true
});

const companyCollection = mongoose.model('Company', companySchema);
module.exports = companyCollection;
