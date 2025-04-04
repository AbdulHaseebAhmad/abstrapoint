import React from "react";
import logo from "../../assets/AbstraPointR.png";
import { Form } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCross, faX } from "@fortawesome/free-solid-svg-icons";

export default function SignupForm({onClose}) {
  return (
    <div className="bg-blackgray w-[100%] p-[1em] text-bodyMd-xs sm:text-bodyMd-sm md:text-bodyMd-md lg:text-bodyMd-lg overflow-y-scroll h-[500px]">
      <div className="flex justify-between items-end px-[0.15em] lg:px-[0.15em]">
        <h3 className="text-[#fff] font-sans font-[700] text-[0.7em] lg:text-[0.8em]">
          Early Access Sign Up
        </h3>
        <div className="flex flex-col items-end">
          <p className="font-sans text-[#fff] text-[0.5em] md:text-[0.625em] lg:text-[0.625em]">
            DealTracker
          </p>
          <img
            src={logo}
            alt="signup-form-log"
            className="h-auto w-full max-w-[7em] md:max-w-[9em] object-fit"
          />
        </div>
      </div>

      <div className="w-full py-[1.2em] ">
        <Form className="flex flex-col justify-center gap-[1em]">
          <div className="flex items-center gap-[5px] w-[102.5%]">
            <input
              id="fName"
              name="fName"
              placeholder="First Name"
              className="w-full py-[0.25em] px-[0.25em] outline-none placeholder:font-[700] placeholder:text-[0.7em] placeholder:italic placeholder:pl-[0.6em] text-[1em]"
              required
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
              className="w-full py-[0.25em] px-[0.25em] outline-none placeholder:font-[700] placeholder:text-[0.7em] placeholder:italic placeholder:pl-[0.6em] text-[1em]"
              required
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
              className="w-full py-[0.25em] px-[0.25em] outline-none placeholder:font-[700] placeholder:text-[0.7em] placeholder:italic placeholder:pl-[0.6em] text-[1em]"
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
              className="w-full py-[0.25em] px-[0.25em] outline-none placeholder:font-[700] placeholder:text-[0.7em] placeholder:italic placeholder:pl-[0.6em] text-[1em]"
              required
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
              className="w-full py-[0.25em] px-[0.25em] outline-none placeholder:font-[700] placeholder:text-[0.7em] placeholder:italic placeholder:pl-[0.6em] text-[1em]"
            ></input>
            <label htmlFor="phone" className="text-blackgray">
              *
            </label>
          </div>
        </Form>
        <div className="justify-self-end pr-[1em] mt-[0.65em] flex items-end gap-[4px] ">
          <span className="text-dmred text-[0.55em]">*</span>
          <p className="font-sans text-[0.55em] text-[#fff]">
            Mandatory Fields
          </p>
        </div>
      </div>

      <hr className="text-[#fff]" />

      <div className="my-[1.5em]">
        <p className="font-sans text-[0.75em] text-[#fff]">
          I am a <span className="text-dmred">*</span>
        </p>
        <ul className="mt-[0.5em] flex flex-col gap-[0.5em]">
          <li className="flex items-center gap-[1em]">
            <div className="p-[0px] px-[10px] cursor-pointer bg-[#fff] ">
              <FontAwesomeIcon icon={faX} className="text-[15px]" />
            </div>
            <p className="text-[0.6em] text-[#fff]">
              Tenant Representing Broker
            </p>
          </li>
          <li className="flex items-center gap-[1em]">
            <div className="p-[1px] px-[10px] cursor-pointer bg-[#fff] ">
              <FontAwesomeIcon icon={faX} className="text-[15px]" />
            </div>
            <p className="text-[0.6em] text-[#fff]">
              Landlord Representing Broker
            </p>
          </li>
          <li className="flex items-center gap-[1em]">
            <div className="p-[1px] px-[10px] cursor-pointer bg-[#fff] ">
              <FontAwesomeIcon icon={faX} className="text-[15px]" />
            </div>
            <p className="text-[0.6em] text-[#fff]">Tenant</p>
          </li>
          <li className="flex items-center gap-[1em]">
            <div className="p-[1px] px-[10px] cursor-pointer bg-[#fff] ">
              <FontAwesomeIcon icon={faX} className="text-[15px]" />
            </div>
            <p className="text-[0.6em] text-[#fff]">Landlord</p>
          </li>
        </ul>
      </div>

      <hr className="text-[#fff]" />

      <div className="py-[1em]">
        <p className="font-sans text-[#fff] text-[0.5em]">
          We are expecting to release a commercial version of AbstraPoint™
          DealTracker™ (APDT™) within the next few weeks. Would you like to sign
          up becoming a beta-user for us? <span className="font-[700] cursor-pointer">Learn More</span>
        </p>
        <div className="flex items-center mt-[0.5em] gap-[0.5em]">
        <div className="p-[1px] px-[10px] cursor-pointer bg-[#fff] ">
              <FontAwesomeIcon icon={faX} className="text-[15px]" />
            </div>
            <p className="text-[0.8em] text-[#fff]">Yes, I would love to be a beta users for APDT™!</p>
          </div>
      </div>

      <hr className="text-[#fff]" />

      <div className="w-full py-[1em] flex justify-between items-center">
        <div className="w-[35%]">
          <p className="text-[0.5em] text-[#fff]">
          All information provided is kept confidential and not shared with any third-party.
          </p>
        </div>
        <div className="flex gap-[10px]">
            <button className="font-sans text-[0.8em] bg-[#fff] text-blackgray p-2 px-4 font-[600] rounded-[5px]" onClick={()=>onClose()}>Cancel</button>
            <button className="font-sans text-[0.8em] bg-primaryyellow text-blackgray p-2 px-4 font-[600] rounded-[5px]">Submit</button>
        </div>
      </div>
    </div>
  );
}
