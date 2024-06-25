const mongoose = require('mongoose');

/**
 * Representa o esquema do formulário de contato.
 *
 * @typedef {Object} ContactFormSchema
 * @property {string} name 
 * @property {string} email
 * @property {string} phone 
 * @property {string} service 
 * @property {string} message 
 * @property {Date} createdAt 
 */
const contactFormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  service: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
//Cria o modelo no mongo
const ContactForm = mongoose.model('ContactForm', contactFormSchema);

module.exports = ContactForm;
