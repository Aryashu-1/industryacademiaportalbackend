const Announcement = require('../../collections/accouncementcollection'); // Adjust path as per your project structure

const updateAnnouncement = async (req, res) => {
    const { id } = req.params;
    const { title, content, date } = req.body;

    try {
        const updatedAnnouncement = await Announcement.findByIdAndUpdate(
            id,
            { title, content, date },
            { new: true } // Return updated document
        );

        if (!updatedAnnouncement) {
            return res.status(404).json({ message: 'Announcement not found' });
        }

        res.json({ message: 'Announcement updated successfully', announcement: updatedAnnouncement });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update announcement', error: error.message });
    }
};

module.exports = updateAnnouncement;
