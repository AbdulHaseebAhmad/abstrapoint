import React from 'react'
import SignupButton from '../Components/Buttons/Signup -Button/SignupButton'

export default function Hero() {
    return ( //py was 0.25em the same as pt, so if section two ui breaks change this back
        <div className="px-[0.2em] md:px-[.35em] pt-[0.7em] pb-[0em] text-hero-xs sm:text-hero-sm md:text-hero-md lg:text-hero-lg bg-neutralsilver">
    <div className='flex flex-col gap-[24px] '>
        <div className="flex flex-col bg-neutralsilver max-w-[3em]">
            
            <div className='w-full flex items-end justify-between'>
                <h1 className="flex items-end text-sans text-blackgray leading-[0.75] text-hero-xs lg:text-hero-lg md:text-hero-md sm:text-hero-sm uppercase m-0 p-0 mt-0 mb-0 font-[600]">
                    drag
                </h1>
                <div className="rounded-full bg-blackgray h-[0.17em] w-[0.17em]" />
            </div>

            <div className='w-full flex items-end justify-between'>
                <h1 className="flex items-end text-sans text-blackgray leading-[0.75] text-hero-xs lg:text-hero-lg md:text-hero-md sm:text-hero-sm uppercase m-0 p-0 mt-0 mb-0 font-[600]">
                    drop
                </h1>
                <div className="rounded-full bg-blackgray h-[0.17em] w-[0.17em]" />
            </div>

            <div className='w-full flex items-end justify-between'>
                <h1 className="flex items-end text-sans text-primaryyellow leading-[0.75] text-hero-xs lg:text-hero-lg md:text-hero-md sm:text-hero-sm uppercase m-0 p-0 mt-0 mb-0 font-[600]">
                    done
                </h1>
                <div className="rounded-full bg-primaryyellow h-[0.17em] w-[0.17em]" />
            </div>

        </div>

        <div className='max-w-[3em] ml-[0.05em]'>
            <SignupButton text={"Sign up for early access"} />
        </div>
    </div>
</div>

    )
}


/**
 * 





<div className="px-[0.19em] py-[0.25em] text-hero-xs sm:text-hero-sm md:text-hero-md lg:text-hero-lg bg-neutralsilver">
            <div className='flex flex-col gap-[24px] '>
                <div className=" flex flex-col bg-neutralsilver max-w-[3em]  ">
                    <div className='w-full flex items-end justify-between'>
                        <h1 className="flex  items-end text-sans text-blackgray leading-[0.75]  text-[30vw] md:text-[35w]  lg:text-hero-lg  sm:text-hero-sm  uppercase m-0 p-0 mt-0 mb-0 font-[600]">drag
                        </h1>
                        <div className="aspect-box bg-blackgray h-[0.17em] w-[0.17em]" />
                    </div>
                    <div className='w-full flex items-end justify-between'>
                        <h1 className="flex  items-end  text-sans text-blackgray leading-[0.75] text-[30vw] md:text-[35w]  lg:text-hero-lg  sm:text-hero-sm  uppercase m-0 p-0 mt-0 mb-0 font-[600]">drop
                        </h1>
                        <div className="aspect-box bg-blackgray h-[0.17em] w-[0.17em]" />
                    </div>
                    <div className='w-full flex items-end justify-between'>
                        <h1 className="flex  items-end text-sans text-primaryyellow leading-[0.75] text-[30vw] md:text-[35w]  lg:text-hero-lg  sm:text-hero-sm  uppercase m-0 p-0 mt-0 mb-0 font-[600]">done
                        </h1> <div className="aspect-box bg-primaryyellow h-[0.17em] w-[0.17em]" />
                    </div>
                </div>
                <div className='max-w-[3em] ml-[0.05em]'>
                    <SignupButton text={"Sign up for early access"}/>
                </div>
            </div>
        </div>
 */