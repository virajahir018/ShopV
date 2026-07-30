"use client";

import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/redux/slices/cartSlice";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

export default function CartPage() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  return (
    <section className="sm:mx-auto sm:max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-center text-3xl font-bold sm:text-left sm:text-4xl">
        Shopping Cart
      </h1>

      {items.length === 0 ? (
        <h2 className="text-center text-xl font-semibold">
          Your Cart is Empty 😢
        </h2>
      ) : (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 ">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-6 rounded-xl bg-white p-5 shadow-lg transition hover:shadow-xl md:flex-row"
            >
              {/* Image */}
              <div className="flex justify-center md:block">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={180}
                  height={180}
                  className="h-52 w-52 rounded-lg object-cover sm:h-56 sm:w-56 md:h-40 md:w-40"
                />
              </div>

              {/* Product Info */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold">
                  {item.brand}
                </h2>

                <p className="mt-1 text-gray-600">
                  {item.title}
                </p>

                <div className="mt-3 flex flex-wrap items-center justify-center gap-3 md:justify-start">
                  <span className="text-2xl font-bold text-pink-600">
                    ₹{item.price}
                  </span>

                  <span className="text-gray-400 line-through">
                    ₹{item.originalPrice}
                  </span>

                  <span className="font-semibold text-green-600">
                    {item.discount}
                  </span>
                </div>

                <p className="mt-2">
                  ⭐ {item.rating}
                </p>

                {/* Quantity */}
                <div className="mt-5 flex items-center justify-center gap-4 md:justify-start">
                  <button
                    onClick={() =>
                      dispatch(decreaseQuantity(item.id))
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-xl hover:bg-gray-300"
                  >
                    -
                  </button>

                  <span className="text-lg font-bold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      dispatch(increaseQuantity(item.id))
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-xl hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Price & Remove */}
              <div className="flex flex-col items-center justify-between gap-4 md:items-end">
                <button
                  onClick={() =>
                    dispatch(removeFromCart(item.id))
                  }
                  className="w-full rounded-lg bg-red-700 px-5 py-2 text-white hover:bg-red-600 md:w-auto"
                >
                  Remove
                </button>

                <p className="text-2xl font-bold text-pink-600">
                  ₹{item.price * item.quantity}
                </p>
              </div>
            </div>
          ))}

          {/* Grand Total */}
          <div className="rounded-xl flex flex-col justify-between bg-white p-13 shadow-lg">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <h2 className="text-2xl font-bold">
                Grand Total
              </h2>

              <p className="text-3xl font-bold text-pink-600">
                ₹
                {items.reduce(
                  (total, item) =>
                    total + item.price * item.quantity,
                  0
                )}
              </p>
            </div>

            <Link href="/checkout">
              <button className="mt-6 w-full rounded-lg bg-pink-600 py-3 text-lg font-semibold text-white transition hover:bg-pink-700">
                Proceed to Checkout
              </button>
            </Link>

          </div>
        </div>
      )}
    </section>
  );
}