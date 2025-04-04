import React from 'react'
import FAQItem from '../../../../Components/FAQ/FAQItem'

export default function SectionSeven() {
    return (
        <div id='faq' name='faq' className='px-[.25em] lg:px-[0.45em] py-[0.35em] text-hero-xs sm:text-hero-sm md:text-hero-md lg:text-hero-lg bg-neutralsilver'>{/**layout */}
            <div className='text-h3-xs sm:text-h3-sm md:text-h1-md lg:text-h1-lg flex items-center gap-[0.5em]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="4" viewBox="0 0 102 4" fill="none" className='w-[1.2em] lg:w-[1.1em]'>
                    <path d="M100.336 3.18604C101.164 3.18604 101.836 2.51446 101.836 1.68604C101.836 0.857608 101.164 0.186035 100.336 0.186035V3.18604ZM0.335938 3.18604H100.336V0.186035H0.335938V3.18604Z" fill="#404040" />
                </svg>
                <h3 className='text-[1.2em] md:text-[0.8em]  lg:text-[0.80em] text-blackgray font-sans font-[600]  leading-[1.5em] md:leading-[1.2em] lg:leading-[1.2em]'>
                    Frequently Asked Questions
                </h3>
            </div>
            <div className='mt-[0.2em] flex flex-col'>
                <FAQItem title="What Data is Abstracted from an LOI?" id='1' text="We are currently abstracting 20+ fields from NNN Retail LOIs.  The fields abstracted are as follows:" list={[
                    "LOI Date"
                    , "Landlord",
                    "Tenant Entity Name",
                    "Tenant Trade Name (DBA)",
                    "Project Name",
                    "Premises Street Address",
                    "Premises City Name",
                    "Premises State",
                    "Premises Suite Number",
                    "Premises Size (sf)",
                    "Term",
                    "Options",
                    "Base Rent - Year 1 (psf)",
                    "TIA (psf)",
                    "NNN Estimate (psf)"
                    , "CAM (psf)"
                    , "Controllable CAM (psf)"
                    , "Uncontrollable CAM (psf)",
                    "Real Estate Taxes (psf)",
                    "Insurance (psf)",
                    "Delivery Date"
                    ,
                    "Rent Abatement"
                    , "Percentage Rent"]} />
                <FAQItem title="Is APDT™ able to abstract LOIs irrespective of how they are written and formatted?" id='2' text="Yes.  As long as the document is understandable by a human, it will also make sense for APDT" />
                <FAQItem title="What types of commercial real estate LOIs is APDT™ capable of abstracting?" id='3' text="APDT™ is able to understand LOIs from retail and office leases, i.e. NNN leases.  We will expand the ability to abstract ground leases over the next few months as well as expand our features to industrial leases as well in the future." />
                <FAQItem title="What is your privacy and confidentiality policy when using APDT?" id='4' text="We keep all documents with APDT™ strictly confidential and do not share any of the LOIs with any third party." />
                <FAQItem title="What is the expected accuracy of APDT™ LOI abstractions?" id='5' text="On average - the expected accuracy of APDT™ is in the range of 95-100%, in line with human manual abstraction. While a human may need 15-20 minutes to abstract an LOI, APDT™ will typically do so in less than a minute." />
                <FAQItem title="What about subjectivity within LOI abstractions?" id='6' text="All forms of abstraction (both manual and machine-based abstractions) may contain an element of subjectivity.   For example, a human abstraction for an LOI for “Delivery Date” may say “Anticipated Delivery on March 1, 2024” while APDT™ may abstract only the date “March 1, 2024”.  Although the meaning of both interpretations are the same, whether it is important to include the phrase “Anticipated Delivery” in the abstraction is subject to the opinion among brokers, their client, and professional expertise of APDT in commercial real estate. For that reason, we offer the ability to manually customize every answer." />
                <FAQItem title="What are the rules and interpretations APDT™ employs for abstracting LOIs?" id='7' text="Like humans have different ways to interpret answers from an LOI, APDT™ uses a guideline as well to know how to interpret a text from a document.  They are called Abstraction Policies for LOIs and details for each field can be found here." />
                <FAQItem title="What document input formats are accepted by APDT™?" id='8' text="APDT™ will accept doc, docx at this moment. We will also accept text-based pdf file formats soon as well." />
                <FAQItem title="What limitations does APDT™ have when abstracting LOIs?" id='9' text="The LOI  uploaded into the APDT™ system will be confused in the same instances as a human.  For example, if the LOI describes a Tenant “A”, but refers to that same Tenant in the exhibit as Tenant “B”, then that can create confusion as APDT won’t know which tenant the LOI is referencing. Another example–  If an LOI has two separate addresses for a Project, then APDT™ will not be able to deliver accurate results as that would be confusing to both APDT and a human being." />
                <FAQItem title="May I upload several LOIs at the same time?" id='10' text="Yes. You may upload up to 10 LOIs at the same time." />
                <FAQItem title="What is the AP LOI Standard (APLS)?" id='11' text="The AP LOI Document Standard lays out a standard how an LOI for the commercial real estate brokerage should be drafted. Approximately 95% of all LOIs in use in the commercial real estate industry today already follow this norm." />
            </div>
        </div>
    )
}
