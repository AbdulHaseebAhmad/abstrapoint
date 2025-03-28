import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function FAQItem({ title }) {
    return (
        <div className='flex items-center gap-[0.75em] lg:gap-[3em] w-full text-bodyMd-xs sm:text-bodyMd-sm md:text-bodyMd-md lg:text-bodyMd-md '>
            <div className='flex gap-[1em] items-center lg:gap-[2.9em] w-full border-b border-b-1 border-mediumgray  py-[1em] lg:py-[1.4em]'>
                <FontAwesomeIcon icon={faPlus} className='text-blackgray md:text-[1.2em]'/>
                <p className='font-sans text-[0.8em] sm:text-[1em] lg:text-[1.1em] font-[600] text-blackgray'>{title}</p>
            </div>
        </div>
    )
}
