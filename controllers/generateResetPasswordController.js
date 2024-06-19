const crypto = require('crypto');
const userModel = require('../collections/usercollectionmodel');
const nodemailer = require('nodemailer');

async function generateResetTokenController(req, res) {
  try {
    const { email } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).send({ message: 'User not found', success: false });
    }

    // Generate a token
    const token = crypto.randomBytes(20).toString('hex');
    const tokenExpiration = Date.now() + 3600000; // 1 hour

    // Update user with the token and expiration
    user.resetPasswordToken = token;
    user.resetPasswordExpires = tokenExpiration;
    await user.save();

    // Send email with token (replace with your own email configuration)
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    const mailOptions = {
      to: user.email,
      from: process.env.EMAIL,
      subject: 'Password Reset',
      text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
      Please click on the following link, or paste this into your browser to complete the process:\n\n
      http://${req.headers.host}/reset/${token}\n\n
      If you did not request this, please ignore this email and your password will remain unchanged.\n`
    };

    await transporter.sendMail(mailOptions);

    res.send({ message: 'Reset link sent to email', success: true });

  } catch (err) {
    res.status(500).send({ message: err.message, success: false });
  }
}

module.exports = generateResetTokenController;
