const IndustryLab = require('../models/IndustryLab');

// Create a new industry lab
const createIndustryLab = async (req, res) => {
    try {
        const lab = await IndustryLab.create(req.body);
        res.status(201).json(lab);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all industry labs
const getAllIndustryLabs = async (req, res) => {
    try {
        const labs = await IndustryLab.find();
        res.status(200).json(labs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get an industry lab by ID
const getIndustryLabById = async (req, res) => {
    try {
        const { id } = req.params;
        const lab = await IndustryLab.findById(id);
        if (!lab) {
            return res.status(404).json({ error: 'Industry lab not found' });
        }
        res.status(200).json(lab);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update an industry lab
const updateIndustryLab = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedLab = await IndustryLab.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedLab) {
            return res.status(404).json({ error: 'Industry lab not found' });
        }
        res.status(200).json(updatedLab);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete an industry lab
const deleteIndustryLab = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedLab = await IndustryLab.findByIdAndDelete(id);
        if (!deletedLab) {
            return res.status(404).json({ error: 'Industry lab not found' });
        }
        res.status(200).json({ message: 'Industry lab deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createIndustryLab,
    getAllIndustryLabs,
    getIndustryLabById,
    updateIndustryLab,
    deleteIndustryLab
};
