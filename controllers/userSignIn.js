const bcrypt = require('bcryptjs');
const userModel = require('../collections/usercollectionmodel');
const jwt = require('jsonwebtoken');

async function userSignInController(req, res) {
  console.log(req.body);
  try {
    const { email, password } = req.body;

    if (!email) {
      throw new Error('Please Provide the Email');
    }
    if (!password) {
      throw new Error('Please Provide the Password');
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      throw new Error('User Not Found');
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    console.log(checkPassword);

    if (checkPassword) {
      // Password is correct
      const tokenData = {
        _id: user.id,
        email: user.email
      };
      const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: 60 * 60 * 8 });
      const tokenOption = {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Set to true in production
        sameSite: 'strict',
        maxAge: 8 * 60 * 60 * 1000 // 8 hours
      };

      // Send the token in response and set it as a cookie
      res.cookie("token", token, tokenOption).send({ message: 'User authenticated successfully', data: token, success: true });
    } else {
      throw new Error('Incorrect Password');
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
}

module.exports = userSignInController;
