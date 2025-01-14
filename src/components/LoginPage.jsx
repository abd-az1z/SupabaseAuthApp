import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../helper/supabaseClient";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const navigate = useNavigate();

  // Redirect if the user is already logged in
  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        navigate("/"); // Redirect to homepage if logged in
      }
    };
    checkUser();
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
      return;
    }

    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw new Error(error.message);
      }

      setLoginSuccess(true);
      setErrorMessage("");

      // Redirect to homepage after successful login
      navigate("/");
    } catch (error) {
      setErrorMessage(error.message);
      setLoginSuccess(false);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleLogin}
        className="flex flex-col items-center gap-4 w-full max-w-md p-6 shadow-md rounded-lg"
      >
        <h2 className="text-2xl font-bold text-gray-700">Log In</h2>

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
            className="w-full p-3 border-none rounded-lg text-gray-900 bg-gray-200 outline outline-2 outline-gray-700 focus:outline-green-500"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Forgot Password Link */}
        <div className="w-full text-right">
          <a href="/forgot-password" className="text-sm text-gray-400 hover:text-green-600">
            Forgot password?
          </a>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex items-center justify-center p-3 rounded-full border text-white font-semibold text-sm hover:bg-green-500 hover:text-gray-700 transition-all duration-300"
        >
          Log in
        </button>

        {/* Sign Up Link */}
        <p className="text-sm text-gray-400">
          Don't have an account?{" "}
          <Link to="/signup" className="text-green-600 hover:underline">
            Sign up
          </Link>
        </p>
      </form>

      {/* Login Success Message */}
      {loginSuccess && (
        <div className="fixed bottom-4 left-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
          Login successful! Redirecting...
        </div>
      )}

      {/* Error Message Alert */}
      {errorMessage && (
        <div className="fixed bottom-4 left-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default LoginPage;
