// frontend/src/components/ProductCard.jsx

import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-square bg-gray-100 overflow-hidden">
        <img
          src={product?.thumbnail_url}
          alt={product?.name || 'Produto'}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4 flex flex-col justify-between">
        <h2 className="text-base font-semibold text-gray-900 mb-1 line-clamp-2">{product.name}</h2>
        <p className="text-sm text-gray-500">ID: {product.id}</p>

        <div className="mt-3">
          <Link
            to={`/produto/${product.id}`}
            className="inline-block w-full text-center px-4 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition"
          >
            Ver detalhes
          </Link>
        </div>
      </div>
    </div>
  );
}
