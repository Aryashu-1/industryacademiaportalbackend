const Internship = require('../models/Internship');

// Create a new internship
const createInternship = async (req, res) => {
    try {
        const internship = await Internship.create(req.body);
        res.status(201).json(internship);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all internships
const getAllInternships = async (req, res) => {
    try {
        const internships = await Internship.find();
        res.status(200).json(internships);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get an internship by ID
const getInternshipById = async (req, res) => {
    try {
        const { id } = req.params;
        const internship = await Internship.findById(id);
        if (!internship) {
            return res.status(404).json({ error: 'Internship not found' });
        }
        res.status(200).json(internship);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update an internship
const updateInternship = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedInternship = await Internship.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedInternship) {
            return res.status(404).json({ error: 'Internship not found' });
        }
        res.status(200).json(updatedInternship);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete an internship
const deleteInternship = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedInternship = await Internship.findByIdAndDelete(id);
        if (!deletedInternship) {
            return res.status(404).json({ error: 'Internship not found' });
        }
        res.status(200).json({ message: 'Internship deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createInternship,
    getAllInternships,
    getInternshipById,
    updateInternship,
    deleteInternship
};
