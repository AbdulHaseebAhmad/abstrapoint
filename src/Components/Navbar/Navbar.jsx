import React, { useState } from "react";
import logo from "../../assets/logoresize.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import Modal from "../../Portal/Modal";
import SignupForm from "../SignupForm/SignupForm";
import { Link } from "react-scroll";

export default function Navbar({ bg }) {
  const navigate = useNavigate();
  const [showModal, setModal] = useState(false);

  return (
    <div
      className="       
        lg:max-w-[1207px]
        mx-auto 
        z-50
        fixed
        inset-0 
        top-0 bottom-full  lg:left-[3.3em] lg:right-[3.4em] 
        px-[1.6em] py-[1.6em]
        lg:px-[4.5em]  
        sm:text-nav-sm md:text-nav-md lg:text-nav-lg"
      style={{ background: bg }}
    >
      <Modal isOpen={showModal} onClose={() => setModal(false)}>
        <SignupForm onClose={() => setModal(false)} />
      </Modal>
      <div className=" h-full  flex items-center justify-between   px-[0em] ">
        {/** Logo container */}
        <div className="md:shrink-1">
          <img
            src={logo}
            alt="abstra-logo"
            className="cursor-pointer w-full h-auto max-w-[11em] md:max-w-[15em] md:min-w-[7em]"
            onClick={() => navigate("/abstrapoint")}
          />
        </div>
        {/** Links container */}
        <div className="hidden md:flex md:shrink-2 items- mt-[0.6em] ">
          <div className="flex shrink-2 gap-[10%]">
            <NavLink
              to="/abstrapoint"
              className="font-sans text-[0.85em] md:text-[0.75em] font-[600] text-neutralblack"
            >
              Home
            </NavLink>
            <Link
              to="testimonials"
              smooth={true}
              duration={500}
              className="font-sans text-[0.85em] md:text-[0.75em] font-[600] text-textgray cursor-pointer"
            >
              Testimonials
            </Link>
            <Link
            to="faq"
            smooth={true}
            duration={500}
             className="font-sans text-[0.85em] md:text-[0.75em] font-[600] text-textgray cursor-pointer">
              FAQs
            </Link>
            <Link 
            to="contact"
            smooth={true}
            duration={500}
            className="font-sans text-[0.85em] md:text-[0.75em] font-[600] text-textgray cursor-pointer">
              Contact
            </Link>
          </div>
        </div>
        {/** Button container */} {/**DO NOT CHANGE THIS BUTTON */}
        <div className="hidden md:flex md:shrink-5 items-center ml-[10%] border ">
          <button
            onClick={() => setModal(true)}
            className="text-[0.65em]  py-[.95em] px-[2.95em] bg-neutralblack text-neutralsilver font-sans font-[600] "
          >
            Sign up
          </button>
        </div>
        <div className="md:hidden h-[100%] flex items-center ">
          <FontAwesomeIcon icon={faBars} className="text-[1.6em]" />
        </div>
      </div>
    </div>
  );
}
