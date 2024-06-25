const express = require('express');
const router = express.Router();
const contactFormController = require('../controllers/contactFormController');


// Route to handle contact form submissions
router.post('/', contactFormController.submitContactForm);

// Route to fetch all contact form submissions
router.get('/', contactFormController.getAllContactForms);

module.exports = router;
