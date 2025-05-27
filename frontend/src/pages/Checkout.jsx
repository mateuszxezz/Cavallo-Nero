// frontend\src\pages\Checkout.jsx

import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import CreateOrderTest from "../components/CreateOrderTest";

export default function Checkout() {

  function App() {
    return (
      <div>
        <h1>TEST</h1>
        <CreateOrderTest />
      </div>
    );
  }

    const { state } = useLocation();
    const produto = state?.produto;
    const [form, setForm] = useState({
  name: '',
  address1: '',
  city: '',
  state_code: '',
  country_code: 'BR',
  zip: '',
  email: '',
  phone: '',
  size: 'M',
});


    const handleChange = e => {
      setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    };

    const handleSubmit = async e => {
  e.preventDefault();

  const orderData = {
    recipient: {
      name: form.name,
      address1: form.address1,
      city: form.city,
      state_code: form.state_code,
      country_code: form.country_code,
      zip: form.zip,
      email: form.email,
      phone: form.phone,
    },
    items: [
      {
        variant_id: produto.variantId,
        quantity: 1,
      },
    ],
  };

  try {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/printfulRoute/order`, orderData);
    alert("✅ Pedido feito com sucesso!");
    console.log(res.data);
  } catch (err) {
    console.error("❌ Erro ao criar o pedido!", err.response?.data || err.message);
    alert("❌ Erro ao fazer o pedido!");
  }
};



    if(!produto) return <p className="p-10">DIficil de encontrtar esse produto Produto não encontrado!</p>

    return (
    <div className="max-w-xl mx-auto p-6 bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Finalizar compra</h1>
      <p className="mb-2">Produto: {produto.name}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
  <input name="name" placeholder="Nome completo" onChange={handleChange} className="w-full p-2 border" />
  <input name="address1" placeholder="Endereço completo" onChange={handleChange} className="w-full p-2 border" />
  <input name="city" placeholder="Cidade" onChange={handleChange} className="w-full p-2 border" />
  <input name="state_code" placeholder="Estado (UF)" onChange={handleChange} className="w-full p-2 border" />
  <input name="zip" placeholder="CEP" onChange={handleChange} className="w-full p-2 border" />
  <input name="phone" placeholder="Telefone" onChange={handleChange} className="w-full p-2 border" />
  <input name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border" />

  <label>Tamanho</label>
  <select name="size" value={form.size} onChange={handleChange} className="w-full p-2 border">
    <option value="P">P</option>
    <option value="M">M</option>
    <option value="G">G</option>
    <option value="GG">GG</option>
  </select>

  <button type="submit" className="w-full bg-black text-white p-3 rounded">
    Confirmar pedido
  </button>
      </form>
    </div>
  );
}