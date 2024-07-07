const MOU = require('../models/MOU');

// Create a new MOU
const createMOU = async (req, res) => {
    try {
        const mou = await MOU.create(req.body);
        res.status(201).json(mou);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all MOUs
const getAllMOUs = async (req, res) => {
    try {
        const mous = await MOU.find();
        res.status(200).json(mous);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get an MOU by ID
const getMOUById = async (req, res) => {
    try {
        const { id } = req.params;
        const mou = await MOU.findById(id);
        if (!mou) {
            return res.status(404).json({ error: 'MOU not found' });
        }
        res.status(200).json(mou);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update an MOU
const updateMOU = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedMOU = await MOU.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedMOU) {
            return res.status(404).json({ error: 'MOU not found' });
        }
        res.status(200).json(updatedMOU);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete an MOU
const deleteMOU = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedMOU = await MOU.findByIdAndDelete(id);
        if (!deletedMOU) {
            return res.status(404).json({ error: 'MOU not found' });
        }
        res.status(200).json({ message: 'MOU deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createMOU,
    getAllMOUs,
    getMOUById,
    updateMOU,
    deleteMOU
};
