"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { loginUser } from "@/redux/slices/userSlice";

export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Simulate API call - in production, this would call your backend
    setTimeout(() => {
      const user = {
        id: Date.now(),
        email: formData.email,
        name: formData.email.split("@")[0],
        avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
      };

      dispatch(
        loginUser({
          user,
          token: `token_${Date.now()}`,
        })
      );

      alert(`✅ Welcome ${user.name}!`);
      router.push("/");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="min-h-screen bg-linear-to-br from-pink-50 to-pink-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-pink-600 mb-2">ShopV</h1>
            <h2 className="text-2xl font-bold text-gray-800">Login</h2>
            <p className="text-gray-600 mt-2">Welcome back to your shopping destination</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className={`w-full px-4 py-3 border-2 rounded-lg transition focus:outline-none ${
                  errors.email
                    ? "border-red-500 focus:border-red-600 bg-red-50"
                    : "border-gray-300 focus:border-pink-500"
                }`}
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className={`w-full px-4 py-3 border-2 rounded-lg transition focus:outline-none ${
                  errors.password
                    ? "border-red-500 focus:border-red-600 bg-red-50"
                    : "border-gray-300 focus:border-pink-500"
                }`}
              />
              {errors.password && (
                <p className="text-red-600 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 cursor-pointer accent-pink-600"
                />
                <span className="text-sm text-gray-700">Remember me</span>
              </label>
              <a href="#" className="text-sm text-pink-600 hover:text-pink-700 font-semibold">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-linear-to-r from-pink-600 to-pink-700 text-white font-bold py-3 rounded-lg hover:from-pink-700 hover:to-pink-800 transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-gray-500 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Demo Credentials */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm font-semibold text-blue-900 mb-2">Demo Credentials:</p>
            <p className="text-sm text-blue-800">Email: demo@example.com</p>
            <p className="text-sm text-blue-800">Password: demo123</p>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-gray-700">
              Don't have an account?{" "}
              <Link href="/signup" className="text-pink-600 font-bold hover:text-pink-700">
                Sign up here
              </Link>
            </p>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-6">
            <Link
              href="/"
              className="text-sm text-gray-600 hover:text-gray-800 underline"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
