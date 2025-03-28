import React from 'react'
import FAQItem from '../../Components/FAQ/FAQItem'

export default function SectionSeven() {
    return (
        <div className='px-[.25em] py-[0.35em] text-hero-xs sm:text-hero-sm md:text-hero-md lg:text-hero-lg bg-neutralsilver'>{/**layout */}
            <div className='text-h3-xs sm:text-h3-sm md:text-h1-md lg:text-h1-lg flex items-center gap-[0.5em]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="4" viewBox="0 0 102 4" fill="none" className='w-[0.9em] lg:w-[1.1em]'>
                    <path d="M100.336 3.18604C101.164 3.18604 101.836 2.51446 101.836 1.68604C101.836 0.857608 101.164 0.186035 100.336 0.186035V3.18604ZM0.335938 3.18604H100.336V0.186035H0.335938V3.18604Z" fill="#404040" />
                </svg>
                <h3 className='text-[1em] md:text-[0.8em]  lg:text-[0.80em] text-blackgray font-sans font-[600]  leading-[1.2em] md:leading-[1.2em] lg:leading-[1.2em]'>
                Frequently asked questions
                </h3>
            </div>
            <div className='mt-[0.2em] flex flex-col'>
                <FAQItem title="What Data is Abstracted from an LOI?"/>
                <FAQItem title="Is APDT™ able to abstract LOIs irrespective of how they are written and formatted?"/>
                <FAQItem title="What types of commercial real estate LOIs is APDT™ capable of abstracting?"/>
                <FAQItem title="What is your privacy and confidentiality policy when using APDT?"/>
                <FAQItem title="What is the expected accuracy of APDT™ LOI abstractions?"/>
                <FAQItem title="What about subjectivity within LOI abstractions?"/>
                <FAQItem title="What are the rules and interpretations APDT™ employs for abstracting LOIs?"/>
                <FAQItem title="What document input formats are accepted by APDT™?"/>
                <FAQItem title="What limitations does APDT™ have when abstracting LOIs?"/>
                <FAQItem title="May I upload several LOIs at the same time?"/>
                <FAQItem title="What is the AP LOI Standard (APLS)?"/>
            </div>
        </div>
    )
}
