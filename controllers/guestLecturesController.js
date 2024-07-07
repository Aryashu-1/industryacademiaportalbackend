const GuestLecture = require('../models/GuestLecture');

// Create a new guest lecture
const createGuestLecture = async (req, res) => {
    try {
        const lecture = await GuestLecture.create(req.body);
        res.status(201).json(lecture);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all guest lectures
const getAllGuestLectures = async (req, res) => {
    try {
        const lectures = await GuestLecture.find();
        res.status(200).json(lectures);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a guest lecture by ID
const getGuestLectureById = async (req, res) => {
    try {
        const { id } = req.params;
        const lecture = await GuestLecture.findById(id);
        if (!lecture) {
            return res.status(404).json({ error: 'Guest lecture not found' });
        }
        res.status(200).json(lecture);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a guest lecture
const updateGuestLecture = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedLecture = await GuestLecture.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedLecture) {
            return res.status(404).json({ error: 'Guest lecture not found' });
        }
        res.status(200).json(updatedLecture);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a guest lecture
const deleteGuestLecture = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedLecture = await GuestLecture.findByIdAndDelete(id);
        if (!deletedLecture) {
            return res.status(404).json({ error: 'Guest lecture not found' });
        }
        res.status(200).json({ message: 'Guest lecture deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createGuestLecture,
    getAllGuestLectures,
    getGuestLectureById,
    updateGuestLecture,
    deleteGuestLecture
};
