const userCollection = require('../../collections/usercollectionmodel');

async function userUpdateController(req, res) {
  try {
    const userId = req.userId; // assuming `req.userId` is set by an authentication middleware
    const updateData = req.body;

    // Find the user by ID and update their attributes
    const updatedUser = await userCollection.findByIdAndUpdate(userId, updateData, { new: true });

    if (!updatedUser) {
      return res.status(404).send({ message: 'User not found', success: false });
    }

    res.send({ message: 'User updated successfully', data: updatedUser, success: true });
  } catch (err) {
    res.status(400).send({ message: err.message, success: false });
  }
}

module.exports = userUpdateController;
