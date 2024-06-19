const Registration = require('../../collections/registrationcollection');


const registerForEvent = async (req, res) => {
    const { eventId } = req.body;

    try {
        const newRegistration = new Registration({
            eventId,
            userId: req.user.userId, // Use req.user.userId set by authToken middleware
            registrationDate: new Date()
        });
        await newRegistration.save();
        res.status(201).json({ message: 'Registered for event successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to register for event', error: error.message });
    }
};

module.exports = registerForEvent;
