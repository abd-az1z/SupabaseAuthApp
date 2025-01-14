import React, { useEffect, useState } from "react";
import { supabase } from "../helper/supabaseClient";

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check user authentication status
  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setIsLoggedIn(!!user); // Set true if user exists
    };

    checkUser();

    // Subscribe to auth state changes
    const { subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(!!session?.user); // Update state on auth changes
    });

    return () => {
      subscription?.unsubscribe(); // Cleanup subscription
    };
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error("Logout failed:", error.message);
    else {
      console.log("User logged out.");
      setIsLoggedIn(false); // Update state
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Auth-App</h1>
        <p className="text-lg text-gray-400 mb-6">
          A simple authentication system built with React and Supabase.
        </p>

        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="p-3 rounded-full border text-white px-10 py-2 font-semibold  hover:bg-red-700 hover:text-gray-200 transition-all duration-300"
          >
            Logout
          </button>
        ) : (
          <p className="text-gray-400">You are not logged in.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;