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

app.use(express.json());

// Usa o caminho correto pro printfulRoute:
const printfulRoutes = require('./src/services/routes/printfulRoute');
app.use('/printfulRoute', printfulRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
