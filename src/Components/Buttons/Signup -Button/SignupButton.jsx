import React , { useState } from 'react'
import Modal from '../../../Portal/Modal';
import SignupForm from "../../../Components/SignupForm/SignupForm";
export default function SignupButton({text,onck}) {

  const [showModal, setModal] = useState(false);


  return (
    <>
    <Modal isOpen={showModal} onClose={() => setModal(false)}>
    <SignupForm onClose={() => setModal(false)} />
  </Modal>
    <div className='text-bodyMd-xs sm:bodyMd-sm md:bodyMd-md lg:bodyMd-lg'>
      <button onClick={()=>setModal(true)} className='text-blackgray px-[1.3em] py-[1em]  bg-primaryyellow text-[0.8em] md:text-[1.1em] lg-text-[0.8em] text-black font-[600] font-sans'>{text}</button>
    </div></>
  )
}
