import { useState } from "react";
import axios from "axios";

const Checkout = () => {
  const [recipient, setRecipient] = useState({
    name: "",
    address1: "",
    city: "",
    state_code: "",
    country_code: "",
    zip: "",
  });

  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecipient((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderData = {
      recipient,
      items: [
        {
          sync_variant_id: parseInt(productId),
          quantity: parseInt(quantity),
        },
      ],
    };

    try {
      console.log("🔍 Enviando dados para backend:", orderData);
      const res = await axios.post("http://localhost:3000/api/create-order", orderData);
      console.log("✅ Pedido criado com sucesso:", res.data);
      setMessage("Pedido criado com sucesso!");
    } catch (error) {
      console.error("❌ Erro ao criar pedido:", error.response?.data || error.message);
      setMessage("Erro ao criar pedido.");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Checkout - Criar Pedido</h2>
      <form onSubmit={handleSubmit}>
        <h4>Dados do destinatário</h4>
        <input name="name" placeholder="Nome" value={recipient.name} onChange={handleInputChange} required /><br />
        <input name="address1" placeholder="Endereço" value={recipient.address1} onChange={handleInputChange} required /><br />
        <input name="city" placeholder="Cidade" value={recipient.city} onChange={handleInputChange} required /><br />
        <input name="state_code" placeholder="Estado" value={recipient.state_code} onChange={handleInputChange} required /><br />
        <input name="country_code" placeholder="País (ex: BR)" value={recipient.country_code} onChange={handleInputChange} required /><br />
        <input name="zip" placeholder="CEP" value={recipient.zip} onChange={handleInputChange} required /><br />

        <h4>Produto</h4>
        <input placeholder="ID do Produto (sync_variant_id)" value={productId} onChange={(e) => setProductId(e.target.value)} required /><br />
        <input type="number" placeholder="Quantidade" value={quantity} onChange={(e) => setQuantity(e.target.value)} required /><br />

        <button type="submit">Criar Pedido</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default Checkout;
