const Project=require('../../collections/projectcollection')

const addProject = async (req, res) => {
    const { title, description, type, partners, status, startDate, endDate } = req.body;
    const newProject = new Project({ title, description, type, partners, status, startDate, endDate });
    
    try {
        await newProject.save();
        res.status(201).json({ message: 'Project added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to add project', error: error.message });
    }
};

module.exports = addProject;
