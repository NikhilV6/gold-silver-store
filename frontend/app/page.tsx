'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const API_URL = 'http://localhost:8000/api/products';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        //setError('Failed to load products.');
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center px-4 sm:px-6 py-16 gap-10">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-4">
            Adorn yourself in dreams that glisten
          </h1>
          <p className="mb-4 text-gray-600 text-base sm:text-lg">
            A treasure trove of elegance, waiting to be discovered. Explore the extraordinary now.
          </p>
          <p className="mb-6 text-gray-600 text-base sm:text-lg">
            Embrace the extraordinary. Elevate your every day with our exquisite jewelry. Timeless beauty, modern convenience. Luxury delivered to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
              Learn More
            </button>
            <button className="border border-black px-6 py-3 rounded-full hover:bg-gray-100 transition">
              Shop Now
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72 relative">
            {/* <Image src="/images/bg_image.png" alt="Hero Watch" fill className="object-contain" /> */}
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="px-4 sm:px-6 py-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center sm:text-left">
          Shop Our Collection
        </h2>

        {error && <p className="text-red-600">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.length > 0 ? (
            products.map((product) => (
              <Link
                href={`/products/${product.id}`}
                key={product.id}
                className="block border p-4 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="h-40 sm:h-48 relative mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain rounded"
                  />
                </div>
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
                <p className="text-sm font-semibold text-gray-800 mt-2">${product.price}</p>
                <p className="mt-4 text-sm underline text-blue-600">View Product</p>
              </Link>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">Loading products...</p>
          )}
        </div>
      </section>
    </div>
  );
}
