const bcrypt = require('bcryptjs');
const userModel = require('../collections/usercollectionmodel');

async function resetPasswordController(req, res) {
  try {
    const { token, newPassword } = req.body;

    const user = await userModel.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).send({ message: 'Password reset token is invalid or has expired', success: false });
    }

    // Hash the new password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update user password and clear reset token and expiration
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.send({ message: 'Password has been reset', success: true });

  } catch (err) {
    res.status(500).send({ message: err.message, success: false });
  }
}

module.exports = resetPasswordController;
