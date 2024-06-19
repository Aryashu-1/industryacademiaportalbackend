const Company=require('../../collections/companycollection')

const updateCompany = async (req, res) => {
    const { id } = req.params;
    const { name, description, image } = req.body;

    try {
        await Company.findByIdAndUpdate(id, { name, description, image });
        res.json({ message: 'Company updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update company', error: error.message });
    }
};

module.exports = updateCompany;
