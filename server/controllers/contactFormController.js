const ContactForm = require('../models/ContactForm');

// Controller function to handle contact form submissions
exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;
    const newContactForm = new ContactForm({
      name,
      email,
      phone,
      service,
      message,
    });
    await newContactForm.save();
    res.status(201).json({ message: 'Contact form submission successful' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to submit contact form' });
  }
};

// Controller function to fetch all contact form submissions
exports.getAllContactForms = async (req, res) => {
  try {
    const contactForms = await ContactForm.find();
    res.status(200).json(contactForms);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch contact forms' });
  }
};
