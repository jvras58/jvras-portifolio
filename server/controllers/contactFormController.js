const ContactForm = require('../models/ContactForm');

// Função de controlador para lidar com envios de formulários de contato
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
    res.status(201).json({ message: 'Envio do formulário de contato realizado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: 'Falha ao enviar formulário de contato' });
  }
};

// Função de controlador para buscar todos os envios de formulários de contato
exports.getAllContactForms = async (req, res) => {
  try {
    const contactForms = await ContactForm.find();
    res.status(200).json(contactForms);
  } catch (err) {
    res.status(500).json({ error: 'Falha ao buscar formulários de contato' });
  }
};
