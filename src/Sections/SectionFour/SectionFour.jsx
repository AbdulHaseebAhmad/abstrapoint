import React from 'react'
import logo from "../../assets/logoresize.svg";
export default function SectionFour() {
    return (
        <div className='px-[.15em] py-[.475em] md:px-[0.50em] lg:px-[0.65em]  text-hero-xs sm:text-hero-sm md:text-hero-md lg:text-hero-lg bg-neutralsilver'>{/**layout */}

            <div className='flex flex-col gap-[.25em]'> 

                <div className='pl-[0.4em] zulo:pl-[0em]
                max-w-[100%]  zulo:max-w-[70%]  sm:max-w-[80%] md:max-w-[100%] lg:max-w-[75%] 
                mx-auto text-h3-xs sm:text-h3-sm md:text-h1-md lg:text-h1-lg 
                
                 '>  
                     
                    <h3 className='text-[1em] md:text-[0.80em]  lg:text-[0.80em] text-blackgray font-sans font-[600]  leading-[1.2em] md:leading-[1.2em] lg:leading-[1.2em]'>
                    Faster than a Human, more Accurate than an LLM
                    </h3>
                </div>

                <div className='mx-auto flex flex-col gap-[0.35em] sm:gap-[0.5em] lg:gap-[0.35em] text-h1-xs sm:text-h1-sm md:text-h1-md lg:text-h1-lg '>
                    <div className='flex gap-[0.65em] sm:gap-[1em] mb-[0.5em] lg:mb-[0.3em]'>
                        <div className='flex items-center justify-center rounded-[6.0px] lg:rounded-[16px] px-[0.25em] w-[3.6em] h-[2.0em] zulo:w-[4.0em] zulo:h-[2.2em] lg:w-[4em] md:h-[2.4em] '></div>
                        <div className='flex gap-[0.4em]'>
                            <div className=' flex items-center justify-center  text-start px-[0.27em]   rounded-[6.0px] lg:rounded-[16px] w-[3.6em] h-[2.0em] zulo:w-[4.0em] zulo:h-[2.2em] lg:w-[4em] md:h-[2.4em] bg-mediumgray border border-[0.15px] border-mediumgray '>
                                <p className='font-sans text-[0.28em] md:text-[0.38em] lg:text-[0.35em] lg:px-[1em] font-[700] text-blackgray text-start' >Time Needed for LOI Abstraction</p>
                            </div>
                            <div className=' flex items-center justify-center flex items-center justify-center rounded-[6.0px] lg:rounded-[16px] px-[0.25em] w-[3.6em] h-[2.0em] zulo:w-[4.0em] zulo:h-[2.2em] lg:w-[4em] md:h-[2.4em] bg-mediumgray  border border-[0.15px] border-mediumgray'>
                                <p className='font-sans text-[0.28em] md:text-[0.38em] lg:text-[0.35em] lg:px-[1em] font-[700] text-blackgray '>Average Data Accuracy</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-[0.65em] sm:gap-[1em]  '>
                        <div className='  flex items-center justify-center rounded-[6.0px] lg:rounded-[16px] px-[0.25em] w-[3.6em] h-[2.0em] zulo:w-[4.0em] zulo:h-[2.2em] lg:w-[4em] md:h-[2.4em] bg-mediumgray border border-[0.15px] border-mediumgray'>
                            <p className='font-sans font-[700] text-blackgray  text-[0.28em] md:text-[0.38em] lg:text-[0.35em] lg:px-[1em] '>Manual Abstraction</p>
                        </div>
                        <div className='flex gap-[0.4em] '>
                            <div className=' flex items-center justify-center rounded-[6.0px] lg:rounded-[16px] px-[0.25em] w-[3.6em] h-[2.0em] zulo:w-[4.0em] zulo:h-[2.2em] lg:w-[4em] md:h-[2.4em] bg-lightwarmgray border border-[0.15px] border-mediumgray '>
                                <p className='font-sans text-[0.28em] md:text-[0.38em] lg:text-[0.35em] lg:px-[1em] font-[700] text-blackgray'>15-20 mins</p>
                            </div>
                            <div className=' flex items-center justify-center rounded-[6.0px] lg:rounded-[16px] px-[0.25em] w-[3.6em] h-[2.0em] zulo:w-[4.0em] zulo:h-[2.2em] lg:w-[4em] md:h-[2.4em] bg-lightwarmgray border border-[0.15px] border-mediumgray'>
                                <p className='font-sans text-[0.28em] md:text-[0.38em] lg:text-[0.35em] lg:px-[1em] font-[700] text-blackgray'>~95-100%</p>

                            </div>
                        </div>
                    </div>

                    <div className='flex gap-[0.65em] sm:gap-[1em]'>
                        <div className=' flex flex-col items-center justify-center rounded-[6.0px] lg:rounded-[16px] w-[3.6em] h-[2.0em] px-[0.25em] zulo:w-[4.0em] zulo:h-[2.2em] lg:w-[4em] md:h-[2.4em] bg-mediumgray '>
                            <p className='font-sans text-[0.28em] md:text-[0.38em] lg:text-[0.35em] lg:px-[1em] font-[700] text-blackgray w-full text-start'>LLMs</p>
                            <div className='w-full flex flex-wrap items-center gap-[0.1em] px-[0.15em]'>
                                <img src='https://s3-alpha-sig.figma.com/img/5377/0eff/971ebf005d5e08b2b092a60a5f380273?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=AUYbzQscOO~0AA0YUA07V9t2INC~8LQwdZISyMdl9z1wz0T2ynXaDDFfn4jt9xXq9WQkw4t0UosIG0ObJHyi05GmzKoxgG~wzRamwmL8qKovwB0YRg6l5B5K~rI1BfBXgBODo4LdGNxRkyGS3Bj15uURqli43h6m4FJW9~YUf4SgRibxYLNA29OmCXMiIhp1ElomaYECziR-DE5Zm9~z8KnjiyFeFVpxY~SrOuVHfosJ9cUKtlSLAu45863H7xRa3KPoO8Kp2DfjES2g4FyOsWEYzNDnoyBoEonvJaa7olqSzVg7P5YrDN4oEbiPvL97GUXG4AF83aLtmRUHVMjvpQ__' 
                                className='w-full max-w-[0.9em] lg:max-w-[1em]' />
                                <img src='https://s3-alpha-sig.figma.com/img/8696/333e/40323dcf7a0904d108e429fc33092756?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gDY5PEhmE23BuW7BrLZNFO~RC-n6g2NCzSEqweoLadorX2hmFv-oPVCggPeZakkC~fs48OWGuxokgwcC~LJ~SsbQQKt0s0V2laq-KQKxERVjYnGWqjd4cYxGfU97Jmo-Gl5GQRFqdLSlwhwyoiFLWUDNXXYAtgF0uHfHViwywSmRx3dCSaZnB47tCJQUfUykZSo1kR77oyCiwSnIkOmqrYJbwd8NDNSl~UUSavhMnbk-~hlWjIZfuDH3tpfHo81W3JY4P90qSYfFipFJ3aOCOrMk3YN0WihFZqjTQ5WcnqdZ6vCnzApMDbfv1-z3OMDll9FX8X9Dc3YaaRG5KnJK-A__' 
                                className='w-full max-w-[0.5em] lg:max-h-[0.5em]' />
                                <img src='https://s3-alpha-sig.figma.com/img/f944/d323/3840f7a8f7c494e4ae75aba1e50db1b7?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=J3qvuQ4ER2oBGaAVcHGiCT7t0qepunWIGNApX3YQ7ngopm5Gl4ik7CbFqSFgrVQeOp7A3JrFVKfb~qwsmWnx3l20iGFSt28xSXxio8TdyGmFY3Hwh9qPwjKaAdWNC1zPD8aRw5xYvFshueGiRzK-Q4cVjbXlR8bFT~QA~5P-swRj516z6r6jbfzjOPTBaxfwBRkH9E3d5vI7rK5U~~UqxNRW7lw0jkg6GinJYnysODazCrM3foxLhF2fXNhBjyWL~fj~wQokzIyqxvQsF~~97bLmxveXZQ11L8sjSv-Hj1hhPUwv8Y-zkIUSS3SVL8SdMRsEF~Y9ogK7Qryo6St2fA__' 
                                className='w-full max-w-[0.9em] lg:max-w-[1em]' />
                                <img src='https://s3-alpha-sig.figma.com/img/c43f/8d1f/067c43d6286c41673f285de0d9807080?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ij7T-zX2vp4ylPhr1RNh9~Q5wEJquDtO99HtcEIKg5WiVaRxf4aR0UlQ0rlL3L7GRJ23wvsOlsgORGtRjnINTACuwc04lTqzmQO8ZDX~-V8VOskgmrB~6o1ksQlL4FuDYtK2qXLTnHVINkHRZJNuXyjqBZMjDARkS5ynxP~Jd9WYC52lWnON-39HtdhdfaUB-iiiTq9bDBJWjlo8eAiR7WAHV~LBbk0ZxVVyiaaJ~GJC2F6si2hPrtQWrG19gMpH2Zrl8ISrza5waL1CIZVP2yqjxfQRL5a2CaysMATYuKHSx-NbgZCNrdGdzre5mQR6kyYFKlCsuUmsfTC600XlMA__' 
                                className='w-full max-w-[1.2em] lg:max-w-[1.6em]' />
                                <img src='https://s3-alpha-sig.figma.com/img/e02a/7674/f7f5367b5e5a2f59ec6499af947ad711?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZeYKGJtK4oa4wPi1vPsoLnmSFD9UsJY6P5HTsDD8Z5lhV41iMGQBS8QzilAM-R9JGqq6XmJR6hOa~36XrwSvVYZRSfu74OKNHCaO-zdMJMjUNOSs~nyEttJ4DF6hcVtEhODxn0btAWhaIXSPo7H8Yl20vPxQxWhxxUMAYMUrzbOnJWQovWFpYIlbyMgSziqoMqUNxhF9LND2D3HN1CF6VW1PoQhvObsdT6MlxLhm-X-PeQ9OL-AyHwymtpIkLrFG3PL7Po8oAYUDyKueKL9fhQdnXlKORlmhB0-LhjpX2731hQuXhSInWbuK2pcJfJLHnUZj~vwSQl-eNWomzl08yA__' 
                                className='w-full max-w-[0.9em] lg:max-w-[1em]' />
                            </div>
                        </div>
                        <div className='flex gap-[0.4em]'>
                            <div className=' flex items-center justify-center rounded-[6.0px] lg:rounded-[16px] px-[0.25em] w-[3.6em] h-[2.0em] zulo:w-[4.0em] zulo:h-[2.2em] lg:w-[4em] md:h-[2.4em] bg-lightwarmgray border border-[0.15px] border-mediumgray'>
                                <p className='font-sans text-[0.28em] md:text-[0.38em] lg:text-[0.35em] lg:px-[1em] font-[700] text-blackgray'>~ 5-7 seconds</p>

                            </div>
                            <div className=' flex items-center justify-center rounded-[6.0px] lg:rounded-[16px] px-[0.25em] w-[3.6em] h-[2.0em] zulo:w-[4.0em] zulo:h-[2.2em] lg:w-[4em] md:h-[2.4em] bg-lightwarmgray border border-[0.15px] border-mediumgray'>
                                <p className='font-sans text-[0.28em] md:text-[0.38em] lg:text-[0.35em] lg:px-[1em] font-[700] text-blackgray'>~70-90%</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-[0.65em] sm:gap-[1em] '>
                        <div className=' flex flex-col items-end justify-center rounded-[6.0px] lg:rounded-[16px] w-[3.6em] h-[2.0em] px-[0.25em] zulo:w-[4.0em] zulo:h-[2.2em] lg:w-[4em] md:h-[2.4em] bg-mediumlighyellow border border-[0.15px] border-mediumgray'>
                            <p className='font-urbanist text-[0.28em] md:text-[0.32em] font-[700] text-blackgray'>
                                DealTracker
                            </p>
                            <img src={logo} alt="logo-img"/>
                            <p className='mt-[0.45em] font-urbanist self-start text-[0.18em] md:text-[0.22em] font-[700] text-blackgray'>
                            for Commercial Real Estate
                            </p>
                        </div>
                        <div className='flex gap-[0.4em]'>
                            <div className=' flex items-center justify-center rounded-[6.0px] lg:rounded-[16px] px-[0.25em] w-[3.6em] h-[2.0em] zulo:w-[4.0em] zulo:h-[2.2em] lg:w-[4em] md:h-[2.4em] bg-mediumlighyellow border border-[0.15px] border-mediumgray'>
                                <p className='font-sans text-[0.28em] md:text-[0.38em] lg:text-[0.35em] lg:px-[1em] font-[700] text-blackgray'>90 seconds or less</p>

                            </div>
                            <div className=' flex items-center justify-center rounded-[6.0px] lg:rounded-[16px] px-[0.25em] w-[3.6em] h-[2.0em] zulo:w-[4.0em] zulo:h-[2.2em] lg:w-[4em] md:h-[2.4em] bg-mediumlighyellow border border-[0.15px] border-mediumgray'>
                                <p className='font-sans text-[0.28em] md:text-[0.38em] lg:text-[0.35em] lg:px-[1em] font-[700] text-blackgray'>~95-100%</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
