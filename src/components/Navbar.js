import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const setMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };
  return (
    <nav className="bg-yellow fixed left-0 right-0 z-40">
      <div class="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex items-center">
            <h1 className="text-4xl tracking-widest py-3 font-extrabold">
              <NavLink className="text-3xl" to="/">
                DGYSL
              </NavLink>
            </h1>
          </div>
          {/* Desktop Nav */}
          <div className="flex items-center space-x-2 text-lg hidden md:flex">
            {/* <NavLink className="py-4 px-3" to="/about">
              About
            </NavLink> */}
            <NavLink className="py-4 px-3" to="/faq">
              FAQ
            </NavLink>
            <NavLink className="py-4 px-3" to="/contact-us">
              Contact Us
            </NavLink>
            <NavLink
              className="px-4 text-white bg-custom pr-8 py-2 rounded"
              to="/register"
            >
              <span className="mr-4">{">"}</span>Register
            </NavLink>
          </div>
          {/* Mobile Nav */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => {
                setMenu();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div>
          {/* <NavLink
            onClick={() => setMenuOpen(false)}
            className="block py-2 px-4 text-sm hover:bg-gray-200"
            to="/about"
          >
            About
          </NavLink> */}
          <NavLink
            onClick={() => setMenuOpen(false)}
            className="block py-2 px-4 text-sm hover:bg-gray-200"
            to="/faq"
          >
            FAQ
          </NavLink>
          <NavLink
            onClick={() => setMenuOpen(false)}
            className="block py-2 px-4 text-sm hover:bg-gray-200"
            to="/contact-us"
          >
            Contact Us
          </NavLink>
          <NavLink
            onClick={() => setMenuOpen(false)}
            className="block py-2 px-4 text-sm hover:bg-gray-200"
            to="/register"
          >
            Register
          </NavLink>
        </div>
      )}
    </nav>
  );
}
