"use client";

import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { FiUser, FiUserPlus } from "react-icons/fi"; 

export default function AuthModal({ onClose }: { onClose: () => void }) {
  const [tab, setTab] = useState<"login" | "register">("login");

  return (
    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4">
      <div className="bg-white border shadow-2xl rounded-2xl p-6 relative animate-fade-in overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-red-600 text-xl font-bold"
        >
          &times;
        </button>

        <div className="mb-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center justify-center space-x-2">
            {tab === "login" ? (
              <>
                <FiUser className="text-blue-600" />
                <span>Login to B-Shop</span>
              </>
            ) : (
              <>
                <FiUserPlus className="text-green-600" />
                <span>Welcome to B-Shop</span>
              </>
            )}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {tab === "login"
              ? "Enter your credentials to access your account."
              : "Create an account to start shopping!"}
          </p>
        </div>

        <div className="flex justify-center space-x-3 mb-6">
          <button
            onClick={() => setTab("login")}
            className={`px-4 py-2 text-sm rounded-md font-semibold transition-all duration-200 ${
              tab === "login"
                ? "bg-blue-600 text-white shadow"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setTab("register")}
            className={`px-4 py-2 text-sm rounded-md font-semibold transition-all duration-200 ${
              tab === "register"
                ? "bg-green-600 text-white shadow"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Register
          </button>
        </div>

        <div className="transition-opacity duration-200">
          {tab === "login" ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </div>
  );
}
