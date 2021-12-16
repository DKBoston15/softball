import React from "react";
import Footer from "../components/Footer";

export default function Sponsors() {
  return (
    <div className="min-w-full min-h-[90vh] h-90vh">
      <div className="p-32 flex justify-center min-w-full flex-col items-center">
        <h1 className="font-bold text-5xl mb-12 mt-10 text-center">Sponsors</h1>
        <hr className="border-4 border-yellow my-10 w-full  max-w-6xl" />
        <div class="flex flex-col lg:flex-row lg:flex-wrap -mx-5 overflow-hidden max-w-6xl lg:items-center"></div>
      </div>
      <div className="lg:mt-96 mt-8">
        <Footer />
      </div>
    </div>
  );
}
