// index.js

require('dotenv').config(); // Muito importante carregar antes de tudo
const express = require('express');
const cors = require('cors');
const app = express();
const printfulRoute = require('./routes/printfulRoute');
app.use('/printfulRoute', printfulRoute);


app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://cavallo-nero.vercel.app',
  ],
  credentials: true,
}));

app.use(express.json());

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
