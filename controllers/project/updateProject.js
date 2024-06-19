const Project=require('../../collections/projectcollection')

const updateProject = async (req, res) => {
    const { id } = req.params;
    const { title, description, type, partners, status, startDate, endDate } = req.body;

    try {
        await Project.findByIdAndUpdate(id, { title, description, type, partners, status, startDate, endDate });
        res.json({ message: 'Project updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update project', error: error.message });
    }
};

module.exports = updateProject;
