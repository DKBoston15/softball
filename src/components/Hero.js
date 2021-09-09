import React from "react";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <div className="p-20 flex justify-center min-w-full">
      <div className="flex flex-col lg:flex-row justify-between w-full max-w-6xl">
        <div className="lg:mr-24 flex justify-center items-center">
          <img
            alt="Warrior Logo"
            src={logo}
            className=" max-w-xs lg:max-w-xl"
          />
        </div>
        <div className="flex flex-col items-center lg:items-left text-center lg:text-left justify-between py-10 space-y-12">
          <h1
            style={{ "font-family": "freshman" }}
            className="tracking-wide text-6xl"
          >
            D'Iberville Girls Youth Softball League
          </h1>
          <h4 className="text-lg">
            DGYSL is dedicated to provide each girl with a positive coaching
            experience and a great learning environment. We will build skills as
            a team as well as encourage each player grow individually.
          </h4>
          <div className="flex justify-center lg:justify-start w-full">
            <NavLink
              className="px-4 text-black bg-yellow pr-8 py-4 rounded w-36"
              to="/register"
            >
              <span className="mr-4">{">"}</span>Register
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
