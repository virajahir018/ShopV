"use client";

import Link from "next/link";
import { CircleCheckBig } from "lucide-react";

export default function OrderSuccessPage() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-xl">

        <CircleCheckBig
          size={90}
          className="mx-auto text-green-500"
        />

        <h1 className="mt-6 text-4xl font-bold">
          Order Placed Successfully!
        </h1>

        <p className="mt-4 text-gray-600">
          Thank you for shopping with us.
        </p>

        <p className="mt-2 text-gray-500">
          Your order has been received and is being processed.
        </p>

        <div className="mt-8 rounded-xl bg-gray-100 p-4">
          <p className="text-sm text-gray-500">
            Order ID
          </p>

          <h2 className="mt-1 text-xl font-bold">
            #{Date.now()}
          </h2>
        </div>

        <Link href="/">
          <button className="mt-8 w-full rounded-xl bg-pink-600 py-3 text-lg font-semibold text-white transition hover:bg-pink-700">
            Continue Shopping
          </button>
        </Link>

      </div>
    </section>
  );
}