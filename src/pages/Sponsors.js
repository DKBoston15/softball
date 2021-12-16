import React from "react";
import Footer from "../components/Footer";

export default function Sponsors() {
  return (
    <div className="min-w-full min-h-[90vh] h-90vh">
      <div className="p-32 flex justify-center min-w-full flex-col items-center">
        <h1 className="font-bold text-5xl mb-8 mt-10 text-center">Sponsors</h1>
        <hr className="border-4 border-yellow my-10 w-full max-w-6xl" />
        <div className="flex flex-col items-center justify-center">
          <p className="text-xl text-center max-w-6xl">
            Being a d'Iberville Youth Girls Softball sponsor can show your love
            and appreciation for our local teams. It promotes the desire for
            business owners like yourself or even an individual, to provide
            positive support for our local young ladies in youth organized
            sports. Team sponsorship, and sponsorship in general, is a great way
            to get your business name out in the public's eye and build a
            network of future clients. It shows you care enough to take the time
            and effort to give back to our next generation. Thank you for your
            support.
          </p>
          <div className="flex flex-col md:flex-row items-center md:space-x-4">
            <div className="text-xl mt-4 flex space-x-2 bg-black p-4 text-white font-semibold rounded hover:bg-cadetblue">
              <a href="/files/Sponsor-Form.pdf" download>
                Download Sponsor Form
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </div>
            <div className="text-xl mt-4 flex space-x-2 bg-black p-4 text-white font-semibold rounded hover:bg-cadetblue">
              <a href="/files/Sponsorship-Levels.pdf" download>
                Download Sponsorship Levels
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </div>
          </div>
          <hr className="border-4 border-yellow my-10 w-full max-w-6xl" />
          <div className="max-w-6xl flex flex-col items-center space-y-12">
            <span className="text-4xl font-bold">Sponsorship Levels</span>
            <div className="rounded-xl shadow-xl border-2 border-black text-center text-lg p-4 relative pt-8 w-full">
              <div className="bg-yellow rounded-full absolute -top-7 h-12 w-48 text-base md:text-2xl md:w-72 font-semibold flex items-center justify-center">
                $500 ($450 Renewal)
              </div>
              <span className="text-4xl font-semibold">World Series</span>
              <hr className="border-2 border-yellow mb-4 mt-4" />
              <ul className="space-y-2.5">
                <li>
                  Team Sponsorship, with your business name/logo on regular
                  season jersey as well as LEAGUE ALL STAR jersey
                </li>
                <li>
                  A 4X8 sign to be hung in the outfield with your business
                  name/logo proudly displayed
                </li>
                <li>
                  Business name/logo PROMINENTLY DISPLAYED on our DGYSL website
                  for the year!
                </li>
                <li>
                  Business/Name recognized at opening ceremony and closing
                  ceremony
                </li>
              </ul>
            </div>
            <div className="rounded-xl shadow-xl border-2 border-black text-center text-lg p-4 relative pt-8 w-full">
              <div className="bg-cadetblue text-white rounded-full absolute -top-7 h-12 w-48 text-base md:text-2xl md:w-72 font-semibold flex items-center justify-center">
                $400 ($350 Renewal)
              </div>
              <span className="text-4xl font-semibold">All Stars</span>
              <hr className="border-2 border-yellow mb-4 mt-4" />
              <ul className="space-y-2.5">
                <li>
                  Team Sponsorship, with your business name/logo on regular
                  season jersey
                </li>
                <li>
                  A 4X8 sign to be hung in the outfield with your business
                  name/logo proudly displayed
                </li>
                <li>
                  Business name/logo PROMINENTLY DISPLAYED on our DGYSL website
                  for the year!
                </li>
                <li>
                  Business/Name recognized at opening ceremony and closing
                  ceremony
                </li>
              </ul>
            </div>
            <div className="rounded-xl shadow-xl border-2 border-black text-center text-lg p-4 relative pt-8 w-full">
              <div className="bg-yellow rounded-full absolute -top-7 h-12 w-48 text-base md:text-2xl md:w-72 font-semibold flex items-center justify-center">
                $300 ($250 Renewal)
              </div>
              <span className="text-4xl font-semibold">Homerun Derby</span>
              <hr className="border-2 border-yellow mb-4 mt-4" />
              <ul className="space-y-2.5">
                <li>
                  Team Sponsorship, with your business name/logo on regular
                  season jersey
                </li>
                <li>
                  A 4X8 sign to be hung in the outfield with your business
                  name/logo proudly displayed
                </li>
                <li>
                  Business name/logo DISPLAYED on our DGYSL website for the
                  year!
                </li>
              </ul>
            </div>
            <div className="rounded-xl shadow-xl border-2 border-black text-center text-lg p-4 relative pt-8 w-full">
              <div className="bg-cadetblue text-white rounded-full absolute -top-7 h-12 w-48 text-base md:text-2xl md:w-72 font-semibold flex items-center justify-center">
                $200 ($150 Renewal)
              </div>
              <span className="text-4xl font-semibold">Double Play</span>
              <hr className="border-2 border-yellow mb-4 mt-4" />
              <ul className="space-y-2.5">
                <li>
                  A 4X8 sign to be hung in the outfield with your business
                  name/logo proudly displayed
                </li>
              </ul>
            </div>
            <div className="rounded-xl shadow-xl border-2 border-black text-center text-lg p-4 relative pt-8 w-full">
              <div className="bg-yellow rounded-full absolute -top-7 h-12 w-48 text-base md:text-2xl md:w-72 font-semibold flex items-center justify-center">
                $100
              </div>
              <span className="text-4xl font-semibold">Line Drive</span>
              <hr className="border-2 border-yellow mb-4 mt-4" />
              <ul className="space-y-2.5">
                <li>
                  A 4X8 sign to be hung in the outfield with your business
                  name/logo proudly displayed
                </li>
              </ul>
            </div>
            <div className="rounded-xl shadow-xl border-2 border-black text-center text-lg p-4 relative pt-8 w-full">
              <div className="bg-cadetblue text-white rounded-full absolute -top-7 h-12 w-48 text-base md:text-2xl md:w-72 font-semibold flex items-center justify-center">
                $50
              </div>
              <span className="text-4xl font-semibold">Put Me In Coach</span>
              <hr className="border-2 border-yellow mb-4 mt-4" />
              <ul className="space-y-2.5">
                <li>
                  Sponsor a child(s) registration fee. Please note the number of
                  children to be sponsored
                </li>
              </ul>
            </div>
            <div className="rounded-xl shadow-xl border-2 border-black text-center text-lg p-4 relative pt-8 w-full">
              <div className="bg-yellow rounded-full absolute -top-7 h-12 w-48 text-base md:text-2xl md:w-72 font-semibold flex items-center justify-center">
                $25 And Up
              </div>
              <span className="text-4xl font-semibold">25 And Up</span>
              <hr className="border-2 border-yellow mb-4 mt-4" />
              <ul className="space-y-2.5">
                <li>
                  Business/Name will be mentioned on the contributors page on
                  the DGYSL website.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
