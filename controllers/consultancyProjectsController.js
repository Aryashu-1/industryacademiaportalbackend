const ConsultancyProject = require('../models/ConsultancyProject');

// Create a new consultancy project
const createConsultancyProject = async (req, res) => {
    try {
        const project = await ConsultancyProject.create(req.body);
        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all consultancy projects
const getAllConsultancyProjects = async (req, res) => {
    try {
        const projects = await ConsultancyProject.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a consultancy project by ID
const getConsultancyProjectById = async (req, res) => {
    try {
        const { id } = req.params;
        const project = await ConsultancyProject.findById(id);
        if (!project) {
            return res.status(404).json({ error: 'Consultancy project not found' });
        }
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a consultancy project
const updateConsultancyProject = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProject = await ConsultancyProject.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedProject) {
            return res.status(404).json({ error: 'Consultancy project not found' });
        }
        res.status(200).json(updatedProject);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a consultancy project
const deleteConsultancyProject = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProject = await ConsultancyProject.findByIdAndDelete(id);
        if (!deletedProject) {
            return res.status(404).json({ error: 'Consultancy project not found' });
        }
        res.status(200).json({ message: 'Consultancy project deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createConsultancyProject,
    getAllConsultancyProjects,
    getConsultancyProjectById,
    updateConsultancyProject,
    deleteConsultancyProject
};
