import React from "react";
import { NavLink } from "react-router-dom";
import Softball from "../images/softball.png";

export default function Banner() {
  return (
    <NavLink to="/register">
      <div className="w-full bg-cadetblue">
        <div className="text-white flex justify-between items-center p-2 w-full font-medium text-sm md:text-lg max-w-6xl mx-auto px-4">
          <div className="flex w-3/4 md:justify-start justify-between items-center text-center">
            <img alt="Early discount" src={Softball} className="w-12 mr-8" />
            <span className="hidden md:block">
              Early Registration Is Open! Only $40 until Jan 15th!
            </span>
            <span className="md:hidden">
              Early Registration Is Open! <br /> Only $40 until Jan 15th!
            </span>
          </div>
          <div className="px-4 text-white border-2 border-white py-2 rounded hidden md:block">
            <NavLink to="/register">Learn More</NavLink>
          </div>
        </div>
      </div>
    </NavLink>
  );
}
