import React from "react";

export default function WideBanner() {
  return (
    <>
      <div class="bg-softball-wide h-96 bg-cover items-center justify-evenly hidden md:flex">
        <div className="text-white opacity-80 text-8xl">6U</div>
        <div className="text-white opacity-80 text-8xl">8U</div>
        <div className="text-white opacity-80 text-8xl">10U</div>
        <div className="text-white opacity-80 text-8xl">12U</div>
        <div className="text-white opacity-80 text-8xl">16U</div>
      </div>
      <div class="items-center justify-evenly flex md:hidden bg-yellow py-4">
        <div className="text-black text-4xl">6U</div>
        <div className="text-black text-4xl">8U</div>
        <div className="text-black text-4xl">10U</div>
        <div className="text-black text-4xl">12U</div>
        <div className="text-black text-4xl">16U</div>
      </div>
    </>
  );
}
