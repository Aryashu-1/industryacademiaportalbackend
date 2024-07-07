const CourseDesignedByExpert = require('../models/IndustryDesignedCourse');

// Create a new course designed by industry expert
const createCourseDesignedByExpert = async (req, res) => {
    try {
        const course = await CourseDesignedByExpert.create(req.body);
        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all courses designed by industry experts
const getAllCoursesDesignedByExpert = async (req, res) => {
    try {
        const courses = await CourseDesignedByExpert.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a course designed by industry expert by ID
const getCourseDesignedByExpertById = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await CourseDesignedByExpert.findById(id);
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a course designed by industry expert
const updateCourseDesignedByExpert = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCourse = await CourseDesignedByExpert.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedCourse) {
            return res.status(404).json({ error: 'Course not found' });
        }
        res.status(200).json(updatedCourse);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a course designed by industry expert
const deleteCourseDesignedByExpert = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCourse = await CourseDesignedByExpert.findByIdAndDelete(id);
        if (!deletedCourse) {
            return res.status(404).json({ error: 'Course not found' });
        }
        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createCourseDesignedByExpert,
    getAllCoursesDesignedByExpert,
    getCourseDesignedByExpertById,
    updateCourseDesignedByExpert,
    deleteCourseDesignedByExpert
};
