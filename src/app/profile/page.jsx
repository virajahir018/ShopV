"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProfilePage() {
  const router = useRouter();
  const { user, isLoggedIn } = useSelector((state) => state.user);
  const orders = useSelector((state) => state.orders.items);

  const [activeTab, setActiveTab] = useState("overview");

  // Redirect to login if not logged in
  if (!isLoggedIn || !user) {
    return (
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Please Login</h1>
          <p className="text-gray-600 mb-6">You need to login to view your profile</p>
          <Link href="/login">
            <button className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 font-semibold">
              Go to Login
            </button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
            {/* Profile Card */}
            <div className="text-center mb-6">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-pink-600">
                <Image
                  src={user.avatar}
                  alt={user.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
              <p className="text-gray-600 text-sm mt-1">{user.email}</p>
              {user.phone && (
                <p className="text-gray-600 text-sm">{user.phone}</p>
              )}
            </div>

            <div className="border-t pt-6">
              <div className="space-y-3">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={`w-full text-left px-4 py-2 rounded-lg font-semibold transition ${
                    activeTab === "overview"
                      ? "bg-pink-600 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  📋 Overview
                </button>
                <button
                  onClick={() => setActiveTab("orders")}
                  className={`w-full text-left px-4 py-2 rounded-lg font-semibold transition ${
                    activeTab === "orders"
                      ? "bg-pink-600 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  📦 My Orders
                </button>
                <button
                  onClick={() => setActiveTab("settings")}
                  className={`w-full text-left px-4 py-2 rounded-lg font-semibold transition ${
                    activeTab === "settings"
                      ? "bg-pink-600 text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  ⚙️ Settings
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Profile Info */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Profile Information</h3>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-600 font-semibold">Full Name</label>
                      <p className="text-lg text-gray-800 mt-1">{user.name}</p>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 font-semibold">Email</label>
                      <p className="text-lg text-gray-800 mt-1">{user.email}</p>
                    </div>
                  </div>

                  {user.phone && (
                    <div>
                      <label className="block text-sm text-gray-600 font-semibold">Phone</label>
                      <p className="text-lg text-gray-800 mt-1">{user.phone}</p>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm text-gray-600 font-semibold">Member Since</label>
                    <p className="text-lg text-gray-800 mt-1">
                      {new Date(user.id).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-linear-to-br from-pink-100 to-pink-200 rounded-xl p-6">
                  <h4 className="text-gray-700 font-semibold">Total Orders</h4>
                  <p className="text-4xl font-bold text-pink-600 mt-2">{orders.length}</p>
                </div>
                <div className="bg-linear-to-br from-blue-100 to-blue-200 rounded-xl p-6">
                  <h4 className="text-gray-700 font-semibold">Account Status</h4>
                  <p className="text-2xl font-bold text-blue-600 mt-2">✅ Active</p>
                </div>
                <div className="bg-linear-to-br from-green-100 to-green-200 rounded-xl p-6">
                  <h4 className="text-gray-700 font-semibold">Membership</h4>
                  <p className="text-2xl font-bold text-green-600 mt-2">⭐ Premium</p>
                </div>
              </div>
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === "orders" && (
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">My Orders</h3>
              
              {orders.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg mb-4">You haven't placed any orders yet</p>
                  <Link href="/products">
                    <button className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 font-semibold">
                      Start Shopping
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="border-2 border-gray-200 rounded-lg p-4 hover:border-pink-500 transition">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm text-gray-600">Order ID: #{order.id}</p>
                          <p className="font-semibold text-gray-800 mt-1">
                            {order.products.length} item(s)
                          </p>
                          <p className="text-sm text-gray-600 mt-1">Date: {order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-pink-600">₹{order.total}</p>
                          <span className="inline-block mt-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold">
                            {order.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === "settings" && (
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Account Settings</h3>
                
                <div className="space-y-4">
                  <div>
                    <button className="w-full text-left px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-pink-500 transition">
                      <h4 className="font-semibold text-gray-800">Change Password</h4>
                      <p className="text-sm text-gray-600">Update your password regularly for security</p>
                    </button>
                  </div>
                  <div>
                    <button className="w-full text-left px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-pink-500 transition">
                      <h4 className="font-semibold text-gray-800">Email Preferences</h4>
                      <p className="text-sm text-gray-600">Manage email notifications and marketing emails</p>
                    </button>
                  </div>
                  <div>
                    <button className="w-full text-left px-4 py-3 border-2 border-gray-200 rounded-lg hover:border-pink-500 transition">
                      <h4 className="font-semibold text-gray-800">Privacy Settings</h4>
                      <p className="text-sm text-gray-600">Control what data is shared with third parties</p>
                    </button>
                  </div>
                  <div>
                    <button className="w-full text-left px-4 py-3 border-2 border-red-200 rounded-lg hover:border-red-500 hover:bg-red-50 transition">
                      <h4 className="font-semibold text-red-600">Delete Account</h4>
                      <p className="text-sm text-gray-600">Permanently delete your account and all data</p>
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6">
                <h4 className="font-bold text-blue-900 mb-2">💡 Need Help?</h4>
                <p className="text-blue-800 text-sm">
                  Contact our support team at support@shopv.com or call 1-800-SHOPV-01
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
