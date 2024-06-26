const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const contactFormRoutes = require('./routes/contactForm');

const app = express();

// Conecta ao banco de dados MongoDB
mongoose.connect('mongodb://localhost/contact-form')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Configurar aplicativo Express
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

// Usa as rotas do formulário de contato
app.use('/api/contact', contactFormRoutes);

// inicia o server
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server on port ${port}`));

// configurações iniciais do mongodb no docker:
// docker pull mongo
// docker run --name mongodb -v mongodbdata:/data/db -p 27017:27017 -d mongo