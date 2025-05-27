// src/components/CreateOrderTest.js
import axios from 'axios';

const CreateOrderTest = () => {
  const handleCreateOrder = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/printfulRoute/order`, {
        variantId: 382988806,
        quantity: 1,
        recipient: {
    name: "Nome do Cliente",
    address1: "Rua Tal",
    city: "Cidade",
    state_code: "UF",
    country_code: "BR",
    zip: "CEP",
    email: "email@email.com",
    phone: "+55 88 99999-9999"
  },
  items: [
    {
      variant_id: 12345678,
      quantity: 1,
      name: "Nome do Produto",
      retail_price: "79.90",
      size: "M",
    }
  ]
      });

      console.log("✅ Pedido criado com sucesso:", response.data);
    } catch (err) {
      console.error("❌ Erro ao criar pedido:", err.response?.data || err.message);
    }
  };

  return (
    <div className="p-4">
      <button onClick={handleCreateOrder} className="bg-blue-600 text-white px-4 py-2 rounded">
        Criar Pedido (teste)
      </button>
    </div>
  );
};

export default CreateOrderTest;
