const CourseByExpert = require('../models/IndustryExpertCourse');

// Create a new course by industry expert
const createCourseByExpert = async (req, res) => {
    try {
        const course = await CourseByExpert.create(req.body);
        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all courses by industry experts
const getAllCoursesByExpert = async (req, res) => {
    try {
        const courses = await CourseByExpert.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a course by industry expert by ID
const getCourseByExpertById = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await CourseByExpert.findById(id);
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a course by industry expert
const updateCourseByExpert = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCourse = await CourseByExpert.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedCourse) {
            return res.status(404).json({ error: 'Course not found' });
        }
        res.status(200).json(updatedCourse);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a course by industry expert
const deleteCourseByExpert = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCourse = await CourseByExpert.findByIdAndDelete(id);
        if (!deletedCourse) {
            return res.status(404).json({ error: 'Course not found' });
        }
        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createCourseByExpert,
    getAllCoursesByExpert,
    getCourseByExpertById,
    updateCourseByExpert,
    deleteCourseByExpert
};
