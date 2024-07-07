const CollaboratedProject = require('../models/CollaboratedProject');

// Create a new collaborated project
const createCollaboratedProject = async (req, res) => {
    try {
        const project = await CollaboratedProject.create(req.body);
        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all collaborated projects
const getAllCollaboratedProjects = async (req, res) => {
    try {
        const projects = await CollaboratedProject.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a collaborated project by ID
const getCollaboratedProjectById = async (req, res) => {
    try {
        const { id } = req.params;
        const project = await CollaboratedProject.findById(id);
        if (!project) {
            return res.status(404).json({ error: 'Collaborated project not found' });
        }
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a collaborated project
const updateCollaboratedProject = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProject = await CollaboratedProject.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedProject) {
            return res.status(404).json({ error: 'Collaborated project not found' });
        }
        res.status(200).json(updatedProject);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a collaborated project
const deleteCollaboratedProject = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProject = await CollaboratedProject.findByIdAndDelete(id);
        if (!deletedProject) {
            return res.status(404).json({ error: 'Collaborated project not found' });
        }
        res.status(200).json({ message: 'Collaborated project deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createCollaboratedProject,
    getAllCollaboratedProjects,
    getCollaboratedProjectById,
    updateCollaboratedProject,
    deleteCollaboratedProject
};
