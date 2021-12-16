import React from "react";
import Bats from "../images/bats.png";

export default function QuoteSection() {
  return (
    <div className="bg-labelGray flex justify-center">
      <div className="max-w-6xl w-full flex justify-evenly p-4 lg:p-16 text-xl">
        <div>
          <img
            src={Bats}
            alt="Softball Bats"
            className="transform -rotate-12 hidden lg:flex"
          />
        </div>
        <div className="p-4" style={{ "max-width": "750px" }}>
          <svg
            className="hidden absolute lg:flex"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            width="64px"
            height="64px"
            viewBox="0 0 123.961 123.961"
            style={{ "enable-background": "new 0 0 123.961 123.961" }}
          >
            <g>
              <path
                d="M49.8,29.032c3.1-1.3,4.4-5,3-8l-4.9-10.3c-1.4-2.899-4.8-4.2-7.8-2.899c-8.5,3.6-15.8,8.3-21.6,14   C11.4,28.532,6.6,36.232,4,44.732c-2.6,8.601-4,20.3-4,35.2v30.7c0,3.3,2.7,6,6,6h39.3c3.3,0,6-2.7,6-6v-39.3c0-3.301-2.7-6-6-6   H26.5c0.2-10.101,2.6-18.2,7-24.301C37.1,36.133,42.5,32.133,49.8,29.032z"
                fill="#FBC42D"
              />
              <path
                d="M120.4,29.032c3.1-1.3,4.399-5,3-8l-4.9-10.199c-1.4-2.9-4.8-4.2-7.8-2.9c-8.4,3.6-15.601,8.3-21.5,13.9   c-7.101,6.8-12,14.5-14.601,23c-2.6,8.399-3.899,20.1-3.899,35.1v30.7c0,3.3,2.7,6,6,6H116c3.3,0,6-2.7,6-6v-39.3   c0-3.301-2.7-6-6-6H97.1c0.2-10.101,2.601-18.2,7-24.301C107.7,36.133,113.1,32.133,120.4,29.032z"
                fill="#FBC42D"
              />
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>

          <div className="text-center mt-4 lg:mt-8 lg:ml-20 ">
            <span className="lg:hidden">"</span>
            DGYSL is a 100% non-profit organization ran by volunteers with the
            assistance of our local city officials in d'Iberville. We strive to
            always be an example that our players, parents, and our community
            can be proud of. The safety of all our children us the utmost
            priority for us at DGYSL. We are eagerly waiting to get started with
            Spring Seasons 2022. Feel free to contact us via email at
            dgysl@yahoo.com with any questions or concerns that you may have.
            Now let's Go Lady Warriors! <span className="lg:hidden">"</span>
          </div>

          <div className="font-bold italic mt-4 lg:mt-8 text-center lg:text-right mb-4">
            - The d'Ibervile Girls Youth Softball League Board
          </div>
        </div>
      </div>
    </div>
  );
}
