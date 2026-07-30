"use client";

import { useSelector } from "react-redux";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import AddToCartButton from "@/components/product/AddToCartButton";
import WishlistButton from "@/components/product/WishlistButton";

export default function ProductDetails() {
  const { id } = useParams();

  const products = useSelector((state) => state.products.items);

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    notFound();
  }

  return (
    <section className="mx-auto max-w-8xl px-4 py-8 sm:px-6 lg:px-8">
      <div className=" grid grid-cols-1 gap-10 lg:grid-cols-2">

        {/* Product Image */}
        <div className="relative flex justify-center">
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={600}
            className="h-auto w-full max-w-md rounded-xl object-cover shadow-lg"
          />

          <WishlistButton product={product} />
        </div>

        {/* Product Details */}
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">
            {product.brand}
          </h2>

          <p className="mt-2 text-lg text-gray-500 sm:text-xl">
            {product.title}
          </p>

          <p className="mt-4 text-lg">
            ⭐ {product.rating}
          </p>

          {/* Price */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="text-3xl font-bold text-black">
              ₹{product.price}
            </span>

            <span className="text-lg text-gray-400 line-through">
              ₹{product.originalPrice}
            </span>

            <span className="font-bold text-green-600">
              {product.discount}
            </span>
          </div>

          {/* Quantity */}
          <div className="mt-8">
            <label className="font-semibold">
              Quantity
            </label>

            <select className="mt-2 ml-2 w-13 rounded-md border border-gray-300 px-1 py-1 shadow-sm outline-none focus:border-pink-500">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          {/* Delivery */}
          <div className="mt-8 rounded-xl bg-white p-6 shadow-md">
            <h3 className="text-lg font-bold">
              Delivery
            </h3>

            <div className="mt-3 space-y-2 text-gray-600">
              <p>🚚 Free Delivery</p>
              <p>🔄 7 Days Return Policy</p>
              <p>💳 Cash on Delivery Available</p>
            </div>
          </div>

          {/* Add To Cart */}
          <div className="mt-8">
            <AddToCartButton product={product} />
          </div>
        </div>

      </div>
    </section>
  );
}