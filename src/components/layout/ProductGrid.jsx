"use client";

import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const search = useSelector((state) => state.search.value);

  const products = useSelector(
    (state) => state.products.items
  );

  const filteredProducts = products.filter((product) => {
    return (
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.brand.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <section className="mx-auto max-w-7xl px-5 py-16">

      <h2 className="mb-10 text-center text-4xl font-bold">
        {search
          ? `Search Results for "${search}"`
          : "Trending Products"}
      </h2>

      <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4">

        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <h2 className="col-span-4 text-center text-2xl">
            No Products Found 😔
          </h2>
        )}

      </div>

    </section>
  );
}