const express = require('express');
const router = express.Router();
const userSignUpController = require('../controllers/user/userSignUp');
const userSignInController=require('../controllers/user/userSignIn')
const authToken=require('../middlewares/authToken')
const userUpdateController=require('../controllers/user/userUpdate')
const generateResetTokenController = require('../controllers/user/generateResetTokenController');
const resetPasswordController = require('../controllers/user/resetTokenController');
const addAnnouncement=require('../controllers/announcements/addAnnouncements')
const updateAnnouncement=require('../controllers/announcements/updateannouncement')
const deleteAnnouncement=require('../controllers/announcements/deleteAnnouncement')
const addInstitution = require('../controllers/institution/addInstitution');
const updateInstitution = require('../controllers/institution/updateInstitution');
const deleteInstitution = require('../controllers/institution/deleteInstitution');
const addCompany = require('../controllers/company/addCompany');
const updateCompany = require('../controllers/company/updateCompany');
const deleteCompany = require('../controllers/company/deleteCompany');
const addProject = require('../controllers/project/addProject');
const updateProject = require('../controllers/project/updateProject');
const deleteProject = require('../controllers/project/deleteProject');
const basicSearch = require('../controllers/search/basicSearch');
const advancedSearch  = require('../controllers/search/advancedSearch');
const registerForEvent=require('../controllers/handleform/registerForEvent')
const submitProjectProposal = require('../controllers/handleform/submitProjectProposal');
const submitFeedback = require('../controllers/handleform/submitFeedback');
const addLearningMaterial = require('../controllers/resourceManagement/addResource');
const updateLearningMaterial = require('../controllers/resourceManagement/updateResource');

router.post('/signup', userSignUpController);
router.post('/signin', userSignInController);
router.put('/update', authToken, userUpdateController);
router.post('/forgot-password', generateResetTokenController);
router.post('/reset-password', resetPasswordController);


router.post('/addannouncements',addAnnouncement);
router.put('/updateannouncements/:id', authToken,updateAnnouncement);
router.delete('/deleteannouncements/:id', deleteAnnouncement);


router.post('/addinstitution', addInstitution);
router.put('/updateinstitution/:id',authToken, updateInstitution);
router.delete('/deleteinstitution/:id', deleteInstitution);


router.post('/addcompany', addCompany);
router.put('/updatecompany/:id', authToken,updateCompany);
router.delete('/deletecompany/:id', deleteCompany);

router.post('/addproject', addProject);
router.put('/updateproject/:id', updateProject);
router.delete('/deleteproject/:id', deleteProject);

router.get('/basicsearch', basicSearch);
router.get('/advancedsearch',advancedSearch);

router.post('/events/register', authToken, registerForEvent);
router.post('/submit-proposal', authToken, submitProjectProposal);
router.post('/feedback', authToken, submitFeedback);

router.post('/addlearning-materials', addLearningMaterial);
router.put('/learning-materials/:id', updateLearningMaterial);
module.exports = router;
