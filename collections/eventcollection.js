const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
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

const eventCollection = mongoose.model('Event', eventSchema);
module.exports = eventCollection;
