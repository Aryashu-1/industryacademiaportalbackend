const Institution = require('../../collections/institutioncollection'); // Adjust path as per your project structure

const updateInstitution = async (req, res) => {
    const { id } = req.params;
    const { name, description, image, researchFacilities } = req.body;

    try {
        const updatedInstitution = await Institution.findByIdAndUpdate(
            id,
            { name, description, image, researchFacilities },
            { new: true } // Return updated document
        );

        if (!updatedInstitution) {
            return res.status(404).json({ message: 'Institution not found' });
        }

        res.json({ message: 'Institution updated successfully', institution: updatedInstitution });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update institution', error: error.message });
    }
};

module.exports = updateInstitution;
