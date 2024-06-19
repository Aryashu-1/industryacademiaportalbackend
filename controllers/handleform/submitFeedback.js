const Feedback = require('../../collections/feedbackCollection'); // Adjust the path as per your project structure

const submitFeedback = async (req, res) => {
    const { feedback } = req.body;

    try {
        const newFeedback = new Feedback({
            userId: req.user.userId, // Use req.user.userId set by authToken middleware
            content: feedback,
            submissionDate: new Date()
        });
        await newFeedback.save();
        res.status(201).json({ message: 'Feedback submitted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to submit feedback', error: error.message });
    }
};

module.exports = submitFeedback;
