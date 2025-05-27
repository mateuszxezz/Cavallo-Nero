// frontend\src\pages\Home.jsx

import { useEffect, useState } from 'react';
import { fetchSyncedProducts } from '../api';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchSyncedProducts()
      .then(res => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">🛒 Loja Printful do Maba</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-10 text-gray-900">Produtos em destaque</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
          {products
            .filter(p => p && p.thumbnail_url)
            .map(product => (
              <ProductCard product={product} key={product.id} />
            ))}
        </div>
      </main>
    </div>
  );
}
