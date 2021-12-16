import React from "react";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

export default function FAQ() {
  return (
    <div className="min-w-full min-h-[90vh] h-90vh">
      <div className="p-12 pt-32 flex justify-center min-w-full w-full flex-col items-center">
        <h1 className="font-bold text-5xl mb-8 mt-10 text-center">
          Frequently Asked Questions
        </h1>
        <hr className="border-4 border-yellow my-10 w-full max-w-6xl" />
        <div class="flex flex-col lg:flex-row lg:flex-wrap -mx-5 overflow-hidden max-w-6xl lg:items-center">
          <div class="my-5 px-5 lg:w-1/2 overflow-hidden">
            <div className="font-bold text-xl mb-2">Where are we located?</div>
            <div>
              Rusty Quave Sports Complex
              <br /> 15641 Hwy 15 <br />
              d'Iberville, MS 39540
            </div>
          </div>

          <div class="my-5 px-5 lg:w-1/2 overflow-hidden">
            <div className="font-bold text-xl mb-2">
              Where can we pay for registration?
            </div>
            <div>
              As soon as registration starts the link will accept your payment
              for registration.
            </div>
          </div>

          <div class="my-5 px-5 lg:w-1/2 overflow-hidden">
            <div className="font-bold text-xl mb-2">
              Can I pay for more than one child?
            </div>
            <div>
              If paying online, you can pay for more than one player with
              separate payments. If paying in person, you can pay for both
              players at once.
            </div>
          </div>

          <div class="my-5 px-5 lg:w-1/2 overflow-hidden">
            <div className="font-bold text-xl mb-2">
              What form of payments do we accept?
            </div>
            <div>
              We prefer online payments. We have a link to PayPal, VENMO, and
              will accept cash and checks when signing up in-person.
            </div>
          </div>

          <div class="my-5 px-5 lg:w-1/2 overflow-hidden">
            <div className="font-bold text-xl mb-2">
              How can I sponsor a team or my child?
            </div>
            <div>
              Thank you for your interest in supporting our players!
              <NavLink className="text-linkBlue font-semibold" to="/sponsors">
                <br />
                Check out our sponsor page here for more information.
              </NavLink>
            </div>
          </div>

          <div class="my-5 px-5 lg:w-1/2 overflow-hidden">
            <div className="font-bold text-xl mb-2">
              Will my child be allowed to "play down"?
            </div>
            <div>
              All girls will play in their designated age group, with Jan 1 as a
              deciding factor for their age group. They can "play up" in the
              next higher age group if coaches and parents agree it's in the
              best interest of said child.
            </div>
          </div>
        </div>
      </div>
      <div className="lg:mt-96 mt-8">
        <Footer />
      </div>
    </div>
  );
}
