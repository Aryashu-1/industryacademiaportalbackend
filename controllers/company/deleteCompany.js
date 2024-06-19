const Company=require('../../collections/companycollection')

const deleteCompany = async (req, res) => {
    const { id } = req.params;

    try {
        await Company.findByIdAndDelete(id);
        res.json({ message: 'Company deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete company', error: error.message });
    }
};

module.exports = deleteCompany;
