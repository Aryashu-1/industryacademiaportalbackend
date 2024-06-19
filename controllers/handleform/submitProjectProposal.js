const ProjectProposal = require('../../collections/projectproposalcollection'); // Adjust the path as per your project structure

const submitProjectProposal = async (req, res) => {
    const { title, description } = req.body;
    
    try {
        const newProposal = new ProjectProposal({
            title,
            description,
            submittedBy: req.user.userId,
            submissionDate: new Date(),
            status: 'pending'
        });

        await newProposal.save();
        res.status(201).json({ message: 'Project proposal submitted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to submit project proposal', error: error.message });
    }
};

module.exports = submitProjectProposal;
