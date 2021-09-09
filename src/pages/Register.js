import React, { useState } from "react";
import { useForm } from "react-hook-form";

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
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="p-20 flex justify-center min-w-full flex-col">
      {!optionChosen && (
        <div>
          <button onClick={() => openRegistration()}>Register Player</button>
          <button onClick={() => openPayment()}>Make Payment</button>
        </div>
      )}
      {/* Registration Form */}
      {registration && (
        <div>
          Registration Form
          <br />{" "}
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Player Information</h1>
            <label for="name">Name</label>
            <input id="name" {...register("Name", { required: true })} />
            <label for="dob">DOB</label>
            <input
              type="date"
              id="dob"
              name="DOB"
              {...register("DOB", { required: true })}
            />
            <label for="age">Age</label>
            <input id="age" {...register("Age", { required: true })} />
            <h3>Experience?</h3>
            <label for="yes">Yes</label>
            <input
              {...register("Experience", { required: true })}
              type="radio"
              id="yes"
              name="experience"
              value="Yes"
            />
            <label for="no">No</label>
            <input
              {...register("Experience", { required: true })}
              type="radio"
              id="no"
              name="experience"
              value="No"
            />
            <label for="medical-conditions">Allergies/Medical Conditions</label>
            <textarea
              id="medical-conditions"
              {...register("Allergies/Medical Conditions", { required: true })}
            />
            <h1>Parent's Information</h1>
            <label for="parent-name">Parent/Guardian Name</label>
            <input
              id="parent-name"
              {...register("Parent/Guardian Name", { required: true })}
            />
            <label for="email">Email</label>
            <input id="email" {...register("Email", { required: true })} />
            <label for="phone-number">Phone Number:</label>
            <input
              id="phone-number"
              {...register("Phone Number", { required: true })}
            />
            <label for="additional-contact-name">Additional Contact Name</label>
            <input
              id="additional-contact-name"
              {...register("Additional Contact Name", { required: true })}
            />
            <label for="additional-phone-number">
              Additional Phone Number:
            </label>
            <input
              id="additional-phone-number"
              {...register("Phone Number", { required: true })}
            />
            <h1>Jersey Size</h1>
            <label for="jersey-size">Jersey Size</label>
            <input
              {...register("Jersey Size", { required: true })}
              type="radio"
              id="Youth"
              name="jersery-size"
              value="Youth"
            />
            <input
              {...register("Jersey Size", { required: true })}
              type="radio"
              id="Adult"
              name="jersery-size"
              value="Adult"
            />
            <input
              {...register("Jersey Size", { required: true })}
              type="radio"
              id="XS"
              name="jersery-size"
              value="XS"
            />
            <input
              {...register("Jersey Size", { required: true })}
              type="radio"
              id="S"
              name="jersery-size"
              value="S"
            />
            <input
              {...register("Jersey Size", { required: true })}
              type="radio"
              id="M"
              name="jersery-size"
              value="M"
            />
            <input
              {...register("Jersey Size", { required: true })}
              type="radio"
              id="L"
              name="jersery-size"
              value="L"
            />
            <input
              {...register("Jersey Size", { required: true })}
              type="radio"
              id="XL"
              name="jersery-size"
              value="XL"
            />
            <input
              {...register("Jersey Size", { required: true })}
              type="radio"
              id="XXL"
              name="jersery-size"
              value="XXL"
            />
            <label for="jersey-1-choice">Jersey Number 1st Choice</label>
            <input
              id="jersery-1-choice"
              {...register("Jersey Number 1st Choice`", { required: true })}
            />
            <label for="jersey-2-choice">Jersey Number 2nd Choice:</label>
            <input
              id="jersery-2-choice"
              {...register("Jersey Number 2nd Choice", { required: true })}
            />
            <label for="jersey-3-choice">Jersey Number 3rd Choice:</label>
            <input
              id="jersery-3-choice"
              {...register("Jersey Number 3rd Choice", { required: true })}
            />
            <h1>Spring Only</h1>
            <label for="belt-size">Belt Size</label>
            <input
              {...register("Jersey Size", { required: true })}
              type="radio"
              id="One size fits most"
              name="belt-size"
              value="One size fits most"
            />
            <input
              {...register("Jersey Size", { required: true })}
              type="radio"
              id="Adult XL"
              name="belt-size"
              value="Adult XL"
            />
            <label for="shoe-size">Shoe Size</label>
            <input
              id="shoe-size"
              {...register("Shoe Size", { required: true })}
            />
            <input
              {...register("Shoe Size Category", { required: true })}
              type="radio"
              id="youth"
              name="shoe-size"
              value="Youth"
            />
            <input
              {...register("Shoe Size Category", { required: true })}
              type="radio"
              id="women"
              name="shoe-size"
              value="Women"
            />
            <p>
              It is understood that the use of the facilities and/or the
              participation at d’Iberville Sports Facilities may involve the
              risk of serious injury or death. I expressly agree that all such
              activities and/or the use of the facilities shall be undertaken at
              my own risk. I represent that I am or my minor child is physically
              able to undertake all physicals activities provided at d’Iberville
              Sports Facilities. In consideration of the listed minor
              participant being permitted to participate at d’Iberville Sports
              Facilities and in activities at the complex, the undersigned
              parent(s) or guardian on behalf of the parents, parent’s heirs,
              parent’s personal representatives or assigns, do hereby forever
              release, waive, discharge, and covenant not to sue d’Iberville
              Sport Facilities (including officers, directors, employees,
              affiliated, independent contractors, coaches and volunteers from
              liability for any and all claims, demands, injuries, action,
              active or passive negligence or other cause of actions whatever
              arising out of or connected with the use of any of the services or
              facilities provided by d’Iberville Sports Facilities shall not be
              liable for any such claims. Participant’s parent, participant’s
              legal guardian, or I hereby consent and affirm the foregoing
              Liability Waiver on behalf of the participant's family and all
              other parties stated. By affirming and consenting to the liability
              waiver of risk agreement, it is my intention that terms of the
              document by and through my consent are as effective as if the
              participant were an adult rather than a minor. I have read the
              preceding information and my questions have been answered. I know,
              understand and acknowledge the risks associated with playing
              sports and physical activity, and I am voluntarily participating
              or allowing said minor to participate in the activities provided
              at d’Iberville Sports Facilities. In doing so, I am assuming all
              of the inherent risks of the sport.
            </p>
            <label for="terms_acceptance">Registration Terms</label>
            <input
              type="checkbox"
              id="terms_acceptance"
              name="terms"
              value="Terms of Registration"
            />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input type="submit" />
          </form>
        </div>
      )}
      {/* Payment Form */}
      {payment && <div>Payment Form</div>}
      {optionChosen && (
        <div>
          <button onClick={() => restart()}>Restart</button>
        </div>
      )}
    </div>
  );
}
