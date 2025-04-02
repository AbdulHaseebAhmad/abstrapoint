import React from 'react'

export default function LoiListItem({title, text}) {
    return (
        <div className=' md:w-[48%] flex flex-col gap-[0.4em] lg:gap-[0.65em]  w-full py-[0.8em] text-bodyMd-xs sm:text-bodyMd-sm md:text-bodyMd-md lg:text-bodyMd-md border-b border-b-1 border-mediumgray'>
            <p className='font-sans text-[1.1em]  font-[600] text-blackgray'>{title}</p>
            <p className='font-sans text-[0.95em] lg:text-[0.8em] leading-[25px] lg:leading-[28px]  font-[400] text-blackgray'>
                {text}
            </p>
        </div>
    )
}
