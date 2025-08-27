
// RightPanel.js
"use client";

import { useState } from "react";

export default function RightPanel({ onScreenChange, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      const userData = {
        id: 1,
        name: "Admin User",
        email: email,
        role: "Admin",
        businessName: "Arifpay Merchant",
      };
      onLogin(userData);
    } else {
      // Replaced alert with a custom message for better UX
      console.log("Please enter both email and password");
      // You could also render a small error message in the UI here
    }
  };

  return (
    <div className="relative z-20 flex w-full h-[400px] items-center justify-center p-6 md:p-12">
      <div className="w-full max-w-md">
        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="hidden md:block text-2xl text-gray-600 text-center mb-6">
            Hey there 👋
          </h2>
          {/* Mobile Header */}
          <div className="md:hidden flex flex-col items-center text-center mb-8">
            <img src="/images/arifekub.svg" alt="Arifpay Logo" className="w-28 mb-3 ]" />

            <p className="px-6 text-sm text-[#6B7280]">
              Please Login to manage Merchants, their menus and prices. Thank you
            </p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-500 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border rounded-2xl border-gray-300 focus:ring-2 focus:ring-green-500 outline-none transition-all"
                placeholder="you@email.com"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border rounded-2xl border-gray-300 focus:ring-2 focus:ring-green-500 outline-none transition-all pr-12"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>

            {/* Options */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <button
                type="button"
                onClick={() => onScreenChange("forgot-password")}
                className="text-sm text-gray-400 hover:text-green-700 font-medium"
              >
                Forgot Your Password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 px-4 rounded-2xl hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all font-medium"
            >
              Login
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8">
            <img src="/images/bottomarificon.svg" alt="Arifpay Icon" className="w-24 mx-auto mt-6" />
            <div className="border-b-2 border-gray-100 mt-6"></div>
            <p className="text-gray-400 text-xs mt-3 text-center">
              © Arif Financial Technologies — Built by and for Arif Financial Technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
