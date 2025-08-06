"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { FiMail, FiLock } from "react-icons/fi";
import { syncFirebaseCartToLocal } from "@/services/cartServices";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setMsg("");
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMsg("✅ Login successful!");
      setEmail("");
      setPassword("");
      syncFirebaseCartToLocal();
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="space-y-5">
      <div className="relative">
        <FiMail className="absolute top-3 left-3 text-gray-400" />
        <input
          type="email"
          placeholder="Email"
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="relative">
        <FiLock className="absolute top-3 left-3 text-gray-400" />
        <input
          type="password"
          placeholder="Password"
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
      >
        Login
      </button>
      {msg && <p className="text-sm text-green-600 text-center">{msg}</p>}
      {error && <p className="text-sm text-red-600 text-center">{error}</p>}
    </div>
  );
}
