const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CertificationCourseSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    courseName: {
        type: String,
        required: true
    },
    expert: {
        type: String,
        required: true
    },
    organization: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    img: {
        type: String,
        default: ""
    },
    popular: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('CertificationCourse', CertificationCourseSchema);
