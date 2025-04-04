
import { faArrowLeft, faArrowRight, faColonSign, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function SectionThree() {
    return (
        <div className='px-[.15em] py-[.475em] md:px-[0.50em] lg:px-[0.65em] mb-[3.2em] sm:mb-[1.5em] lg:mb-[1.5em] text-hero-xs sm:text-hero-sm md:text-hero-md lg:text-hero-lg bg-neutralsilver'>
            <div className='flex flex-col gap-[.25em] sm:gap-[0.05em] '>
                <div className='px-[0.3em]  w-full flex sm:justify-end zulo:px-[1.4em] sm:px-[1.7em] sm:px-[0em] mx-auto text-h3-xs sm:text-h3-sm md:text-h1-md lg:text-h1-lg mb-[36px]'>
                    <h3 className='text-[1.20em] md:text-[0.60em]  lg:text-[0.80em]  text-primaryyellow font-sans font-[600]  leading-[1.2em] md:leading-[1.2em] lg:leading-[1.2em] max-w-[90%]  zulo:max-w-[60%]  sm:max-w-[50%] md:max-w-[55%] lg:max-w-[50%] justify-end   '>
                        What Our Customers Think About Us
                    </h3>
                </div>

                <div className='relative  '>
                    <div className='absolute bg-tint
                    h-[3.8em] inset-0 left-[0.055em] right-[0.055em] 
                    zulo:h-[3.8em] zulo:left-[0.28em] zulo:right-[0.28em]
                     sm:right-[55%] sm:left-[0em] sm:h-[2.5em] sm:top-[-100px]
                     md:right-[58%] md:h-[2.2em]
                     lg:right-[55%] lg:h-[2.2em]
                     md:mt-[-10px]
                     lg:mt-[-35px] flex items-end sm:justify-start justify-center gap-[0.25em]'>
                        <FontAwesomeIcon icon={faArrowLeft} className='text-xl p-1 mb-[10px] sm:mb-[-40px] lg:text-3xl  lg:mb-[-65px] bg-[#E5F1FF] lg:p-3 cursor-pointer' />
                        <FontAwesomeIcon icon={faArrowRight} className='text-xl p-1 mb-[10px] sm:mb-[-40px] lg:text-3xl  lg:mb-[-65px] bg-[#E5F1FF] lg:p-3 cursor-pointer' />
                    </div>

                    <div className=''>
                        <div className='absolute  bg-neutralblack w-[85%] zulo:w-[60%] sm:w-[55%] md:max-w-[45%] lg:w-[37%] h-[3.6em] sm:h-[2.4em] md:h-[2.1em] lg:h-[2em]  left-1/2 -translate-x-1/2 lg:left-1/3 lg:-translate-x-1/3  z-20 top-[-30px]'>
                            <div className='flex flex-col justify-center gap-[0.7em] p-[2em]   text-h3-xs sm:text-h3-sm md:text-h3-md lg:text-h3-lg'>
                                <div className='flex items-center justify-start w-full'>
                                    <FontAwesomeIcon icon={faQuoteLeft} className='text-neutralsilver text-2xl' />
                                </div>
                                <div className=''>
                                    <p className='text-[0.65em] md:text-[0.45em] text-neutralsilver font-sans leading-[1.6em]'>
                                        Manually copy pasting terms from each LOI into spreadsheets takes me anywhere from 15-20 minutes per document. Multiple LOIs ads up to hours wasted every week on. With APDT I’ve eliminated a ton of admin time that I could now spend hunting new opportunities and making connections.
                                    </p>
                                </div>
                                <div className=''>
                                    <p className='text-[0.65em] md:text-[0.45em] text-neutralsilver font-sans leading-[1.6em] font-600'>
                                        Tripp Russ
                                    </p>
                                    <p className='text-[0.65em]  md:text-[0.45em] text-neutralsilver font-sans leading-[1.6em]'>
                                        90 Ten
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='hidden lg:block absolute  bg-neutralblack w-[85%] zulo:w-[60%] sm:w-[55%] lg:w-[37%] h-[3.6em] md:h-[2em] lg:h-[2em] left-2/4 translate-x-1/3   z-20 top-[-30px]'>
                            <div className='flex flex-col gap-[0.7em] p-[2em]  text-h3-xs sm:text-h3-sm md:text-h3-md lg:text-h3-lg'>
                                <div className='flex items-center justify-start w-full'>
                                    <FontAwesomeIcon icon={faQuoteLeft} className='text-neutralsilver text-2xl' />
                                </div>
                                <div className=''>
                                    <p className='text-[0.65em] md:text-[0.45em] text-neutralsilver font-sans leading-[1.6em]'>
                                        Manually copy pasting terms from each LOI into spreadsheets takes me anywhere from 15-20 minutes per document. Multiple LOIs ads up to hours wasted every week on. With APDT I’ve eliminated a ton of admin time that I could now spend hunting new opportunities and making connections.
                                    </p>
                                </div>
                                <div className=''>
                                    <p className='text-[0.65em] md:text-[0.45em] text-neutralsilver font-sans leading-[1.6em] font-600'>
                                        Tripp Russ
                                    </p>
                                    <p className='text-[0.65em]  md:text-[0.45em] text-neutralsilver font-sans leading-[1.6em]'>
                                        90 Ten
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}



/**
 * 
 * import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
<div className=" px-[0.19em] py-[0.25em] text-hero-xs sm:text-hero-sm md:text-hero-md lg:text-hero-lg bg-neutralsilver">

            <div className='relative flex flex-col md:items-end gap-[1em] text-bodyMd-xs sm:text-bodyMd-sm md:text-bodyMd-md lg:text-bodyMd-lg bg-neutralsilver'>
                <div className='absolute inset-0 bg-tint top-[7em] left-[0.6em] right-[0.6em] bottom-[-2.5em] z-0 md:right-[65%] md:top-[10em] md:bottom-[-1em]'></div>
                <div className='max-w-[250px] md:max-w-[550px]'>
                    <h3 className='text-primaryyellow font-sans font-[600] text-h1-xs sm:text-h1-sm md:text-h1-md lg:text-h1-lg  '>What Our Customers think About Us</h3>
                </div>
                <div className='rounded-[12px] z-10 bg-neutralblack py-[2.4em]  px-[1.5em]  md:py-[3em] md:px-[2.5em] w-[80%] md:w-[40%] lg:w-[40%] mx-auto flex flex-col gap-[20px] md:mt-[200px] '>
                    <div>
                        <FontAwesomeIcon icon={faQuoteLeft} className='text-neutralsilver text-[1em]'/>
                    </div>
                    <div className=''>
                        <p className='text-neutralsilver front-sans text-[0.6em] sm:[1em] font-[400] leading-[20px] md:leading-[30px] '>
                            Manually copy pasting terms from each LOI into spreadsheets takes me anywhere from 15-20 minutes per document. Multiple LOIs ads up to hours wasted every week on. With APDT I’ve eliminated a ton of admin time that I could now spend hunting new opportunities and making connections.
                        </p>
                    </div>
                    <div className=''>
                        <p className=' text-neutralsilver front-sans text-[0.6em] sm:[1em] font-[400] leading-[20px] m-0 p-0 leading-0 tracking-0'>
                            Trip Russ<br></br>
                        </p>
                        <p className='text-neutralsilver front-sans text-[0.6em] sm:[1em] font-[400] leading-[20px] m-0 p-0 leading-0 tracking-0'>
                        90Ten
                        </p>
                    </div>
                </div>
                
            </div>

        </div>
 */