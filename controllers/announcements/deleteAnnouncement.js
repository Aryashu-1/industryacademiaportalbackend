const Announcement = require('../../collections/accouncementcollection'); // Adjust path as per your project structure

const deleteAnnouncement = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedAnnouncement = await Announcement.findByIdAndDelete(id);

        if (!deletedAnnouncement) {
            return res.status(404).json({ message: 'Announcement not found' });
        }

        res.json({ message: 'Announcement deleted successfully', announcement: deletedAnnouncement });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete announcement', error: error.message });
    }
};

module.exports = deleteAnnouncement;
