import React from 'react'

export default function SignupButton({text}) {
  return (
    <div className='text-bodyMd-xs sm:bodyMd-sm md:bodyMd-md lg:bodyMd-lg'>
      <button className='text-blackgray px-[1.3em] py-[1em]  bg-primaryyellow text-[0.8em] md:text-[1.1em] lg-text-[0.8em] text-black font-[600] font-sans'>{text}</button>
    </div>
  )
}
