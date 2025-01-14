import React, { useState } from "react";
import { supabase } from "../helper/supabaseClient";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    if (!email) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email);
      if (error) {
        throw new Error(error.message);
      }
      setMessage(
        "Password reset email sent! Please check your inbox for further instructions."
      );
      setErrorMessage("");
    } catch (error) {
      setMessage("");
      setErrorMessage(error.message);
    }
    setEmail("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <form
        onSubmit={handlePasswordReset}
        className="flex flex-col items-center gap-4 w-full max-w-md p-6  shadow-md rounded-lg"
      >
        <h2 className="text-2xl font-bold text-gray-200 mb-4">
          Forgot Password
        </h2>
        <p className="text-sm text-gray-300 mb-6">
          Enter your email address to reset your password.
        </p>

        {/* Email Input */}
        <div className="w-full">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-green-600 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border-none rounded-lg bg-gray-200 text-gray-900 outline outline-2 outline-gray-700 focus:outline-green-500"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 rounded-full border text-white bg-green-600 font-semibold text-sm hover:bg-green-500 transition-all duration-300"
        >
          Send Reset Email
        </button>

        {/* Success Message */}
        {message && (
          <div className="mt-4 p-3 text-green-700 bg-green-100 border border-green-400 rounded-lg">
            {message}
          </div>
        )}

        {/* Error Message */}
        {errorMessage && (
          <div className="mt-4 p-3 text-red-700 bg-red-100 border border-red-400 rounded-lg">
            {errorMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default ForgotPasswordPage;