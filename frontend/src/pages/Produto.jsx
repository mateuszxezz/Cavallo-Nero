// frontend\src\pages\Produto.jsx

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchSyncedProducts } from '../api';

export default function Produto() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    fetchSyncedProducts().then(res => {
      const found = res.data.find(p => p.sync_product.id === parseInt(id));
      setProduto(found?.sync_product);
    });
  }, [id]);

  if (!produto) return <p>Carregando produto...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{produto.name}</h1>
      <img
        src={produto.thumbnail_url}
        alt={produto.name}
        className="w-full h-96 object-cover rounded mb-4"
      />
      <p className="text-gray-700 mb-2">ID: {produto.id}</p>
      <p className="text-gray-600">Descrição futura do produto (ou variantes)</p>
      <button className="mt-4 px-6 py-2 bg-black text-white rounded hover:bg-gray-800">
        Comprar agora
      </button>
    </div>
  );
}
