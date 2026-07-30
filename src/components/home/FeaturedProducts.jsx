"use client";

import { useSelector } from "react-redux";
import ProductCard from "../layout/ProductCard";
import Link from "next/link";

export default function FeaturedProducts() {
  const products = useSelector(
    (state) => state.products.items
  );

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">

      {/* Heading */}
      <div className="mb-10 flex items-center justify-between">

        <div>
          <h2 className="text-3xl font-bold">
            Featured Products
          </h2>

          <p className="mt-2 text-gray-500">
            Handpicked products just for you
          </p>
        </div>

        <Link
          href="/products"
          className="rounded-lg border px-5 py-2 font-semibold transition hover:bg-pink-600 hover:text-white"
        >
          View All
        </Link>

      </div>

      {/* Products */}

      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">

        {products.slice(0, 8).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}