const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    registrations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Registration'
    }]
}, {
    timestamps: true
});

const registrationCollection = mongoose.model('Registration', registrationSchema);
module.exports = registrationCollection;
