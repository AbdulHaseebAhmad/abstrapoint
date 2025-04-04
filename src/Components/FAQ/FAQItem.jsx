import { faPlus, faMinus, faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'


export default function FAQItem({ title, id, text, list }) {
    const [showDropDown, setShowDropDown] = useState(false);
    const [index, setIndex] = useState(null);
    return (
         <div  
                className=' w-full text-bodyMd-xs sm:text-bodyMd-sm md:text-bodyMd-md lg:text-bodyMd-md '>
                <div className='flex gap-[1em] items-center lg:gap-[2.9em] w-full   py-[1em] lg:py-[1.4em] cursor-pointer'
                    style={{ borderBottom: showDropDown ? "none" : "1px solid gray" }} onClick={() => { setIndex(id); setShowDropDown(!showDropDown) }}>
                    <FontAwesomeIcon icon={showDropDown ? faMinus : faPlus} className='text-blackgray md:text-[1.2em] '  />
                    <p className='font-sans text-[1em] sm:text-[1em] lg:text-[1.1em] font-[600] text-blackgray' >{title}</p>
                </div>
                     {showDropDown && index === id && <div
                        key={id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0.25 }}
                        transition={{ duration: 0.4 }}
                        className='flex flex-col  items-center  w-full border-b border-b-1 border-mediumgray pb-[1em] lg:pb-[1.4em]'>
                        <p className='font-sans text-[1em] sm:text-[1em] lg:text-[1.1em] font-[400] text-blackgray px-[2em] lg:px-[3.5em]'>{text}</p>
                        {
                        list?.length > 0 &&
                        <ul className='w-full flex flex-col gap-[1em] mt-[1em]'>
                           { list.map((item) => <li className='w-full font-sans text-[1em] sm:text-[1em] lg:text-[0.9em] font-[400] text-blackgray px-[2em] lg:px-[3.5em]'>
                               <FontAwesomeIcon icon={faCircle} className='text-black text-xs lg:ml-[3em] mr-[2em]'/> {item}
                                </li>)}
                        </ul> 
                    }
                    </div>}
                    
             </div>
         
    )
}
