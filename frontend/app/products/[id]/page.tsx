'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [material, setMaterial] = useState('Gold');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:8000/api/products/${id}`);
        if (!res.ok) throw new Error('Product not found');
        const data = await res.json();
        setProduct(data);
      } catch (err) {
       // setError(err.message);
      }
    };

    fetchProduct();
  }, [id]);

  if (error) return <div className="p-6 text-center text-red-600">{error}</div>;

  if (!product) return <div className="p-6 text-center text-gray-500">Loading...</div>;

  // Optional enhancements
  const description =
    product.name.toLowerCase().includes('mouse')
      ? 'Sleek and responsive wireless mouse designed for comfort and portability.'
      : product.name.toLowerCase().includes('keyboard')
      ? 'Mechanical keyboard with precise switches and durable build.'
      : product.name.toLowerCase().includes('headphones')
      ? 'Over-ear headphones delivering premium sound with deep bass.'
      : 'Premium tech accessory designed for everyday use.';

  const color = 'Dark Gray';
  const style = 'DN3253-204';

  return (
    <div className="bg-white text-gray-900 font-sans px-4 sm:px-6 py-10">
      <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
        {/* Product Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full max-w-md h-[400px] relative">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain rounded"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-serif mb-4">{product.name}</h1>
          <p className="text-lg text-gray-700 mb-2">{description}</p>
          <p className="text-2xl font-semibold mb-4">${product.price.toFixed(2)}</p>

          {/* Material Selection */}
          <div className="mb-4">
            <p className="mb-2 font-medium">Choose Material:</p>
            <div className="flex gap-3">
              {['Gold', 'Silver', 'Diamond', 'Others'].map((mat) => (
                <button
                  key={mat}
                  className={`px-4 py-2 border rounded-full ${
                    material === mat
                      ? 'bg-black text-white'
                      : 'border-gray-300 hover:bg-gray-100'
                  }`}
                  onClick={() => setMaterial(mat)}
                >
                  {mat}
                </button>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
              Buy Now
            </button>
            <button className="border border-black px-6 py-3 rounded-full hover:bg-gray-100 transition">
              Add to Cart
            </button>
          </div>

          {/* Affiliate Note */}
          <p className="text-sm text-gray-500 mb-2">
            This product is available for Affiliate Promotion
          </p>

          {/* Style Info */}
          <p className="text-sm text-gray-600">Colour Shown: {color}</p>
          <p className="text-sm text-gray-600">Style: {style}</p>

          {/* Shipping */}
          <p className="text-sm text-green-600 mt-4">Free Delivery & Returns</p>
        </div>
      </div>
    </div>
  );
}
