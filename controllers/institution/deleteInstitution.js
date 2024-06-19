const Institution = require('../../collections/institutioncollection'); // Adjust path as per your project structure

const deleteInstitution = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedInstitution = await Institution.findByIdAndDelete(id);

        if (!deletedInstitution) {
            return res.status(404).json({ message: 'Institution not found' });
        }

        res.json({ message: 'Institution deleted successfully', institution: deletedInstitution });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete institution', error: error.message });
    }
};

module.exports = deleteInstitution;
