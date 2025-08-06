"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { FiUserPlus } from "react-icons/fi"; // npm install react-icons

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    setMsg("");
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMsg("🎉 Registration successful!");
      setEmail("");
      setPassword("");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="w-full max-w-md bg-white border rounded-xl shadow-xl p-6 transition-all duration-300">
      {/* Icon and Heading */}
      <div className="flex items-center justify-center mb-6">
        <FiUserPlus className="text-4xl text-green-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-800">
          Create Your Account
        </h2>
      </div>

      {/* Form Fields */}
      <div className="space-y-4">
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="password"
          placeholder="Password (min 6 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        />

        <button
          onClick={handleRegister}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-all duration-200"
        >
          Register
        </button>

        {msg && (
          <div className="text-green-600 text-sm text-center font-medium pt-2">
            {msg}
          </div>
        )}

        {error && (
          <div className="text-red-500 text-sm text-center font-medium pt-2">
            {error}
          </div>
        )}
      </div>

      {/* Decorative Image */}
      {/* <div className="mt-6 text-center">
        <img
          src="https://illustrations.popsy.co/gray/user.svg"
          alt="Register illustration"
          className="w-32 mx-auto opacity-80"
        />
      </div> */}
    </div>
  );
}
