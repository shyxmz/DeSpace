import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav
      data-aos="fade-down"
      className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4 sm:py-0"
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4 text-white font-bold text-2xl">
            <img src={Logo} alt="" className="w-12" />
            <span>DeSpace</span>
          </Link>
          <div className="text-white hidden sm:block">
            <ul className="flex items-center gap-6 text-xl py-4">
              <li>
                <Link
                  to="/"
                  className="hover:underline hover:underline-offset-4 hover:text-orange-500 transition duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:underline hover:underline-offset-4 hover:text-orange-500 transition duration-200"
                >
                  Satellite
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="hover:underline hover:underline-offset-4 hover:text-orange-500 transition duration-200"
                >
                  Galaxy
                </Link>
              </li>
              <li>
                <Link
                  to="/quiz"
                  className="hover:underline hover:underline-offset-4 hover:text-orange-500 transition duration-200"
                >
                  Quiz
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <button className="text-white border-2 border-white px-3 py-1 rounded-md hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 transition duration-300 ease-in-out">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;