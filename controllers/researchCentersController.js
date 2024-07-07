const ResearchCenter = require('../models/ResearchCenter');

// Create a new research center
const createResearchCenter = async (req, res) => {
    try {
        const center = await ResearchCenter.create(req.body);
        res.status(201).json(center);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all research centers
const getAllResearchCenters = async (req, res) => {
    try {
        const centers = await ResearchCenter.find();
        res.status(200).json(centers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a research center by ID
const getResearchCenterById = async (req, res) => {
    try {
        const { id } = req.params;
        const center = await ResearchCenter.findById(id);
        if (!center) {
            return res.status(404).json({ error: 'Research center not found' });
        }
        res.status(200).json(center);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a research center
const updateResearchCenter = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCenter = await ResearchCenter.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedCenter) {
            return res.status(404).json({ error: 'Research center not found' });
        }
        res.status(200).json(updatedCenter);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a research center
const deleteResearchCenter = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCenter = await ResearchCenter.findByIdAndDelete(id);
        if (!deletedCenter) {
            return res.status(404).json({ error: 'Research center not found' });
        }
        res.status(200).json({ message: 'Research center deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createResearchCenter,
    getAllResearchCenters,
    getResearchCenterById,
    updateResearchCenter,
    deleteResearchCenter
};
