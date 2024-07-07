const express = require('express');
const router = express.Router();

// Import controllers
const {
    createIndustryLab,
    getAllIndustryLabs,
    getIndustryLabById,
    updateIndustryLab,
    deleteIndustryLab
} = require('./controllers/industryLabsController');

const {
    createCertificationCourse,
    getAllCertificationCourses,
    getCertificationCourseById,
    updateCertificationCourse,
    deleteCertificationCourse
} = require('./controllers/certificationCoursesController');

const {
    createGuestLecture,
    getAllGuestLectures,
    getGuestLectureById,
    updateGuestLecture,
    deleteGuestLecture
} = require('./controllers/guestLecturesController');

const {
    createUpcomingEvent,
    getAllUpcomingEvents,
    getUpcomingEventById,
    updateUpcomingEvent,
    deleteUpcomingEvent
} = require('./controllers/upcomingEventsController');

const {
    createStartup,
    getAllStartups,
    getStartupById,
    updateStartup,
    deleteStartup
} = require('./controllers/startupsController');

const {
    createResearchPublication,
    getAllResearchPublications,
    getResearchPublicationById,
    updateResearchPublication,
    deleteResearchPublication
} = require('./controllers/researchPublicationsController');

const {
    createResearchCenter,
    getAllResearchCenters,
    getResearchCenterById,
    updateResearchCenter,
    deleteResearchCenter
} = require('./controllers/researchCentersController');

const {
    createConsultancyProject,
    getAllConsultancyProjects,
    getConsultancyProjectById,
    updateConsultancyProject,
    deleteConsultancyProject
} = require('./controllers/consultancyProjectsController');

const {
    createIndustrialVisit,
    getAllIndustrialVisits,
    getIndustrialVisitById,
    updateIndustrialVisit,
    deleteIndustrialVisit
} = require('./controllers/industrialVisitsController');

const {
    createUpcomingVisit,
    getAllUpcomingVisits,
    getUpcomingVisitById,
    updateUpcomingVisit,
    deleteUpcomingVisit
} = require('./controllers/upcomingVisitsController');

const {
    createCollaboratedProject,
    getAllCollaboratedProjects,
    getCollaboratedProjectById,
    updateCollaboratedProject,
    deleteCollaboratedProject
} = require('./controllers/collaboratedProjectsController');
// Import controllers
const internshipController = require('./controllers/internshipController');
const mouController = require('./controllers/mouController');
const courseDesignedByExpertController = require('./controllers/courseDesignedByExpertController');
const courseByExpertController = require('./controllers/courseByExpertController');
const certificationCoursesController = require('./controllers/certificationCoursesController');

// Internships routes
router.post('/internships', internshipController.createInternship);
router.get('/internships', internshipController.getAllInternships);
router.get('/internships/:id', internshipController.getInternshipById);
router.put('/internships/:id', internshipController.updateInternship);
router.delete('/internships/:id', internshipController.deleteInternship);

// MOUs routes
router.post('/mous', mouController.createMOU);
router.get('/mous', mouController.getAllMOUs);
router.get('/mous/:id', mouController.getMOUById);
router.put('/mous/:id', mouController.updateMOU);
router.delete('/mous/:id', mouController.deleteMOU);

// Courses Designed by Industry Experts routes
router.post('/courses-designed-by-experts', courseDesignedByExpertController.createCourseDesignedByExpert);
router.get('/courses-designed-by-experts', courseDesignedByExpertController.getAllCoursesDesignedByExpert);
router.get('/courses-designed-by-experts/:id', courseDesignedByExpertController.getCourseDesignedByExpertById);
router.put('/courses-designed-by-experts/:id', courseDesignedByExpertController.updateCourseDesignedByExpert);
router.delete('/courses-designed-by-experts/:id', courseDesignedByExpertController.deleteCourseDesignedByExpert);

// Courses by Industry Experts routes
router.post('/courses-by-experts', courseByExpertController.createCourseByExpert);
router.get('/courses-by-experts', courseByExpertController.getAllCoursesByExpert);
router.get('/courses-by-experts/:id', courseByExpertController.getCourseByExpertById);
router.put('/courses-by-experts/:id', courseByExpertController.updateCourseByExpert);
router.delete('/courses-by-experts/:id', courseByExpertController.deleteCourseByExpert);

// Certification Courses routes
router.post('/certification-courses', certificationCoursesController.createCertificationCourse);
router.get('/certification-courses', certificationCoursesController.getAllCertificationCourses);
router.get('/certification-courses/:id', certificationCoursesController.getCertificationCourseById);
router.put('/certification-courses/:id', certificationCoursesController.updateCertificationCourse);
router.delete('/certification-courses/:id', certificationCoursesController.deleteCertificationCourse);

// Industry Labs routes
router.post('/industry-labs', createIndustryLab);
router.get('/industry-labs', getAllIndustryLabs);
router.get('/industry-labs/:id', getIndustryLabById);
router.put('/industry-labs/:id', updateIndustryLab);
router.delete('/industry-labs/:id', deleteIndustryLab);

// Certification Courses routes
router.post('/certification-courses', createCertificationCourse);
router.get('/certification-courses', getAllCertificationCourses);
router.get('/certification-courses/:id', getCertificationCourseById);
router.put('/certification-courses/:id', updateCertificationCourse);
router.delete('/certification-courses/:id', deleteCertificationCourse);

// Guest Lectures routes
router.post('/guest-lectures', createGuestLecture);
router.get('/guest-lectures', getAllGuestLectures);
router.get('/guest-lectures/:id', getGuestLectureById);
router.put('/guest-lectures/:id', updateGuestLecture);
router.delete('/guest-lectures/:id', deleteGuestLecture);

// Upcoming Events routes
router.post('/upcoming-events', createUpcomingEvent);
router.get('/upcoming-events', getAllUpcomingEvents);
router.get('/upcoming-events/:id', getUpcomingEventById);
router.put('/upcoming-events/:id', updateUpcomingEvent);
router.delete('/upcoming-events/:id', deleteUpcomingEvent);

// Startups routes
router.post('/startups', createStartup);
router.get('/startups', getAllStartups);
router.get('/startups/:id', getStartupById);
router.put('/startups/:id', updateStartup);
router.delete('/startups/:id', deleteStartup);

// Research Publications routes
router.post('/research-publications', createResearchPublication);
router.get('/research-publications', getAllResearchPublications);
router.get('/research-publications/:id', getResearchPublicationById);
router.put('/research-publications/:id', updateResearchPublication);
router.delete('/research-publications/:id', deleteResearchPublication);

// Research Centers routes
router.post('/research-centers', createResearchCenter);
router.get('/research-centers', getAllResearchCenters);
router.get('/research-centers/:id', getResearchCenterById);
router.put('/research-centers/:id', updateResearchCenter);
router.delete('/research-centers/:id', deleteResearchCenter);

// Consultancy Projects routes
router.post('/consultancy-projects', createConsultancyProject);
router.get('/consultancy-projects', getAllConsultancyProjects);
router.get('/consultancy-projects/:id', getConsultancyProjectById);
router.put('/consultancy-projects/:id', updateConsultancyProject);
router.delete('/consultancy-projects/:id', deleteConsultancyProject);

// Industrial Visits routes
router.post('/industrial-visits', createIndustrialVisit);
router.get('/industrial-visits', getAllIndustrialVisits);
router.get('/industrial-visits/:id', getIndustrialVisitById);
router.put('/industrial-visits/:id', updateIndustrialVisit);
router.delete('/industrial-visits/:id', deleteIndustrialVisit);

// Upcoming Visits routes
router.post('/upcoming-visits', createUpcomingVisit);
router.get('/upcoming-visits', getAllUpcomingVisits);
router.get('/upcoming-visits/:id', getUpcomingVisitById);
router.put('/upcoming-visits/:id', updateUpcomingVisit);
router.delete('/upcoming-visits/:id', deleteUpcomingVisit);

// Collaborated Projects routes
router.post('/collaborated-projects', createCollaboratedProject);
router.get('/collaborated-projects', getAllCollaboratedProjects);
router.get('/collaborated-projects/:id', getCollaboratedProjectById);
router.put('/collaborated-projects/:id', updateCollaboratedProject);
router.delete('/collaborated-projects/:id', deleteCollaboratedProject);

module.exports = router;
