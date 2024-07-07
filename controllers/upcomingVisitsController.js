const UpcomingVisit = require('../models/UpcomingVisit');

// Create a new upcoming visit
const createUpcomingVisit = async (req, res) => {
    try {
        const visit = await UpcomingVisit.create(req.body);
        res.status(201).json(visit);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all upcoming visits
const getAllUpcomingVisits = async (req, res) => {
    try {
        const visits = await UpcomingVisit.find();
        res.status(200).json(visits);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get an upcoming visit by ID
const getUpcomingVisitById = async (req, res) => {
    try {
        const { id } = req.params;
        const visit = await UpcomingVisit.findById(id);
        if (!visit) {
            return res.status(404).json({ error: 'Upcoming visit not found' });
        }
        res.status(200).json(visit);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update an upcoming visit
const updateUpcomingVisit = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedVisit = await UpcomingVisit.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedVisit) {
            return res.status(404).json({ error: 'Upcoming visit not found' });
        }
        res.status(200).json(updatedVisit);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete an upcoming visit
const deleteUpcomingVisit = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedVisit = await UpcomingVisit.findByIdAndDelete(id);
        if (!deletedVisit) {
            return res.status(404).json({ error: 'Upcoming visit not found' });
        }
        res.status(200).json({ message: 'Upcoming visit deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createUpcomingVisit,
    getAllUpcomingVisits,
    getUpcomingVisitById,
    updateUpcomingVisit,
    deleteUpcomingVisit
};
