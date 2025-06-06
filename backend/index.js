// backend/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Middlewares
app.use(cors({
  origin: ['http://localhost:5173'], // ou '*' só pra testar, mas cuidado
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use(express.json());

// Rotas
const printfulRoute = require('./src/services/routes/printfulRoute');
app.use('/api/printful', printfulRoute);

// Inicializar servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
