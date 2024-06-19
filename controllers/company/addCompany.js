const Company=require('../../collections/companycollection')


const addCompany = async (req, res) => {
    const { name, description, image } = req.body;
    const newCompany = new Company({ name, description, image, jobOpportunities: [], collaborativeProjects: [] });
    
    try {
        await newCompany.save();
        res.status(201).json({ message: 'Company added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to add company', error: error.message });
    }
};

module.exports = addCompany;
