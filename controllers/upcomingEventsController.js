const UpcomingEvent = require('../models/UpcomingEvent');

// Create a new upcoming event
const createUpcomingEvent = async (req, res) => {
    try {
        const event = await UpcomingEvent.create(req.body);
        res.status(201).json(event);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all upcoming events
const getAllUpcomingEvents = async (req, res) => {
    try {
        const events = await UpcomingEvent.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get an upcoming event by ID
const getUpcomingEventById = async (req, res) => {
    try {
        const { id } = req.params;
        const event = await UpcomingEvent.findById(id);
        if (!event) {
            return res.status(404).json({ error: 'Upcoming event not found' });
        }
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update an upcoming event
const updateUpcomingEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedEvent = await UpcomingEvent.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedEvent) {
            return res.status(404).json({ error: 'Upcoming event not found' });
        }
        res.status(200).json(updatedEvent);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete an upcoming event
const deleteUpcomingEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedEvent = await UpcomingEvent.findByIdAndDelete(id);
        if (!deletedEvent) {
            return res.status(404).json({ error: 'Upcoming event not found' });
        }
        res.status(200).json({ message: 'Upcoming event deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createUpcomingEvent,
    getAllUpcomingEvents,
    getUpcomingEventById,
    updateUpcomingEvent,
    deleteUpcomingEvent
};
