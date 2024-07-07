const IndustrialVisit = require('../models/IndustrialVisit');

// Create a new industrial visit
const createIndustrialVisit = async (req, res) => {
    try {
        const visit = await IndustrialVisit.create(req.body);
        res.status(201).json(visit);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all industrial visits
const getAllIndustrialVisits = async (req, res) => {
    try {
        const visits = await IndustrialVisit.find();
        res.status(200).json(visits);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get an industrial visit by ID
const getIndustrialVisitById = async (req, res) => {
    try {
        const { id } = req.params;
        const visit = await IndustrialVisit.findById(id);
        if (!visit) {
            return res.status(404).json({ error: 'Industrial visit not found' });
        }
        res.status(200).json(visit);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update an industrial visit
const updateIndustrialVisit = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedVisit = await IndustrialVisit.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedVisit) {
            return res.status(404).json({ error: 'Industrial visit not found' });
        }
        res.status(200).json(updatedVisit);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete an industrial visit
const deleteIndustrialVisit = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedVisit = await IndustrialVisit.findByIdAndDelete(id);
        if (!deletedVisit) {
            return res.status(404).json({ error: 'Industrial visit not found' });
        }
        res.status(200).json({ message: 'Industrial visit deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createIndustrialVisit,
    getAllIndustrialVisits,
    getIndustrialVisitById,
    updateIndustrialVisit,
    deleteIndustrialVisit
};
