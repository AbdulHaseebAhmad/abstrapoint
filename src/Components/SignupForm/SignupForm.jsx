import React, { useState } from "react";
import logo from "../../assets/AbstraPointR.png";
import { Form } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCross, faX } from "@fortawesome/free-solid-svg-icons";

export default function SignupForm({ onClose }) {
  const [formData, setFormData] = useState({
    "Tenant Representing Broker": "yes",
  });

  const typeHandle = (e) => {
    const { name } = e.target;
    setFormData((prevValue) => {
      const updated = { ...prevValue };
      if (updated.hasOwnProperty(name)) {
        delete updated[name];
        return { ...updated };
      } else {
        return { ...updated, [name]: "yes" };
      }
    });
  };

  const onChangeHandle = (e) => {
    const { name, value } = e.target;
    setFormData((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  const submitHandle = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="bg-blackgray w-[100%] p-[2em] text-bodyMd-xs sm:text-bodyMd-sm md:text-bodyMd-md lg:text-bodyMd-lg overflow-y-scroll   scrollbar-hide h-[99vh] max-h-[950px]">
      <div className="flex justify-between items-end px-[0.15em] lg:px-[0px] lg:pr-[0.2em]">
        <h3 className="text-[#fff] font-sans font-[700] text-[0.525em] lg:text-[0.65em]">
          Early Access Sign Up
        </h3>
        <div className="flex flex-col items-end">
          <p className="font-sans text-[#fff] text-[0.5em] md:text-[0.625em] lg:text-[0.47em]">
            DealTracker
          </p>
          <img
            src={logo}
            alt="signup-form-log"
            className="h-auto w-full max-w-[7em] md:max-w-[6.75em] object-fit"
          />
        </div>
      </div>

      <div className="w-full pt-[1.2em] pb-[0.7em] ">
        <Form
          className="flex flex-col justify-center gap-[0.75em]"
          onSubmit={submitHandle}
        >
          <div className="flex items-center gap-[5px] w-[102.5%]">
            <input
              id="fName"
              name="fName"
              placeholder="First Name"
              className="h-[1.95em] w-full py-[0.15em] px-[0.25em] outline-none placeholder:font-[400] placeholder:text-[0.75em]  placeholder:pl-[0.6em] text-[0.75em]"
              required
              onChange={onChangeHandle}
            ></input>
            <label htmlFor="fName" className="text-dmred">
              *
            </label>
          </div>
          <div className="flex items-center gap-[5px] w-[102.5%]">
            <input
              id="lName"
              name="lName"
              placeholder="Last Name"
              className="h-[1.95em] w-full py-[0.15em] px-[0.25em] outline-none placeholder:font-[400] placeholder:text-[0.75em]  placeholder:pl-[0.6em] text-[0.75em]"
              required
              onChange={onChangeHandle}
            ></input>
            <label htmlFor="lName" className="text-dmred">
              *
            </label>
          </div>
          <div className="flex items-center gap-[5px] w-[102.5%]">
            <input
              id="company"
              name="company"
              placeholder="Company"
              className="h-[1.95em] w-full py-[0.15em] px-[0.25em] outline-none placeholder:font-[400] placeholder:text-[0.75em]  placeholder:pl-[0.6em] text-[0.75em]"
              onChange={onChangeHandle}
            ></input>
            <label htmlFor="company" className="text-blackgray ">
              *
            </label>
          </div>
          <div className="flex items-center gap-[5px] w-[102.5%]">
            <input
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              className="h-[1.95em] w-full py-[0.15em] px-[0.25em] outline-none placeholder:font-[400] placeholder:text-[0.75em]  placeholder:pl-[0.6em] text-[0.75em]"
              required
              onChange={onChangeHandle}
            ></input>
            <label htmlFor="email" className="text-dmred">
              *
            </label>
          </div>
          <div className="flex items-center gap-[5px] w-[102.5%]">
            <input
              id="phone"
              name="phone"
              placeholder="Mobile Phone"
              className="h-[1.95em] w-full py-[0.15em] px-[0.25em] outline-none placeholder:font-[400] placeholder:text-[0.75em]  placeholder:pl-[0.6em] text-[0.75em]"
              onChange={onChangeHandle}
            ></input>
            <label htmlFor="phone" className="text-blackgray">
              *
            </label>
          </div>
          <div className="ml-auto pr-[1em]  flex items-start gap-[4px] ">
            <span className="text-dmred flex items-center  h-[30px]">*</span>
            <p className="font-sans text-[0.55em] text-[#fff]">
              Mandatory Fields
            </p>
          </div>
          <hr className="text-[#fff] mt-[-10px]" />
          <div className="">
            <p className="font-sans text-[0.6em] text-[#fff] mb-[0.5em]">
              I am a <span className="text-dmred">*</span>
            </p>
            <ul className=" flex flex-col gap-[0.5em]">
              <li className="flex items-center gap-[1em]">
                <button
                  name="Tenant Representing Broker"
                  className="w-[30px] h-[30px] cursor-pointer bg-[#fff] flex justify-center items-center  "
                  onClick={(e) => typeHandle(e)}
                >
                  {formData.hasOwnProperty("Tenant Representing Broker") && (
                    <FontAwesomeIcon icon={faX} className="text-[12px]" />
                  )}
                </button>
                <p className="font-sans text-[0.6em] text-[#fff]">
                  Tenant Representing Broker
                </p>
              </li>
              <li className="flex items-center gap-[1em]">
                <button
                  name="Landlord Representing Broker"
                  className="w-[30px] h-[30px] cursor-pointer bg-[#fff] flex justify-center items-center  "
                  onClick={(e) => typeHandle(e)}
                >
                  {formData.hasOwnProperty("Landlord Representing Broker") && (
                    <FontAwesomeIcon icon={faX} className="text-[12px]" />
                  )}
                </button>
                <p className="font-sans text-[0.6em] text-[#fff]">
                  Landlord Representing Broker
                </p>
              </li>
              <li className="flex items-center gap-[1em]">
                <button
                  name="Tenant"
                  className="w-[30px] h-[30px] cursor-pointer bg-[#fff] flex justify-center items-center  "
                  onClick={(e) => typeHandle(e)}
                >
                  {formData.hasOwnProperty("Tenant") && (
                    <FontAwesomeIcon icon={faX} className="text-[12px]" />
                  )}
                </button>
                <p className="font-sans text-[0.6em] text-[#fff]">Tenant</p>
              </li>
              <li className="flex items-center gap-[1em]">
                <button
                  name="Landlord"
                  className="w-[30px] h-[30px] cursor-pointer bg-[#fff] flex justify-center items-center  "
                  onClick={(e) => typeHandle(e)}
                >
                  {formData.hasOwnProperty("Landlord") && (
                    <FontAwesomeIcon icon={faX} className="text-[12px]" />
                  )}
                </button>
                <p className="font-sans text-[0.6em] text-[#fff]">Landlord</p>
              </li>
            </ul>
          </div>

          <hr className="text-[#fff] mt-[10px] mb-[-10px]" />

          <div className="pt-[0.5em]">
            <p className="font-sans text-[#fff] text-[0.6em]">
              We are expecting to release a commercial version of AbstraPoint™
              DealTracker™ (APDT™) within the next few weeks. Would you like to
              sign up becoming a beta-user for us?{" "}
              <span className="font-[700] cursor-pointer">Learn More</span>
            </p>
            <div className="flex items-center mt-[0.5em] gap-[0.5em]">
              <button
                name="subscribe"
                className="w-[30px] h-[30px] cursor-pointer bg-[#fff] flex justify-center items-center  "
                onClick={(e) => typeHandle(e)}
              >
                {" "}
                {formData.hasOwnProperty("subscribe") && (
                  <FontAwesomeIcon icon={faX} className="text-[12px]" />
                )}
              </button>
              <p className="font-sans text-[0.6em] text-[#fff] font-bold">
                Yes, I would love to be a beta user for APDT™!
              </p>
            </div>
          </div>

          <hr className="text-[#fff]  mt-[5px] mb-[-10px]" />

          <div className="w-full pt-[0.4em] flex justify-between items-center">
            <div className="w-[35%]">
              <p className="text-[0.5em] text-[#fff]">
                All information provided is kept confidential and not shared
                with any third-party.
              </p>
            </div>
            <div className="flex gap-[10px]">
              <button
                className="font-sans text-[0.6em] bg-[#fff] text-blackgray p-[11px] px-[20px] font-[600] rounded-[5px]"
                onClick={() => onClose()}
              >
                Cancel
              </button>
              <button className="font-sans text-[0.6em] bg-primaryyellow text-blackgray p-[11px] px-[20px] font-[600] rounded-[5px]">
                Submit
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
