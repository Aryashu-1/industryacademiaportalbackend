const LearningMaterial = require('../../collections/learningmaterialcollection'); // Adjust the path as per your project structure

const addLearningMaterial = async (req, res) => {
    const { title, type, link } = req.body;

    try {
        const newMaterial = new LearningMaterial({
            title,
            type,
            link,
            uploadedDate: new Date()
        });
        await newMaterial.save();
        res.status(201).json({ message: 'Learning material added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to add learning material', error: error.message });
    }
};

module.exports = addLearningMaterial;
