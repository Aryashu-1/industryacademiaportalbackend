const mongoose = require('mongoose');

const learningMaterialSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }, // e.g., "course", "lecture", "training"
    link: {
        type: String,
        required: true
    },
    uploadedDate: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});

const learningMaterialCollection = mongoose.model('LearningMaterial', learningMaterialSchema);
module.exports = learningMaterialCollection;
