const Announcement = require('../../collections/accouncementcollection');
const Institution = require('../../collections/institutioncollection');
const Company = require('../../collections/companycollection');
const Project = require('../../collections/projectcollection');

const advancedSearch = async (req, res) => {
    const { type, filter, sort } = req.query;
    let results = [];

    try {
        let filterObj = {};
        if (filter) {
            filterObj = JSON.parse(filter); // Parse the filter string into an object
        }

        switch (type) {
            case 'announcements':
                results = await Announcement.find(filterObj).sort(sort);
                break;
            case 'institutions':
                results = await Institution.find(filterObj).sort(sort);
                break;
            case 'companies':
                results = await Company.find(filterObj).sort(sort);
                break;
            case 'projects':
                results = await Project.find(filterObj).sort(sort);
                break;
            default:
                results = [];
        }

        console.log(`Search Results for type '${type}' with filter:`, filterObj);
        console.log('Found results:', results);

        res.json({ results });
    } catch (error) {
        console.error('Error performing advanced search:', error);
        res.status(500).json({ message: 'Failed to perform advanced search', error: error.message });
    }
};

module.exports = advancedSearch ;