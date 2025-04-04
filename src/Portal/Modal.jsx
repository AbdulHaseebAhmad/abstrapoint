// Modal.js
import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, isOpen }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-lightwarmgray bg-opacity-[0.9] flex items-center justify-center z-50 ">
      <div className="bg-white rounded-lg shadow-lg relative w-[90%] zulo-w-[70%] sm:w-[55%] md:w-[55%] lg:w-[45%] woodo:w-[600px] ">
        {/* <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          &times;
        </button> */}
        {children}
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};

export default Modal;
