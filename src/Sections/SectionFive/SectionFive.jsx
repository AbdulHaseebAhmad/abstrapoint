import React from 'react'
import LoiListItem from '../../Components/ListItemLOIs/LoiListItem'

export default function SectionFive() {
    return (
        <div className='
        px-[0.2em] sm-[.45em] pb-[0.35em] 
        lg:pb-[0.4em] text-hero-xs sm:text-hero-sm md:text-hero-md lg:text-hero-lg bg-lightgray'>{/**layout */}

            <div className="px-[.0em] flex flex-col gap-[0.15em] lg:gap-[0.06em] py-[0.35em] pt-[0.28em] pb-[0.15em] bg-lightgray">
                <div className='text-h3-xs sm:text-h3-sm md:text-h1-md lg:text-h1-lg w-[85%] lg:w-[80%]'>
                    <h3 className='text-[1em] md:text-[0.8em] lg:text-[0.80em] text-blackgray font-sans font-[600]  leading-[1.2em] md:leading-[1.2em] lg:leading-[1.2em]'>
                        Your LOIs Abstracted. Your Deals Kept on Track. Your Business Organized.
                    </h3>
                </div>
                <div className='text-bodyMd-xs sm:text-h2-sm md:text-h3-md lg:text-h2-md'>
                    <h2 className='text-[1em] sm:text-[0.7em] md:text-[1em] lg:text-[0.8em] text-blackgray font-sans font-[600]  leading-[1.2em] md:leading-[1.4em] lg:leading-[1.5em]'>
                        Done in Seconds with the Power of AI.
                    </h2>
                </div>
            </div>

            <div className='flex flex-col md:flex-row flex-wrap md:justify-between w-full '>
                <LoiListItem title="AI-Powered LOI Summarization" text="Simply drag and drop your LOI into APDT — our AI instantly extracts and updates 20+ key data points with pinpoint accuracy in seconds."/>     
                <LoiListItem title="Redlining" text="APDT™ highlights all content changes in red across different versions of the same LOI, making it easy to track negotiations and spot critical updates instantly."/>
                <LoiListItem title="Automatic Grouping" text="All LOIs are automatically grouped based on Tenant Entity Name, Landlord Name, and Project Name, keeping your deals organized and easy to track."/>
                <LoiListItem title="Split-Screen Environment" text="Share filtered deal views instantly by copying a shareable link or sending it via email, ensuring your team stays aligned. "/>
                <LoiListItem title="Filter Tabs" text="Easily find the LOIs you need by filtering your dashboard by Tenant Entity, Tenant, City, Landlord Entity, Project, Street Address, and State."/>
                <LoiListItem title="Instant Sharing" text="Share filtered deal views instantly by copying a shareable link or sending it via email, ensuring your team stays aligned. "/>
            </div>
        </div>
    )
}
