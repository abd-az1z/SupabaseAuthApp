import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="border-b text-green-600 border-gray-300 ">
      <nav className="flex px-10 py-5 items-center justify-between">
        <Link to={"/"}>
          <h1 className="text-xl ">Auth-App</h1>
        </Link>
        <div className="space-x-5">
          <Link to="/login">
            Log in
          </Link>
          <Link to="/signup">
          SignUp
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
