import React from 'react'
import SignupButton from '../../../../Components/Buttons/Signup -Button/SignupButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function SectionSix() {
    return (
        <div className='py-[0.5em] px-[0.25em]  text-hero-xs sm:text-hero-sm md:text-hero-md lg:text-hero-lg bg-tint'>{/**layout */}

            <div className="mx-auto flex flex-col gap-[0.22em] items-center    text-center max-w-[100%] zulo:max-w-[80%] md:max-w-[75%]  lg:max-w-[65%]">
                <div className='text-h3-xs sm:text-h3-sm md:text-h1-md lg:text-h1-lg  '>
                    <h3 className='text-[1.2em] md:text-[0.8em]  lg:text-[0.80em] text-blackgray font-sans font-[600]  leading-[1.2em] md:leading-[1.2em] lg:leading-[1.2em]'>
                        What Makes APDT™
                    </h3>
                    <h3 className='text-[1.2em] md:text-[0.8em]  lg:text-[0.80em] text-blackgray font-sans font-[600]  leading-[1.2em] md:leading-[1.2em] lg:leading-[1.2em]'>
                        a Game-Changer?
                    </h3>
                </div>
                <div className=' text-bodyMd-xs sm:text-bodyMd-sm md:text-bodyMd-md lg:text-bodyMd-lg text-center '>
                    <p className='text-[0.95em] sm:text-[0.7em]  font-[400]   font-sans lg:text-[0.7em]  lg:leading-[28px]  font-[400] text-blackgray'>
                        Unlike ChatGPT and other general-purpose AI models APDT doesn’t just read documents, it understands them. The knowledge and accuracy of a senior broker combined with the speed and efficiency of AI.
                    </p>
                </div>
                <div className='mx-auto flex justify-between w-full items-center  mx-auto  py-[0.5em] px-[1em]   text-[12px]  md:text-[12px]  '>
                    {/* <div className="flex w-1/2 items-center gap-[0.5em] py-[1em]">
                        <FontAwesomeIcon icon={faEnvelope} className='text-mediumgray' />
                        <input className=' w-full cursos-pointer lg:text-[18px] outline-none' placeholder='Enter your email address'></input>
                    </div> */}
                    <div className='mx-auto text-bodyMd-xs sm:bodyMd-sm md:bodyMd-md lg:bodyMd-lg'>
                        {/* <button className='text-blackgray px-[0.85em] py-[0.85em] sm:px-[1.3em] sm:py-[1em]  bg-primaryyellow text-[0.65em] sm:text-[0.85em] md:text-[1em] lg-text-[0.8em] text-black font-[600] font-sans'>Signup for early access</button> */}
                        <SignupButton text='Signup for early access'/>
                    </div>

                    {/* <button className='px-[0.9em] py-[0.75em] sm:px-[1.2em] sm:py-[0.85em] md:px-[2.5em] md:py-[1.45em] bg-primaryyellow text-[0.8em] md:text-[1.1em] lg-text-[0.8em] text-black font-[600] font-sans'>Signup for early access</button> */}

                </div>
            </div>



        </div>
    )
}
