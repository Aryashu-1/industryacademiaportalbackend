const Announcement = require('../../collections/accouncementcollection');
const Institution = require('../../collections/institutioncollection');
const Company = require('../../collections/companycollection');
const Project = require('../../collections/projectcollection');



const basicSearch = async (req, res) => {
    const { query } = req.query;

    try {
        const results = await Promise.all([
            Announcement.find({ title: new RegExp(query, 'i') }),
            Institution.find({ name: new RegExp(query, 'i') }),
            Company.find({ name: new RegExp(query, 'i') }),
            Project.find({ title: new RegExp(query, 'i') }),
        ]);

        res.json({ results });
    } catch (error) {
        res.status(500).json({ message: 'Failed to perform search', error: error.message });
    }
};

module.exports = basicSearch;
