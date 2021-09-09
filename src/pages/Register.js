import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function Register() {
  const [optionChosen, setOptionChosen] = useState(false);
  const [registration, setRegistration] = useState(false);
  const [payment, setPayment] = useState(false);

  function openRegistration() {
    setRegistration(true);
    setOptionChosen(true);
  }
  function openPayment() {
    setPayment(true);
    setOptionChosen(true);
  }
  function restart() {
    setRegistration(false);
    setPayment(false);
    setOptionChosen(false);
  }

  // Form Control
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="xl:p-20 flex justify-center max-w-full">
      <div className="w-full max-w-6xl">
        {!optionChosen && (
          <div>
            <button onClick={() => openRegistration()}>Register Player</button>
            <button onClick={() => openPayment()}>Make Payment</button>
          </div>
        )}
        {/* Registration Form */}
        {registration && (
          <div className="shadow-lg rounded-md p-8 mr-4 xl:mr-0 bg-offWhite">
            <h1
              className="text-2xl xl:text-4xl tracking-widest mt-16 xl:mt-10"
              style={{ "font-family": "freshman" }}
            >
              Registration Form
            </h1>
            <br />
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="">
                <h1 className="font-bold text-xl mb-4">Player Information</h1>
                <div className="flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-24">
                  <div className="flex flex-col">
                    <label for="name" className="mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      className="px-3 py-3 relative bg-white bg-white rounded text-sm shadow focus:outline-none focus:ring-2 focus:ring-yellow"
                      {...register("Name", { required: true })}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label for="dob" className="mb-2">
                      DOB
                    </label>
                    <input
                      className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow focus:outline-none focus:ring-2 focus:ring-yellow"
                      type="date"
                      id="dob"
                      name="DOB"
                      {...register("DOB", { required: true })}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label for="age" className="mb-2">
                      Age
                    </label>
                    <input
                      className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow focus:outline-none focus:ring-2 focus:ring-yellow"
                      id="age"
                      {...register("Age", { required: true })}
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3>Experience?</h3>
                    <div>
                      <label class="inline-flex items-center mt-3 ">
                        <input
                          type="radio"
                          class="form-radio h-5 w-5"
                          id="yes"
                          name="experience"
                          value="Yes"
                          {...register("Experience", { required: true })}
                        />
                        <span class="ml-2 text-gray-700">Yes</span>
                      </label>
                      <label class="inline-flex items-center mt-3 ml-4">
                        <input
                          type="radio"
                          class="form-radio h-5 w-5 text-yellow-600"
                          id="no"
                          name="experience"
                          value="No"
                          {...register("Experience", { required: true })}
                        />
                        <span class="ml-2 text-gray-700">No</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mt-4">
                  <label for="medical-conditions" className="mb-2">
                    Allergies/Medical Conditions
                  </label>
                  <textarea
                    className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow focus:outline-none focus:ring-2 focus:ring-yellow max-w-3xl"
                    id="medical-conditions"
                    {...register("Allergies/Medical Conditions", {
                      required: true,
                    })}
                  />
                </div>
              </div>
              <hr className="border-4 border-yellow my-10" />
              <div className="">
                <h1 className="font-bold text-xl mb-4">Parent's Information</h1>
                <div className="flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-24">
                  <div className="flex flex-col">
                    <label for="parent-name" className="mb-2">
                      Parent/Guardian Name
                    </label>
                    <input
                      className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow focus:outline-none focus:ring-2 focus:ring-yellow"
                      id="parent-name"
                      {...register("Parent/Guardian Name", { required: true })}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label for="email" className="mb-2">
                      Email
                    </label>
                    <input
                      className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow focus:outline-none focus:ring-2 focus:ring-yellow"
                      id="email"
                      {...register("Email", { required: true })}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label for="phone-number" className="mb-2">
                      Phone Number
                    </label>
                    <input
                      className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow focus:outline-none focus:ring-2 focus:ring-yellow"
                      id="phone-number"
                      {...register("Phone Number", { required: true })}
                    />
                  </div>
                </div>
                <div className="flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-24">
                  <div className="flex flex-col">
                    <label for="additional-contact-name" className="mb-2 mt-4">
                      Extra Contact Name
                    </label>
                    <input
                      className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow focus:outline-none focus:ring-2 focus:ring-yellow"
                      id="additional-contact-name"
                      {...register("Additional Contact Name", {
                        required: true,
                      })}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label for="additional-phone-number" className="mb-2 mt-4">
                      Extra Phone Number
                    </label>
                    <input
                      className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow focus:outline-none focus:ring-2 focus:ring-yellow"
                      id="additional-phone-number"
                      {...register("Phone Number", { required: true })}
                    />
                  </div>
                </div>
              </div>
              <hr className="border-4 border-yellow my-10" />
              <div>
                <h1 className="font-bold text-xl mb-4">Jersey Size</h1>
                <div className="flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-20 xl:mb-4">
                  <label class="inline-flex items-center mt-3">
                    <input
                      type="radio"
                      class="form-radio h-5 w-5 text-gray-600"
                      id="youth"
                      name="jersey-size"
                      value="Youth"
                      {...register("Jersey Size", { required: true })}
                    />
                    <span class="ml-2 text-gray-700">Youth</span>
                  </label>
                  <label class="inline-flex items-center mt-3">
                    <input
                      type="radio"
                      class="form-radio h-5 w-5 text-gray-600"
                      id="adult"
                      name="jersey-size"
                      value="Adult"
                      {...register("Jersey Size", { required: true })}
                    />
                    <span class="ml-2 text-gray-700">Adult</span>
                  </label>
                  <label class="inline-flex items-center mt-3">
                    <input
                      type="radio"
                      class="form-radio h-5 w-5 text-gray-600"
                      id="xs"
                      name="jersey-size"
                      value="XS"
                      {...register("Jersey Size", { required: true })}
                    />
                    <span class="ml-2 text-gray-700">XS</span>
                  </label>
                  <label class="inline-flex items-center mt-3">
                    <input
                      type="radio"
                      class="form-radio h-5 w-5 text-gray-600"
                      id="s"
                      name="jersey-size"
                      value="S"
                      {...register("Jersey Size", { required: true })}
                    />
                    <span class="ml-2 text-gray-700">S</span>
                  </label>
                  <label class="inline-flex items-center mt-3">
                    <input
                      type="radio"
                      class="form-radio h-5 w-5 text-gray-600"
                      id="m"
                      name="jersey-size"
                      value="M"
                      {...register("Jersey Size", { required: true })}
                    />
                    <span class="ml-2 text-gray-700">M</span>
                  </label>
                  <label class="inline-flex items-center mt-3">
                    <input
                      type="radio"
                      class="form-radio h-5 w-5 text-gray-600"
                      id="lg"
                      name="jersey-size"
                      value="LG"
                      {...register("Jersey Size", { required: true })}
                    />
                    <span class="ml-2 text-gray-700">LG</span>
                  </label>
                  <label class="inline-flex items-center mt-3">
                    <input
                      type="radio"
                      class="form-radio h-5 w-5 text-gray-600"
                      id="xl"
                      name="jersey-size"
                      value="XL"
                      {...register("Jersey Size", { required: true })}
                    />
                    <span class="ml-2 text-gray-700">XL</span>
                  </label>
                  <label class="inline-flex items-center mt-3">
                    <input
                      type="radio"
                      class="form-radio h-5 w-5 text-gray-600"
                      id="xxl"
                      name="jersey-size"
                      value="XXL"
                      {...register("Jersey Size", { required: true })}
                    />
                    <span class="ml-2 text-gray-700">XXL</span>
                  </label>
                </div>
                <div className="flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-24 mt-10 xl:mt-0">
                  <div className="flex flex-col w-52">
                    <label for="jersey-1-choice" className="mb-2">
                      Jersey Number 1st Choice
                    </label>
                    <input
                      className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow focus:outline-none focus:ring-2 focus:ring-yellow w-full"
                      id="jersery-1-choice"
                      {...register("Jersey Number 1st Choice`", {
                        required: true,
                      })}
                    />
                  </div>
                  <div className="flex flex-col w-52">
                    <label for="jersey-2-choice" className="mb-2">
                      Jersey Number 2nd Choice
                    </label>
                    <input
                      className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow focus:outline-none focus:ring-2 focus:ring-yellow w-full"
                      id="jersery-2-choice"
                      {...register("Jersey Number 2nd Choice", {
                        required: true,
                      })}
                    />
                  </div>
                  <div className="flex flex-col w-52">
                    <label for="jersey-3-choice" className="mb-2">
                      Jersey Number 3rd Choice
                    </label>
                    <input
                      className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow focus:outline-none focus:ring-2 focus:ring-yellow w-full"
                      id="jersery-3-choice"
                      {...register("Jersey Number 3rd Choice", {
                        required: true,
                      })}
                    />
                  </div>
                </div>
                <hr className="border-4 border-yellow my-10" />
                <h1 className="font-bold text-xl mb-4">Spring Only</h1>
                <div className="flex flex-col x-space-24">
                  <label for="belt-size">Belt Size</label>
                  <div className="flex flex-col xl:flex-row space-y-4 xl:space-y-0">
                    <label class="inline-flex items-center mt-3">
                      <input
                        type="radio"
                        class="form-radio h-5 w-5 text-gray-600"
                        id="one-size-fits-most"
                        name="belt-size"
                        value="One Size Fits most"
                        {...register("Belt Size", { required: true })}
                      />
                      <span class="ml-2 text-gray-700">One Size Fits Most</span>
                    </label>
                    <label class="inline-flex items-center mt-3 xl:ml-4">
                      <input
                        type="radio"
                        class="form-radio h-5 w-5 text-gray-600"
                        id="adult-xl"
                        name="belt-size"
                        value="Adult XL"
                        {...register("Belt Size", { required: true })}
                      />
                      <span class="ml-2 text-gray-700">Adult XL</span>
                    </label>
                  </div>
                </div>
                <div className="flex flex-col x-space-24">
                  <div className="mt-4 flex flex-col">
                    <label for="shoe-size" className="mb-2">
                      Shoe Size
                    </label>
                    <input
                      className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow focus:outline-none focus:ring-2 focus:ring-yellow w-24"
                      id="shoe-size"
                      {...register("Shoe Size", { required: true })}
                    />
                  </div>
                  <div className="flex flex-col xl:flex-row">
                    <label class="inline-flex items-center mt-3">
                      <input
                        type="radio"
                        class="form-radio h-5 w-5 text-gray-600"
                        id="youth"
                        name="shoe-category"
                        value="Youth"
                        {...register("Shoe Category", { required: true })}
                      />
                      <span class="ml-2 text-gray-700">Youth</span>
                    </label>
                    <label class="inline-flex items-center mt-3 xl:ml-4">
                      <input
                        type="radio"
                        class="form-radio h-5 w-5 text-gray-600"
                        id="women"
                        name="shoe-category"
                        value="Women"
                        {...register("Shoe Category", { required: true })}
                      />
                      <span class="ml-2 text-gray-700">Women</span>
                    </label>
                  </div>
                </div>
              </div>
              <hr className="border-4 border-yellow my-10" />
              <h1 className="font-bold text-xl mb-4">Registration Terms</h1>
              <p>
                It is understood that the use of the facilities and/or the
                participation at d’Iberville Sports Facilities may involve the
                risk of serious injury or death. I expressly agree that all such
                activities and/or the use of the facilities shall be undertaken
                at my own risk. I represent that I am or my minor child is
                physically able to undertake all physicals activities provided
                at d’Iberville Sports Facilities. In consideration of the listed
                minor participant being permitted to participate at d’Iberville
                Sports Facilities and in activities at the complex, the
                undersigned parent(s) or guardian on behalf of the parents,
                parent’s heirs, parent’s personal representatives or assigns, do
                hereby forever release, waive, discharge, and covenant not to
                sue d’Iberville Sport Facilities (including officers, directors,
                employees, affiliated, independent contractors, coaches and
                volunteers from liability for any and all claims, demands,
                injuries, action, active or passive negligence or other cause of
                actions whatever arising out of or connected with the use of any
                of the services or facilities provided by d’Iberville Sports
                Facilities shall not be liable for any such claims.
                Participant’s parent, participant’s legal guardian, or I hereby
                consent and affirm the foregoing Liability Waiver on behalf of
                the participant's family and all other parties stated. By
                affirming and consenting to the liability waiver of risk
                agreement, it is my intention that terms of the document by and
                through my consent are as effective as if the participant were
                an adult rather than a minor. I have read the preceding
                information and my questions have been answered. I know,
                understand and acknowledge the risks associated with playing
                sports and physical activity, and I am voluntarily participating
                or allowing said minor to participate in the activities provided
                at d’Iberville Sports Facilities. In doing so, I am assuming all
                of the inherent risks of the sport.
              </p>
              <div className="mt-8 flex flex-col xl:flex-row justify-between">
                <div className="flex items-center">
                  <label for="terms_acceptance">I Accept These Terms</label>
                  <input
                    type="checkbox"
                    id="terms_acceptance"
                    name="terms"
                    value="Terms of Registration"
                    class="form-checkbox h-5 w-5 ml-4"
                  />
                </div>
                <input
                  type="submit"
                  value={">   Register"}
                  className=" px-4 text-white bg-black pr-8 py-2 rounded mt-4 xl:mt-0"
                />
              </div>
              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}
            </form>
          </div>
        )}
        {/* Payment Form */}
        {payment && (
          <div>
            Payment Form
            <br />
            <PayPalScriptProvider
              options={{
                "client-id":
                  "AVRuXtIQqrBYf2Jf08XFrItldF3jyqroFidaIUgvCLEMrhfDWldKzn5lWwnEmcWzq4iccdy3E72lWIwo",
              }}
            >
              <PayPalButtons style={{ layout: "vertical" }} />
            </PayPalScriptProvider>
          </div>
        )}
        {optionChosen && (
          <div>
            <button onClick={() => restart()}>Restart</button>
          </div>
        )}
      </div>
    </div>
  );
}
