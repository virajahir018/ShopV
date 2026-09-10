"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { loginUser } from "@/redux/slices/userSlice";

export default function SignupPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName) {
      newErrors.fullName = "Full name is required";
    }

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

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.length < 10) {
      newErrors.phone = "Phone number must be at least 10 digits";
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to terms and conditions";
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
        name: formData.fullName,
        phone: formData.phone,
        avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
      };

      dispatch(
        loginUser({
          user,
          token: `token_${Date.now()}`,
        })
      );

      alert(`✅ Welcome ${user.name}! Account created successfully.`);
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
            <h2 className="text-2xl font-bold text-gray-800">Sign Up</h2>
            <p className="text-gray-600 mt-2">Create your account to start shopping</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className={`w-full px-4 py-2 border-2 rounded-lg transition focus:outline-none ${
                  errors.fullName
                    ? "border-red-500 focus:border-red-600 bg-red-50"
                    : "border-gray-300 focus:border-pink-500"
                }`}
              />
              {errors.fullName && (
                <p className="text-red-600 text-xs mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className={`w-full px-4 py-2 border-2 rounded-lg transition focus:outline-none ${
                  errors.email
                    ? "border-red-500 focus:border-red-600 bg-red-50"
                    : "border-gray-300 focus:border-pink-500"
                }`}
              />
              {errors.email && (
                <p className="text-red-600 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="9876543210"
                className={`w-full px-4 py-2 border-2 rounded-lg transition focus:outline-none ${
                  errors.phone
                    ? "border-red-500 focus:border-red-600 bg-red-50"
                    : "border-gray-300 focus:border-pink-500"
                }`}
              />
              {errors.phone && (
                <p className="text-red-600 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className={`w-full px-4 py-2 border-2 rounded-lg transition focus:outline-none ${
                  errors.password
                    ? "border-red-500 focus:border-red-600 bg-red-50"
                    : "border-gray-300 focus:border-pink-500"
                }`}
              />
              {errors.password && (
                <p className="text-red-600 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className={`w-full px-4 py-2 border-2 rounded-lg transition focus:outline-none ${
                  errors.confirmPassword
                    ? "border-red-500 focus:border-red-600 bg-red-50"
                    : "border-gray-300 focus:border-pink-500"
                }`}
              />
              {errors.confirmPassword && (
                <p className="text-red-600 text-xs mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="w-4 h-4 cursor-pointer accent-pink-600"
              />
              <label className="text-sm text-gray-700">
                I agree to{" "}
                <a href="#" className="text-pink-600 hover:text-pink-700 font-semibold">
                  Terms & Conditions
                </a>
              </label>
            </div>
            {errors.agreeToTerms && (
              <p className="text-red-600 text-xs">{errors.agreeToTerms}</p>
            )}

            {/* Sign Up Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-linear-to-r from-pink-600 to-pink-700 text-white font-bold py-3 rounded-lg hover:from-pink-700 hover:to-pink-800 transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed mt-6"
            >
              {isLoading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>

          {/* Login Link */}
          <div className="text-center mt-6">
            <p className="text-gray-700">
              Already have an account?{" "}
              <Link href="/login" className="text-pink-600 font-bold hover:text-pink-700">
                Login here
              </Link>
            </p>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-4">
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
