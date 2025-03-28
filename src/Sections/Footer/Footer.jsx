import React from 'react'
import logo from "../../assets/logoresize.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className='px-[.55em] pt-[0.4em] pb-[0.1em] text-hero-xs sm:text-hero-sm md:text-hero-md lg:text-hero-lg bg-neutralblack'>{/**layout */}

      <div className='w-full flex gap-[1em] text-bodyLg-xs sm:text-bodyLg-sm md:text-bodyLg-md lg:text-bodyLg-lg'>
        <div className='h-full'>

          <div className=''>
            <img src={logo} className='h-auto w-[70%]' alt='footer-log' />
          </div>
          <div className='lg:mt-[19px]'>
            <p className='lg:text-[0.9em] text-[#FFF] font-inter'>An <span className='font-[700]'>Abstra® Company</span> Solution</p>
            <p className='font-[700] lg:text-[0.9em] font-sans text-[#D1D1D1]'>abstracompany.com</p>
          </div>
        </div>

        <div className='h-full flex flex-col gap-[19px]'>
          <div className=''>
            <p className='font-[700] lg:text-[0.9em] font-sans text-neutralsilver'>Contact</p>
          </div>

          <div className=''>
            <p className='font-[500] lg:text-[0.8em] font-sans text-[#D1D1D1]'>(949) 385 3850</p>
            <p className='font-[500] lg:text-[0.8em] font-sans text-[#D1D1D1]'>info@abstracompany.com</p>
          </div>
          <div className='lg:max-w-[217px]'>
            <p className='font-[500] lg:text-[0.8em] font-sans text-[#D1D1D1]'>Abstra Company, LLC
              14271 Jeffrey Road, Suite 383
              Irvine, California</p>
          </div>
        </div>

        <div className='h-full ml-auto flex flex-col justify-between '>
          <div className='flex gap-[10px] items-end'>
            <p className='font-[500] lg:text-[0.8em] font-sans text-neutralsilver '>
              Go to top
            </p>
            <FontAwesomeIcon icon={faArrowUp} className='text-primaryyellow text-2xl'></FontAwesomeIcon>

          </div>

          <div className='ml-auto mt-[65px]'>
            <div className='bg-black flex items-end justify-center py-[0.15em] px-[0.15em] max-w-[1.5em]'>
              <FontAwesomeIcon icon={faLinkedin} className='text-neutralsilver text-xl'></FontAwesomeIcon>
            </div>
            <div className='flex flex-col mt-[10px]'>
            <a className='font-[300] lg:text-[0.8em] font-sans text-[#D1D1D1] m-0 leading-0 p-0'>
              Privacy Policy
            </a>
            <a className='font-[300] lg:text-[0.8em] font-sans text-[#D1D1D1] m-0 leading-0 p-0'>
              Terms of use
            </a>
            </div>
          </div>

        </div>
      </div>

      <div className='flex  lg:mt-[50px] '>
            <p className=' mx-auto font-[300] lg:text-[0.07em] font-sans text-[#D1D1D1] m-0 leading-0 p-0'>
            Copyright © 2025 Abstra Company, LLC.  All rights reserved.
            </p>

      </div>
    </div>
  )
}
