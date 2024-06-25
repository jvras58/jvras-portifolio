const express = require('express');
const router = express.Router();
const contactFormController = require('../controllers/contactFormController');


// Rota para lidar com envios de formulários de contato
router.post('/', contactFormController.submitContactForm);

// Rota para buscar todos os envios de formulários de contato
router.get('/', contactFormController.getAllContactForms);

module.exports = router;
