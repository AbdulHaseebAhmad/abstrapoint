import React, { useEffect } from 'react'
import Navbar from "../../Components/Navbar/Navbar";

export default function TermsandCondition() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    return (
        <div className="bg-[#FFF] h-screen max-w-[1207px] mx-auto">
            <Navbar bg="#FFF" />
            <div className='px-[0.4em] lg:px-[0.82em] pt-[0.5em]  text-hero-xs sm:text-hero-sm md:text-hero-md lg:text-hero-lg '>{/**layout */}

                <div className=" flex flex-col gap-[0.25em] lg:gap-[0.2em]  pt-[0.28em] pb-[0.2em] ">
                    <div className='text-h3-xs sm:text-h3-sm md:text-h1-md lg:text-h1-lg w-[85%] lg:w-[80%]'>
                        <h3 className='text-[1.20em] sm:text-[1em] md:text-[0.5em] lg:text-[0.50em] text-blackgray font-sans font-[700]  leading-[1.25em] md:leading-[1.6em] lg:leading-[1.6em]'>
                            Terms & Conditions
                        </h3>
                    </div>
                    <div className='text-bodyMd-xs sm:text-h2-sm md:text-h3-md lg:text-h2-md'>
                        <h2 className='text-[1.1em] sm:text-[0.6em] md:text-[0.75em] lg:text-[0.5em]  text-blackgray font-sans font-[600]  leading-[1.6em] md:leading-[1.4em] lg:leading-[1.5em]'>
                            Overview
                        </h2>
                        <p className='font-sans text-[0.95em] sm:text-[0.55em] md:text-[0.65em] lg:text-[0.45em] leading-[25px] lg:leading-[34px]  font-[400] text-blackgray mt-[0.5em]'>
                            These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.                        </p>
                    </div>
                    <div className='text-bodyMd-xs sm:text-h2-sm md:text-h3-md lg:text-h2-md'>
                        <h2 className='text-[1.1em] sm:text-[0.6em] md:text-[0.75em] lg:text-[0.5em]  text-blackgray font-sans font-[600]  leading-[1.6em] md:leading-[1.4em] lg:leading-[1.5em]'>
                            Links To Other Websites
                        </h2>
                        <p className='font-sans text-[0.95em] sm:text-[0.55em] md:text-[0.65em] lg:text-[0.45em] leading-[25px] lg:leading-[34px]  font-[400] text-blackgray mt-[0.5em]'>
                            Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.
                        </p>
                    </div>
                    <div className='text-bodyMd-xs sm:text-h2-sm md:text-h3-md lg:text-h2-md'>
                        <h2 className='text-[1.1em] sm:text-[0.6em] md:text-[0.75em] lg:text-[0.5em]  text-blackgray font-sans font-[600]  leading-[1.6em] md:leading-[1.4em] lg:leading-[1.5em]'>
                        Termination
                        </h2>
                        <p className='font-sans text-[0.95em] sm:text-[0.55em] md:text-[0.65em] lg:text-[0.45em] leading-[25px] lg:leading-[34px]  font-[400] text-blackgray mt-[0.5em]'>
                        We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.Upon termination, Your right to use the Service will cease immediately.    
                        </p>
                    </div>
                    <div className='text-bodyMd-xs sm:text-h2-sm md:text-h3-md lg:text-h2-md'>
                        <h2 className='text-[1.1em] sm:text-[0.6em] md:text-[0.75em] lg:text-[0.5em]  text-blackgray font-sans font-[600]  leading-[1.6em] md:leading-[1.4em] lg:leading-[1.5em]'>
                        Limitation Of Liability
                        </h2>
                        <p className='font-sans text-[0.95em] sm:text-[0.55em] md:text-[0.65em] lg:text-[0.45em] leading-[25px] lg:leading-[34px]  font-[400] text-blackgray mt-[0.5em]'>
                        Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law
                        </p>
                        
                    </div>
                    <div className='text-bodyMd-xs sm:text-h2-sm md:text-h3-md lg:text-h2-md'>
                        <h2 className='text-[1.1em] sm:text-[0.6em] md:text-[0.75em] lg:text-[0.5em]  text-blackgray font-sans font-[600]  leading-[1.6em] md:leading-[1.4em] lg:leading-[1.5em]'>
                        "AS IS" and "AS AVALABLE" Disclaimer
                        </h2>
                        <p className='font-sans text-[0.95em] sm:text-[0.55em] md:text-[0.65em] lg:text-[0.45em] leading-[25px] lg:leading-[34px]  font-[400] text-blackgray mt-[0.5em]'>
                            The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.
                        </p>
                    </div>
                    <div className='text-bodyMd-xs sm:text-h2-sm md:text-h3-md lg:text-h2-md'>
                        <h2 className='text-[1.1em] sm:text-[0.6em] md:text-[0.75em] lg:text-[0.5em]  text-blackgray font-sans font-[600]  leading-[1.6em] md:leading-[1.4em] lg:leading-[1.5em]'>
                        Governing Law
                        </h2>
                        <p className='font-sans text-[0.95em] sm:text-[0.55em] md:text-[0.65em] lg:text-[0.45em] leading-[25px] lg:leading-[34px]  font-[400] text-blackgray mt-[0.5em]'>
                        The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws
                        </p>
                    </div>
                    <div className='text-bodyMd-xs sm:text-h2-sm md:text-h3-md lg:text-h2-md'>
                        <h2 className='text-[1.1em] sm:text-[0.6em] md:text-[0.75em] lg:text-[0.5em]  text-blackgray font-sans font-[600]  leading-[1.6em] md:leading-[1.4em] lg:leading-[1.5em]'>
                        Disputes Resolution
                        </h2>
                        <p className='font-sans text-[0.95em] sm:text-[0.55em] md:text-[0.65em] lg:text-[0.45em] leading-[25px] lg:leading-[34px]  font-[400] text-blackgray mt-[0.5em]'>
                        If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.
                        </p>
                    </div>
                    <div className='text-bodyMd-xs sm:text-h2-sm md:text-h3-md lg:text-h2-md'>
                        <h2 className='text-[1.1em] sm:text-[0.6em] md:text-[0.75em] lg:text-[0.5em]  text-blackgray font-sans font-[600]  leading-[1.6em] md:leading-[1.4em] lg:leading-[1.5em]'>
                        For European Union (EU) Users
                        </h2>
                        <p className='font-sans text-[0.95em] sm:text-[0.55em] md:text-[0.65em] lg:text-[0.45em] leading-[25px] lg:leading-[34px]  font-[400] text-blackgray mt-[0.5em]'>
                        If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in.
                        </p>
                    </div>
                    <div className='text-bodyMd-xs sm:text-h2-sm md:text-h3-md lg:text-h2-md'>
                        <h2 className='text-[1.1em] sm:text-[0.6em] md:text-[0.75em] lg:text-[0.5em]  text-blackgray font-sans font-[600]  leading-[1.6em] md:leading-[1.4em] lg:leading-[1.5em]'>
                        United States Legal Compliance
                        </h2>
                        <p className='font-sans text-[0.95em] sm:text-[0.55em] md:text-[0.65em] lg:text-[0.45em] leading-[25px] lg:leading-[34px]  font-[400] text-blackgray mt-[0.5em]'>
                        You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.
                        </p>
                    </div>
                    <div className='text-bodyMd-xs sm:text-h2-sm md:text-h3-md lg:text-h2-md'>
                        <h2 className='text-[1.1em] sm:text-[0.6em] md:text-[0.75em] lg:text-[0.5em]  text-blackgray font-sans font-[600]  leading-[1.6em] md:leading-[1.4em] lg:leading-[1.5em]'>
                        Severability and Waiver
                        </h2>
                        <p className='font-sans text-[0.95em] sm:text-[0.55em] md:text-[0.65em] lg:text-[0.45em] leading-[25px] lg:leading-[34px]  font-[400] text-blackgray mt-[0.5em]'>
                        Severability If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
                        </p>
                    </div>
                    <div className='text-bodyMd-xs sm:text-h2-sm md:text-h3-md lg:text-h2-md'>
                        <h2 className='text-[1.1em] sm:text-[0.6em] md:text-[0.75em] lg:text-[0.5em]  text-blackgray font-sans font-[600]  leading-[1.6em] md:leading-[1.4em] lg:leading-[1.5em]'>
                        Waiver
                        </h2>
                        <p className='font-sans text-[0.95em] sm:text-[0.55em] md:text-[0.65em] lg:text-[0.45em] leading-[25px] lg:leading-[34px]  font-[400] text-blackgray mt-[0.5em]'>
                        Except as provided herein, the failure to exercise a right or to require performance of an obligation under this Terms shall not effect a party's ability to exercise such right or require such performance at any time thereafter nor shall be the waiver of a breach constitute a waiver of any subsequent breach.
                        </p>
                    </div>
                    <div className='text-bodyMd-xs sm:text-h2-sm md:text-h3-md lg:text-h2-md'>
                        <h2 className='text-[1.1em] sm:text-[0.6em] md:text-[0.75em] lg:text-[0.5em]  text-blackgray font-sans font-[600]  leading-[1.6em] md:leading-[1.4em] lg:leading-[1.5em]'>
                        Translation
                        </h2>
                        <p className='font-sans text-[0.95em] sm:text-[0.55em] md:text-[0.65em] lg:text-[0.45em] leading-[25px] lg:leading-[34px]  font-[400] text-blackgray mt-[0.5em]'>
                        Interpretation These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.
                        </p>
                    </div>
                    <div className='text-bodyMd-xs sm:text-h2-sm md:text-h3-md lg:text-h2-md'>
                        <h2 className='text-[1.1em] sm:text-[0.6em] md:text-[0.75em] lg:text-[0.5em]  text-blackgray font-sans font-[600]  leading-[1.6em] md:leading-[1.4em] lg:leading-[1.5em]'>
                        Changes to These Terms and Conditions
                        </h2>
                        <p className='font-sans text-[0.95em] sm:text-[0.55em] md:text-[0.65em] lg:text-[0.45em] leading-[25px] lg:leading-[34px]  font-[400] text-blackgray mt-[0.5em]'>
                        We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.
                        </p>
                    </div>
                    <button className='bg-[#1D2939] font-sans font-[600] rounded-[10px] text-[#FFF] text-[0.15em] lg:text-[0.1em] py-[0.4em] px-[0.5em] max-w-[170px] text-center ml-auto cursor-pointer' onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>Back to Top</button>
                </div>
            </div>
        </div>
    )
}
