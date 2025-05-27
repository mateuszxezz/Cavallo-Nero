// frontend\src\pages\Produto.jsx

import { Navigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchSyncedProducts } from '../api';
import { useNavigate } from 'react-router-dom';

export default function Produto() {
  const navigate = useNavigate();
  const handleBuy = () => {
    navigate('/checkout', { state: { produto } });
  }
  const { id } = useParams();
  const [produto, setProduto] = useState(null);

useEffect(() => {
  fetchSyncedProducts().then(res => {
    console.log('Produtos recebidos:', res.data);
    const found = res.data.find(p => p.id == id);
setProduto(found);

    console.log('Produto encontrado:', found);
    setProduto(found);
  });
}, [id]);

  if (!produto) return <p className="p-10 text-gray-700">Carregando produto...</p>;

  const { thumbnail_url, name, id: produtoId, sync_variants } = produto;


  return (
    <div className="max-w-7xl mx-auto p-6 bg-white min-h-screen">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <img
            src={thumbnail_url}
            alt={name}
            className="w-full h-[500px] object-contain rounded border"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
            <p className="text-gray-500 mt-2">ID: {id}</p>

            <div className="mt-4 space-y-2">
              <p className="text-lg text-gray-700">
                Descrição do produto (em breve).
              </p>

              {sync_variants?.[0] && (
                <p className="text-xl font-semibold mt-4 text-green-600">
                  R$ {(sync_variants[0].retail_price || 99.99).toString().replace('.', ',')}
                </p>
              )}
            </div>

            <div className="mt-6">
              <label htmlFor="size" className="block mb-1 font-medium text-gray-700">
                Tamanho
              </label>
              <select className="w-full border border-gray-300 rounded p-2">
                <option>P</option>
                <option>M</option>
                <option>G</option>
                <option>GG</option>
              </select>
            </div>
          </div>

          <button onClick={handleBuy} className="mt-8 px-6 py-3 bg-black text-white rounded hover:bg-gray-800 text-lg">
            Comprar agora
          </button>
        </div>
      </div>
    </div>
  );
}
