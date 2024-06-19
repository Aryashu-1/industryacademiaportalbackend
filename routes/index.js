const express = require('express');
const router = express.Router();
const userSignUpController = require('../controllers/userSignUp');
const userSignInController=require('../controllers/userSignIn')
const authToken=require('../middlewares/authToken')
const userUpdateController=require('../controllers/userUpdate')

// Define the signup route
router.post('/signup', userSignUpController);
router.post('/signin', userSignInController);
router.put('/update', authToken, userUpdateController);

module.exports = router;
