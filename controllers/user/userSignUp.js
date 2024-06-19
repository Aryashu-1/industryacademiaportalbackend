const userCollection = require('../../collections/usercollectionmodel');
const bcrypt = require('bcryptjs');

async function createUser(userData) {
  const { name, email, password, role } = userData;

  // Check if user with the provided email already exists
  const existingUser = await userCollection.findOne({ email });
  if (existingUser) {
    throw new Error('User with this email already exists');
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user document
  const newUser = new userCollection({
    name,
    email,
    password: hashedPassword,
    role: role || 'user', // Assign a default role if not provided
    profile: {
      bio: '',
      interests: [],
      activityHistory: []
    }
  });

  // Save the user to the database
  return await newUser.save();
}

async function userSignUpController(req, res) {
  try {
    const { name, email, password, role } = req.body;

    // Validate user input
    if (!name || !email || !password) {
      throw new Error('Please provide name, email, and password');
    }

    // Create the user
    const createdUser = await createUser({ name, email, password, role });

    res.status(201).json({ message: 'User created successfully', user: createdUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = userSignUpController;
