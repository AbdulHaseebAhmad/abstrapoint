import React from 'react'
import logo from "../../assets/AbstraPointR.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import cd from "../../assets/cd.png";
import { Link } from 'react-router-dom';

export default function Footer() {
  
  return (
    <div className='px-[0.32em]  lg:px-[.45em] pt-[0.4em] pb-[0.1em] text-hero-xs sm:text-hero-sm md:text-hero-md lg:text-hero-lg bg-neutralblack'>{/**layout */}

      <div className='w-full flex gap-[2em] lg:gap-[3em] text-bodyLg-xs sm:text-bodyLg-sm md:text-bodyLg-md lg:text-bodyLg-lg'>
        <div className='h-full'>

          <div className=''>
            <img src={logo} className='h-auto  zulo:w-[50%] sm:w-[70%]' alt='footer-log' />
          </div>
          <div className='mt-[10px] md:mt-[19px]'>
            <p className='text-[0.4em] mb-[-10px] lg:text-[0.6em] text-[#FFF] font-inter'>An <span className='font-[700]'>Abstra® Company</span> Solution</p>
            <a href='https://abstracompany.com' blank="_" className='text-[0.4em] m-0 p-0 leading-0 mt-[-25px] font-[700] lg:text-[0.6em] font-sans text-[#D1D1D1]'>abstracompany.com</a>
          </div>
          <div className='md:hidden flex flex-col mt-[20px]'>
              <Link to="/abstrapoint/privacy-policy" className=' font-[300] text-[0.5em]  lg:text-[0.7em] font-sans text-[#D1D1D1] m-0 leading-0 p-0'>
                Privacy Policy
              </Link>
              <Link to="/abstrapoint/terms-and-conditions" className=' font-[300] text-[0.5em]  lg:text-[0.7em] font-sans text-[#D1D1D1] m-0 leading-0 p-0'>
                Terms of use
              </Link>
            </div>
        </div>

        <div className='h-full flex flex-col gap-[10px] md:gap-[19px]'>
          <div className=''>
            <p className='font-[700] text-[0.55em]  lg:text-[0.7em] font-sans text-neutralsilver'>Contact</p>
          </div>

          {/* <div className=''>
            <p className='font-[500] text-[0.4em]  lg:text-[0.56em] font-sans text-[#D1D1D1]'>(949) 385 3850</p>
            <p className='font-[500] text-[0.4em]  lg:text-[0.56em] font-sans text-[#D1D1D1]'>info@abstracompany.com</p>
          </div> */}
          <div className=''>
            <img src={cd} className='w-full zulo:h-[3.5em] sm:h-[2.8em] md:h-[3em] lg:h-[5em] '/>
          </div>
          {/* <div className='max-w-[150px] lg:max-w-[187px] '>
            <p className='font-[500] text-[0.4em]  lg:text-[0.56em] font-sans text-[#D1D1D1]'>Abstra Company, LLC
              14271 Jeffrey Road, Suite 383
              Irvine, California</p>
          </div> */}

          <div className='md:hidden bg-black flex items-center justify-center py-[5px] lg:px-[5px] w-[15px] lg:py-[2px] lg:px-[2px] lg:w-[10px]'>
            <FontAwesomeIcon icon={faLinkedin} className='text-neutralsilver text-[0.5em]  lg:text-xl '></FontAwesomeIcon>
          </div>
        </div>

        <div className='h-full ml-auto flex flex-col justify-between '>
          <div className='flex flex-col-reverse md:flex-row md:gap-[10px] items-end md:items-start gap-[0.5em]'>
            <p className='font-[500] text-[0.5em] lg:text-[0.56em] font-sans text-neutralsilver text-end'>
              Go to top
            </p>
            <FontAwesomeIcon icon={faArrowUp} className='text-primaryyellow text-[0.4em]  lg:text-2xl'></FontAwesomeIcon>

          </div>

          <div className='hidden md:flex md:flex-col  md:items-start ml-auto mt-[85px] md:mt-[50px] lg:mt-[65px]'>
            <div className=' w-full bg-black flex items-end justify-center py-[2px] px-[2px] max-w-[25px] lg:max-w-[35px] '>
              <FontAwesomeIcon icon={faLinkedin} className='text-neutralsilver text-[0.4em] text-xl  lg:text-3xl '></FontAwesomeIcon>
            </div>
            <div className='flex flex-col items-start mt-[10px]'>
              <Link to="/abstrapoint/privacy-policy" className=' font-[300] text-[0.4em]   lg:text-[0.56em] font-sans text-[#D1D1D1] m-0 leading-0 p-0'>
                Privacy Policy
              </Link>
              <Link to="/abstrapoint/terms-and-conditions" className=' font-[300] text-[0.4em]  lg:text-[0.56em] font-sans text-[#D1D1D1] m-0 leading-0 p-0'>
                Terms of use
              </Link>
            </div>
          </div>

        </div>
      </div>

      <div className='flex mt-[10px] lg:mt-[50px] mb-[30px]'>
        <p className=' mx-auto font-[300] text-[0.05em] lg:text-[0.05em] font-sans text-[#D1D1D1] m-0 leading-0 p-0'>
          Copyright © 2025 Abstra Company, LLC.  All rights reserved.
        </p>

      </div>
    </div>
  )
}
