const Startup = require('../models/Startup');

// Create a new startup
const createStartup = async (req, res) => {
    try {
        const startup = await Startup.create(req.body);
        res.status(201).json(startup);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all startups
const getAllStartups = async (req, res) => {
    try {
        const startups = await Startup.find();
        res.status(200).json(startups);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a startup by ID
const getStartupById = async (req, res) => {
    try {
        const { id } = req.params;
        const startup = await Startup.findById(id);
        if (!startup) {
            return res.status(404).json({ error: 'Startup not found' });
        }
        res.status(200).json(startup);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a startup
const updateStartup = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedStartup = await Startup.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedStartup) {
            return res.status(404).json({ error: 'Startup not found' });
        }
        res.status(200).json(updatedStartup);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a startup
const deleteStartup = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedStartup = await Startup.findByIdAndDelete(id);
        if (!deletedStartup) {
            return res.status(404).json({ error: 'Startup not found' });
        }
        res.status(200).json({ message: 'Startup deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createStartup,
    getAllStartups,
    getStartupById,
    updateStartup,
    deleteStartup
};
