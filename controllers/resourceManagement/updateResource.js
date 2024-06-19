const LearningMaterial = require('../../collections/learningmaterialcollection'); // Adjust the path as per your project structure



const updateLearningMaterial = async (req, res) => {
    const { id } = req.params;
    const { title, type, link } = req.body;

    try {
        const updatedMaterial = await LearningMaterial.findByIdAndUpdate(
            id,
            { title, type, link },
            { new: true } // Return the updated document
        );

        if (!updatedMaterial) {
            return res.status(404).json({ message: 'Learning material not found' });
        }

        res.json({ message: 'Learning material updated successfully', material: updatedMaterial });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update learning material', error: error.message });
    }
};

module.exports = updateLearningMaterial;
