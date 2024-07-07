const CertificationCourse = require('../models/CertificationCourse');

// Create a new certification course
const createCertificationCourse = async (req, res) => {
    try {
        const course = await CertificationCourse.create(req.body);
        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all certification courses
const getAllCertificationCourses = async (req, res) => {
    try {
        const courses = await CertificationCourse.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a certification course by ID
const getCertificationCourseById = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await CertificationCourse.findById(id);
        if (!course) {
            return res.status(404).json({ error: 'Certification course not found' });
        }
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a certification course
const updateCertificationCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCourse = await CertificationCourse.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedCourse) {
            return res.status(404).json({ error: 'Certification course not found' });
        }
        res.status(200).json(updatedCourse);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a certification course
const deleteCertificationCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCourse = await CertificationCourse.findByIdAndDelete(id);
        if (!deletedCourse) {
            return res.status(404).json({ error: 'Certification course not found' });
        }
        res.status(200).json({ message: 'Certification course deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createCertificationCourse,
    getAllCertificationCourses,
    getCertificationCourseById,
    updateCertificationCourse,
    deleteCertificationCourse
};
