"use client";

import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { placeOrder } from "@/redux/slices/orderSlice";
import { clearCart } from "@/redux/slices/cartSlice";

export default function CheckoutPage() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    payment: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = () => {
    if (
      !formData.name ||
      !formData.phone ||
      !formData.address ||
      !formData.city ||
      !formData.pincode ||
      !formData.payment
    ) {
      alert("Please fill all fields.");
      return;
    }

    const order = {
      id: Date.now(),
      customer: formData,
      products: items,
      total,
      status: "Pending",
      date: new Date().toLocaleDateString(),
    };

    dispatch(placeOrder(order));
    dispatch(clearCart());

    alert("✅ Order Placed Successfully!");

    router.push("/order-success");
  };

  const total = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="min-h-screen bg-gray-100 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-4xl font-bold text-gray-800">
          Checkout
        </h1>

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Left Side */}
          <div className="space-y-6 lg:col-span-2">

            {/* Customer Details */}
            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <h2 className="mb-6 border-b pb-3 text-2xl font-semibold text-gray-800">
                👤 Customer Details
              </h2>

              <div className="grid gap-5 sm:grid-cols-2">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Full Name"
                  className="rounded-xl border border-gray-300 p-3 transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none"
                />

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="Phone Number"
                  className="rounded-xl border border-gray-300 p-3 transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none"
                />
              </div>
            </div>

            {/* Address */}
            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <h2 className="mb-6 border-b pb-3 text-2xl font-semibold text-gray-800">
                📍 Delivery Address
              </h2>

              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows={4}
                placeholder="Enter your address"
                className="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
              />

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  type="text"
                  placeholder="City"
                  className="rounded-xl border border-gray-300 p-3 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
                />

                <input
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  type="text"
                  placeholder="Pincode"
                  className="rounded-xl border border-gray-300 p-3 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-200"
                />
              </div>
            </div>

            {/* Payment */}
            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <h2 className="mb-6 border-b pb-3 text-2xl font-semibold text-gray-800">
                💳 Payment Method
              </h2>

              <div className="space-y-4">

                <label className="flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition hover:border-pink-500 hover:bg-pink-50">
                  <input type="radio" name="payment" value="COD"
                    checked={formData.payment === "COD"}
                    onChange={handleChange} />
                  <span className="font-medium">
                    Cash on Delivery
                  </span>
                </label>

                <label className="flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition hover:border-pink-500 hover:bg-pink-50">
                  <input type="radio" name="payment" value="UPI"
                    checked={formData.payment === "UPI"}
                    onChange={handleChange} />
                  <span className="font-medium">
                    UPI
                  </span>
                </label>

                <label className="flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition hover:border-pink-500 hover:bg-pink-50">
                  <input type="radio" name="payment" value="CARD"
                    checked={formData.payment === "CARD"}
                    onChange={handleChange} />
                  <span className="font-medium">
                    Credit / Debit Card
                  </span>
                </label>

              </div>
            </div>

          </div>

          {/* Right Side */}
          <div className="sticky top-24 h-fit rounded-2xl bg-white p-6 shadow-xl">

            <h2 className="mb-6 border-b pb-3 text-2xl font-bold text-gray-800">
              Order Summary
            </h2>

            <div className="space-y-4">

              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-xl bg-gray-50 p-4"
                >
                  <div>
                    <p className="font-semibold text-gray-800">
                      {item.brand}
                    </p>

                    <p className="text-sm text-gray-500">
                      Qty : {item.quantity}
                    </p>
                  </div>

                  <p className="font-bold text-pink-600">
                    ₹{item.price * item.quantity}
                  </p>
                </div>
              ))}

            </div>

            <div className="my-6 border-t"></div>

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span className="text-pink-600">
                ₹{total}
              </span>
            </div>

              <button
                onClick={handlePlaceOrder}
                className="mt-6 w-full rounded-xl bg-pink-600 py-4 text-lg font-semibold text-white transition duration-300 hover:scale-[1.02] hover:bg-pink-700 active:scale-95">
                Place Order
              </button>
          </div>

        </div>
      </div>
    </section>
  );
}