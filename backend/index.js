// index.js

require('dotenv').config(); // Muito importante carregar antes de tudo
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://cavallo-nero.vercel.app',
  ],
  credentials: true,
}));

const printfulRoutes = require('./src/services/routes/printfulRoute');

app.use(express.json());

app.use('/printfulRoute', printfulRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
