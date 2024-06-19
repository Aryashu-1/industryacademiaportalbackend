const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
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

const testimonialCollection = mongoose.model('Testimonial', testimonialSchema);
module.exports = testimonialCollection;
