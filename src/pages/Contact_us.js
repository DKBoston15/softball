import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Footer from "../components/Footer";
import emailjs from "emailjs-com";
import Alert from "../components/Alert";

export default function Contact_us() {
  // const { EMAILJS_SERVICE_ID, EMAILJS_USER_ID, PAYPAL_CLIENT_ID } = process.env;
  const [showAlert, setShowAlert] = useState(false);

  // Form Control
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const templateParams = {
      Name: data.Name,
      DOB: data.DOB,
      Age: data.Age,
      Experience: data.Experience,
      "Allergies/Medical Conditions": data["Allergies/Medical Conditions"],
      "Parent/Guardian Name": data["Parent/Guardian Name"],
      Email: data.Email,
      "Phone Number": data["Phone Number"],
      "Additional Contact Name": data["Additional Contact Name"],
      "Additional Phone Number": data["Additional Phone Number"],
      "Jersey Type": data["Jersey Type"],
      "Jersey Size": data["Jersey Size"],
      "Jersey Number 1st Choice": data["Jersey Number 1st Choice"],
      "Jersey Number 2nd Choice": data["Jersey Number 2nd Choice"],
      "Jersey Number 3rd Choice": data["Jersey Number 3rd Choice"],
    };
    console.log(templateParams);
    emailjs
      .sendForm(
        "service_pmvm61d",
        "template_2n5912c",
        "#registration",
        "user_mTmWvnNQd1mBMgl7m6UkZ"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div className="min-w-full min-h-[90vh] h-90vh">
      <div className="pt-16 lg:p-20 flex justify-center max-w-full">
        <div className="w-full max-w-6xl">
          <h1 className="font-bold text-5xl mb-12 mt-10 text-center">
            We'd love to hear from you
          </h1>
          <hr className="border-4 border-yellow my-10" />
          <div className="shadow-lg rounded-md p-8 mr-4 xl:mr-0 bg-offWhite">
            <h1
              className="text-2xl xl:text-4xl tracking-widest mt-4 xl:mt-10"
              style={{ "font-family": "freshman" }}
            >
              Contact Us
            </h1>
            <br />
            <form
              onSubmit={handleSubmit(onSubmit)}
              data-netlify="true"
              name="registration"
              method="post"
              id="registration"
            >
              <input type="hidden" name="form-name" value="registration" />
              <div>
                <div className="flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-24">
                  <div className="flex flex-col w-full">
                    <label for="name" className="mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      className="px-3 py-3 relative bg-white bg-white rounded text-sm shadow focus:outline-none focus:ring-2 focus:ring-yellow"
                      {...register("Name", { required: true })}
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label for="email" className="mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow focus:outline-none focus:ring-2 focus:ring-yellow"
                      id="email"
                      name="Email"
                      {...register("Email", { required: true })}
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-4 w-full">
                  <label for="message" className="mb-2">
                    Message
                  </label>
                  <textarea
                    className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow focus:outline-none focus:ring-2 focus:ring-yellow"
                    id="message"
                    {...register("Message", {})}
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-col xl:flex-row justify-between">
                <input
                  type="submit"
                  value={">   Submit"}
                  className=" px-4 text-white bg-black pr-8 py-2 rounded mt-4 xl:mt-0 cursor-pointer"
                />
              </div>
              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
