// import { faPlay } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import url from "../../assets/sectionTwoBanner.jpg";
import video from "../../assets/video.mp4"
import logo from "../../assets/logoresize.svg";
import React from 'react'
import SignupButton from "../../Components/Buttons/Signup -Button/SignupButton";
import VerticalLine from '../../Components/VerticalLines/VerticalLine';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function SectionTwo() {
    return (
        <div className="px-[0.25em] md:px-[.47em] py-[0.25em] md:pl-[0.7em] md:pr-[0.25em] text-hero-xs sm:text-hero-sm md:text-hero-md lg:text-hero-lg bg-neutralsilver">
            <div className='relative bg-neutralsilver   '>

                {/* <img className="w-full h-auto relative z-20 max-w-[955px] max-h-[700px]" src={url} /> */}
                <video controls autoPlay={true} className="w-full h-auto relative z-20 max-w-[955px] max-h-[700px]">
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* <div className='absolute top-[22%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30'>
                    <FontAwesomeIcon icon={faPlay} className='text-[#777] text-[0.45em]' />
                </div> */}

                <div className='z-30
                relative
                max-w-[260px] 
                zulo:max-w-[290px] 
                sm:max-w-[310px] 
                md:max-w-[330px] 
                lg:max-w-[400px]
                woodo:h-[205px] woodo:max-w-[440px]

                py-[0.6em] px-[1.4em]
               
                woodo:px-[1.45em] woodo:pr-[2.7em] woodo:pt-[0.7em]

                mt-[24px] woodo:gap-[0px]  lg:mt-[45px]

                zulo:ml-[6vw]  sm:ml-[6.5vw] md:ml-[2.5vw] lg:ml-[0.5vw]

                flex flex-col 

                rounded-xs lg:rounded-[8px] shadow-custom bg-lightgray 

                text-bodyMd-xs sm:text-bodyMd-sm md:text-bodyMd-md lg:text-bodyMd-lg '>
                    <div className='w-full flex justify-end'>
                        <p className='text-blackgray font-[700] font-urbanist
                        text-[1em]
                        zulo:text-[0.9em]
                        sm:text-[0.9em]
                        md:text-[0.86em]
                        lg:text-[1.05em]
                        woodo:text-[1.06em] '>DealTracker</p>
                    </div>
                    <div className='flex flex-col gap-[0.2em]'>
                        <div className='flex gap-[0.2em] items-end'>
                            <img src={logo} alt='abstra-logo' className='' />
                            <p className='font-sans font-[700] text-[0.3em] lg:text-[0.4em] font-blackgray '>TM</p>
                        </div>
                        <p className='font-urbanist font-[800] 
                        text-[0.8em]
                        zulo:text-[0.65em]
                        md:text-[0.6em]
                        lg:text-[0.81em]
                          woodo:text-[0.84em]
                           text-blackgray '>for Commercial Real Estate Brokers</p>
                    </div>
                    <div className='mt-[0.55em]'>
                        <p className='font-urbanist font-[800] 
                        text-[0.75em] 
                        zulo:text-[0.6em]
                        md:text-[0.7em]
                        lg:text-[0.70em] 
                        woodo:text-[0.75em] text-blackgray italic'>Be Efficient. Be Smart.</p>
                    </div>
                </div>

                <div className='lg:flex lg:justify-between lg:items-center'>



                    <div className="relative 
        woodo:mt-[-90px] 
         w-full flex items-center 
          text-bodyMd-xs sm:text-bodyMd-sm md:text-bodyMd-md lg:text-bodyMd-lg">
                        <VerticalLine distance='8' />
                        <VerticalLine distance='12' />
                        <VerticalLine distance='16' />
                        <VerticalLine distance='20' />
                        <VerticalLine distance='24' />
                        <VerticalLine distance='28' />
                        <VerticalLine distance='32' />
                        <div className=' woodo:mt-[130px] hidden woodo:flex pl-[0.5em] text-bodyMd-xs sm:text-bodyMd-sm md:text-bodyMd-md lg:text-bodyMd-lg w-[460px]'>
                            <SignupButton text="Sign up for early access" />
                        </div>

                        <div className='w-full flex flex-col items-end gap-[12px] sm:gap-[15px] md:gap-[17.5px] woodo:gap-[15px] mt-[24px] sm:mt-[30px] md:mt-[35px] woodo:mt-[0px]'>
                            <div className='w-full woodo:w-[65%] flex  justify-self-end gap-[0.8em] items-start justify-start'>
                                {/* <span className='w-[25px] h-[12.5px] rounded-full bg-black mt-[0.3em]'></span> */}
                                <FontAwesomeIcon icon={faCircle} className="text-[0.425em] mt-[0.70em] text-black" />
                                <p className='text-sans font-[500] text-[0.95] lg:text-[0.8em] text-blackgray'>
                                    Discover how AI (Artificial Intelligence) has transformed how to summarize your LOIs and to <span className='font-[700]'>keep track</span> of your deals in the <span className='text-primaryyellow font-[600]'> Commercial Real Estate (CRE)</span>  industry.
                                </p>
                            </div>
                            <div className='w-full woodo:w-[65%] flex  justify-self-end gap-[0.8em] items-start justify-start'>
                                {/* <span className='w-[25px] h-[12.5px] rounded-full bg-black mt-[0.3em]'></span> */}
                                <FontAwesomeIcon icon={faCircle} className="text-[0.425em] mt-[0.70em]  text-black" />
                                <p className='text-sans font-[500] text-[0.95] lg:text-[0.8em] text-blackgray'>
                                    <span className='font-[700]'>AbstraPoint™ DealTracker™ (APDT™)</span> powered by our proprietary AI engine - built by CRE brokers for CRE brokers.</p>
                            </div></div>
                    </div>
                </div>
            </div>





        </div>

    )
}


/**
 * <div className='flex flex-col gap-[0.2em] md:gap-[0.2em] mt-[0.6em] rounded-xs max-w-[13em] zulo:ml-[2em] sm:ml-[3em] md:ml-[2em] zulo:mt-[1em] md:mt-[1em] lg:mt-[3em] zulo:max-w-[15em] md:max-w-[17em] shadow-custom bg-lightgray py-[0.9em] px-[1.4em]  text-bodyMd-xs sm:text-bodyMd-sm md:text-bodyMd-md lg:text-bodyMd-lg '>
                <div className='w-full flex justify-end'>
                    <p className='text-blackgray font-[700] font-urbanist text-[0.55em] md:text-[1.05em]'>DealTracker</p>
                </div>
                <div className='flex flex-col gap-[0.2em]'>
                    <div className='flex gap-[0.2em] items-end'>
                        <img src={logo} alt='abstra-logo' className='' />
                        <p className='font-sans font-[700] text-[0.3em] font-blackgray '>TM</p>
                    </div>
                    <p className='font-urabnist font-[700] text-[0.44em] text-blackgray md:text-[0.6em]'>for Commercial Real Estate Brokers</p>
                </div>
                <div className=''>
                    <p className='font-urabnist font-[700] text-[0.4em] text-blackgray italic'>Be Efficient. Be Smart.</p>
                </div>
            </div>

            <div className='lg:flex lg:justify-between lg:items-center'>
            
                <div className='hidden lg:flex pl-[2em] text-bodyMd-xs sm:text-bodyMd-sm md:text-bodyMd-md lg:text-bodyMd-lg '>
                    <SignupButton text="Sign up for early access"/>
                </div>
            <div className="w-full lg:w-[45%] justify-self-end flex flex-col gap-[11px] mt-[1em] sm:mt-[2em] lg:mt-[0em] text-bodyMd-xs sm:text-bodyMd-sm md:text-bodyMd-md lg:text-bodyMd-lg">
                <div className='w-full flex gap-[0.8em] items-start justify-start'>
                    <span className='min-w-[0.55em] h-[0.4em] rounded-[100%] bg-black mt-[0.3em]'></span>
                    <p className='text-sans font-[500] text-[0.6em] lg:text-[0.75em] text-blackgray'>
                        Discover how AI (Artificial Intelligence) has transformed how to summarize your LOIs and to <span className='font-[700]'>keep track</span> of your deals in the <span className='text-primaryyellow'> Commercial Real Estate (CRE)</span>  industry.
                    </p>
                </div>
                <div className='w-full flex gap-[1em] items-start justify-start'>
                    <span className='min-w-[0.55em] h-[0.4em] rounded-[100%] bg-black mt-[0.3em]'></span>
                    <p className='text-sans font-[500] text-[0.6em] lg:text-[0.75em] text-blackgray'>
                    <span className='font-[700]'>AbstraPoint™ DealTracker™ (APDT™)</span> powered by our proprietary AI engine - built by CRE brokers for CRE brokers.</p>
                </div>
            </div>
            </div>
 */