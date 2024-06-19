const Institution = require('../../collections/institutioncollection'); // Adjust path as per your project structure

const addInstitution = async (req, res) => {
    const { name, description, image, researchFacilities } = req.body;
    const newInstitution = new Institution({ name, description, image, researchFacilities, ongoingProjects: [] });
    
    try {
        await newInstitution.save();
        res.status(201).json({ message: 'Institution added successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = addInstitution;
