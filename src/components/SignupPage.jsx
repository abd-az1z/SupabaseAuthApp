import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { supabase } from "../helper/supabaseClient"; // Import your Supabase client

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false); // Success modal state
  const [errorMessage, setErrorMessage] = useState(""); // Error message state

  const navigate = useNavigate(); // Initialize navigate

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        throw new Error(error.message);
      }

      // Redirect to homepage if signup is successful
      setSignupSuccess(true); // Optional success modal
      setTimeout(() => {
        navigate("/"); // Redirect to the homepage after a short delay
      }, 2000);
    } catch (error) {
      setErrorMessage(error.message); // Display error message
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });

      if (error) {
        throw new Error(error.message);
      }

      // Redirect to homepage after successful Google signup
      navigate("/");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form
        onSubmit={handleSignup}
        className="flex flex-col items-center gap-4 w-full max-w-md p-6 shadow-md rounded-lg"
      >
        <h2 className="text-2xl font-bold text-gray-500">Sign Up</h2>

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
            className="w-full p-3 border-none rounded-lg bg-gray-200 text-gray-800 outline outline-2 outline-gray-700 focus:outline-green-500"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password Input */}
        <div className="w-full">
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-green-600 mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border-none rounded-lg bg-gray-200  text-gray-800 outline outline-2 outline-gray-700 focus:outline-green-500"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 rounded-full border text-white font-semibold hover:bg-green-500 hover:text-gray-700 transition-all duration-300"
        >
          Sign up
        </button>

        {/* Google Signup Button */}
        <button
          type="button"
          onClick={handleGoogleSignup}
          className="w-full p-3 rounded-full border text-white font-semibold hover:bg-green-600 transition-all duration-300"
        >
          Sign up with Google
        </button>

        {/* Login Link */}
        <p className="text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 hover:underline">
            Log in
          </Link>
        </p>
      </form>

      {/* Error Message Alert */}
      {errorMessage && (
        <div className="fixed bottom-4 left-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default SignupPage;
