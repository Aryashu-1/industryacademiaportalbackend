const ResearchPublication = require('../models/ResearchPublication');

// Create a new research publication
const createResearchPublication = async (req, res) => {
    try {
        const publication = await ResearchPublication.create(req.body);
        res.status(201).json(publication);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all research publications
const getAllResearchPublications = async (req, res) => {
    try {
        const publications = await ResearchPublication.find();
        res.status(200).json(publications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a research publication by ID
const getResearchPublicationById = async (req, res) => {
    try {
        const { id } = req.params;
        const publication = await ResearchPublication.findById(id);
        if (!publication) {
            return res.status(404).json({ error: 'Research publication not found' });
        }
        res.status(200).json(publication);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a research publication
const updateResearchPublication = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedPublication = await ResearchPublication.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedPublication) {
            return res.status(404).json({ error: 'Research publication not found' });
        }
        res.status(200).json(updatedPublication);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a research publication
const deleteResearchPublication = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPublication = await ResearchPublication.findByIdAndDelete(id);
        if (!deletedPublication) {
            return res.status(404).json({ error: 'Research publication not found' });
        }
        res.status(200).json({ message: 'Research publication deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createResearchPublication,
    getAllResearchPublications,
    getResearchPublicationById,
    updateResearchPublication,
    deleteResearchPublication
};
