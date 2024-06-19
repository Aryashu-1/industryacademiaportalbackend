const mongoose = require('mongoose');

const institutionSchema = new mongoose.Schema({
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
    researchFacilities: [{
        type: String
    }],
    ongoingProjects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    }]
}, {
    timestamps: true
});

const institutionCollection = mongoose.model('Institution', institutionSchema);
module.exports = institutionCollection;
