const Project=require('../../collections/projectcollection')

const deleteProject = async (req, res) => {
    const { id } = req.params;

    try {
        await Project.findByIdAndDelete(id);
        res.json({ message: 'Project deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete project', error: error.message });
    }
};

module.exports = deleteProject;
