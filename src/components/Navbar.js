import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink activeClassName="active" to="/about">
        About
      </NavLink>
      <NavLink to="/faq">FAQ</NavLink>
      <NavLink to="/contact-us">Contact Us</NavLink>
    </nav>
  );
}
