import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <nav className="bg-black left-0 right-0 text-white fixed bottom-0 inset-x-0 pb-10">
      <div class="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex flex-col justify-between pt-6">
            <h1
              className="text-4xl tracking-widest"
              style={{ "font-family": "freshman" }}
            >
              <NavLink className="text-3xl" to="/">
                DGYSL
              </NavLink>
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="48"
              height="48"
            >
              <path
                d="m75 512h167v-182h-60v-60h60v-75c0-41.355469 33.644531-75 75-75h75v60h-60c-16.542969 0-30 13.457031-30 30v60h87.292969l-10 60h-77.292969v182h135c41.355469 0 75-33.644531 75-75v-362c0-41.355469-33.644531-75-75-75h-362c-41.355469 0-75 33.644531-75 75v362c0 41.355469 33.644531 75 75 75zm-45-437c0-24.8125 20.1875-45 45-45h362c24.8125 0 45 20.1875 45 45v362c0 24.8125-20.1875 45-45 45h-105v-122h72.707031l20-120h-92.707031v-30h90v-120h-105c-57.898438 0-105 47.101562-105 105v45h-60v120h60v122h-137c-24.8125 0-45-20.1875-45-45zm0 0"
                fill="#FFFFFF"
              />
            </svg>
          </div>
          <div className="pt-6">
            <h5 className="pb-2">Contact</h5>
            <h3>DGYSL@yahoo.com</h3>
          </div>
          <div className="flex flex-col space-x-2 text-lg pt-6">
            <h5 className="pl-2 pb-2">Explore</h5>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/contact-us">Contact Us</NavLink>
            <NavLink
              className="px-4 text-black bg-yellow pr-8 py-2 rounded mt-4"
              to="/register"
            >
              <span className="mr-4">{">"}</span>Register
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
