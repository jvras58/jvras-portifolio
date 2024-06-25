const express = require('express');
const mongoose = require('mongoose');
const contactFormRoutes = require('./routes/contactForm');

const app = express();

// Conecta ao banco de dados MongoDB
mongoose.connect('mongodb://localhost/contact-form')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Configurar aplicativo Express
app.use(express.json());

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

// Usa as rotas do formulário de contato
app.use('/api/contact', contactFormRoutes);

// inicia o server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
