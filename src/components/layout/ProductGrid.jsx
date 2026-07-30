"use client";

import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const search = useSelector((state) => state.search.value);

  const products = useSelector(
    (state) => state.products.items
  );

  const sort = useSelector(
    (state) => state.products.sort
  );

  const searchTerm = search.toLowerCase();

  let filteredProducts = products.filter((product) => {
    return (
      product.title.toLowerCase().includes(searchTerm) ||
      product.brand.toLowerCase().includes(searchTerm)
    );
  });

  // Sort
  switch (sort) {
    case "low-high":
      filteredProducts.sort((a, b) => a.price - b.price);
      break;

    case "high-low":
      filteredProducts.sort((a, b) => b.price - a.price);
      break;

    case "rating":
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;

    default:
      break;
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-16">

      <div className="mb-10 flex flex-col items-center justify-between gap-4 md:flex-row">

        <h2 className="text-4xl font-bold">
          {search
            ? `Search Results for "${search}"`
            : "Trending Products"}
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4">

        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <h2 className="col-span-full text-center text-2xl">
            No Products Found 😔
          </h2>
        )}

      </div>

    </section>
  );
}