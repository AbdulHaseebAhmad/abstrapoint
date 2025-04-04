import React from 'react'
import logo from "../../../../assets/logoresize.svg";
export default function SectionFour() {
    return (
        <div className='px-[.15em] py-[.475em] md:px-[0.50em] lg:px-[0.65em]  text-hero-xs sm:text-hero-sm md:text-hero-md lg:text-hero-lg bg-neutralsilver'>{/**layout */}

            <div className='flex flex-col gap-[.25em]'> 

                <div className='pl-[0.4em] zulo:pl-[0em]
                max-w-[100%]  zulo:max-w-[70%]  sm:max-w-[80%] md:max-w-[100%] lg:max-w-[75%] 
                mx-auto text-h3-xs sm:text-h3-sm md:text-h1-md lg:text-h1-lg '>  
                     
                    <h3 className='text-[1.20em] md:text-[0.80em]  lg:text-[0.80em] text-blackgray font-sans font-[600]  leading-[1.2em] md:leading-[1.2em] lg:leading-[1.2em]'>
                    Faster than a Human, more Accurate than an LLM
                    </h3>
                </div>

                <div className='mx-auto flex flex-col gap-[0.35em] sm:gap-[0.5em] lg:gap-[0.35em] text-h1-xs sm:text-h1-sm md:text-h1-md lg:text-h1-lg '>
                    <div className='flex gap-[0.65em] sm:gap-[1em] mb-[0.5em] lg:mb-[0.3em]'>
                        <div className='flex items-center justify-center rounded-[6.0px] lg:rounded-[16px] px-[0.25em] w-[3.6em] h-[2.0em] zulo:w-[4.0em] zulo:h-[2.2em] lg:w-[4em] md:h-[2.4em] '></div>
                        <div className='flex gap-[0.4em]'>
                            <div className=' flex items-center justify-center  text-start px-[0.27em]   rounded-[6.0px] lg:rounded-[16px] w-[3.6em] h-[2.0em] zulo:w-[4.0em] zulo:h-[2.2em] lg:w-[4em] md:h-[2.4em] bg-mediumgray border border-[0.15px] border-mediumgray '>
                                <p className='font-sans text-[0.38em] md:text-[0.38em] lg:text-[0.35em] lg:px-[1em] font-[700] text-blackgray text-start' >Time Needed for LOI Abstraction</p>
                            </div>
                            <div className=' flex items-center justify-center flex items-center justify-center rounded-[6.0px] lg:rounded-[16px] px-[0.25em] w-[3.6em] h-[2.0em] zulo:w-[4.0em] zulo:h-[2.2em] lg:w-[4em] md:h-[2.4em] bg-mediumgray  border border-[0.15px] border-mediumgray'>
                                <p className='font-sans text-[0.38em] md:text-[0.38em] lg:text-[0.35em] lg:px-[1em] font-[700] text-blackgray '>Average Data Accuracy</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-[0.65em] sm:gap-[1em]  '>
                        <div className='  flex items-center justify-center rounded-[6.0px] lg:rounded-[16px] px-[0.25em] w-[3.6em] h-[2.0em] zulo:w-[4.0em] zulo:h-[2.2em] lg:w-[4em] md:h-[2.4em] bg-mediumgray border border-[0.15px] border-mediumgray'>
                            <p className='font-sans font-[700] text-blackgray  text-[0.38em] md:text-[0.38em] lg:text-[0.35em] lg:px-[1em] '>Manual Abstraction</p>
                        </div>
                        <div className='flex gap-[0.4em] '>
                            <div className=' flex items-center justify-center rounded-[6.0px] lg:rounded-[16px] px-[0.25em] w-[3.6em] h-[2.0em] zulo:w-[4.0em] zulo:h-[2.2em] lg:w-[4em] md:h-[2.4em] bg-lightwarmgray border border-[0.15px] border-mediumgray '>
                                <p className='font-sans text-[0.38em] md:text-[0.38em] lg:text-[0.35em] lg:px-[1em] font-[700] text-blackgray'>15-20 mins</p>
                            </div>
                            <div className=' flex items-center justify-center rounded-[6.0px] lg:rounded-[16px] px-[0.25em] w-[3.6em] h-[2.0em] zulo:w-[4.0em] zulo:h-[2.2em] lg:w-[4em] md:h-[2.4em] bg-lightwarmgray border border-[0.15px] border-mediumgray'>
                                <p className='font-sans text-[0.38em] md:text-[0.38em] lg:text-[0.35em] lg:px-[1em] font-[700] text-blackgray'>~95-100%</p>

                            </div>
                        </div>
                    </div>

                    <div className='flex gap-[0.65em] sm:gap-[1em]'>
                        <div className=' flex flex-col items-center justify-center rounded-[6.0px] lg:rounded-[16px] w-[3.6em] h-[2.0em] px-[0.25em] zulo:w-[4.0em] zulo:h-[2.2em] lg:w-[4em] md:h-[2.4em] bg-mediumgray '>
                            <p className='font-sans text-[0.38em] md:text-[0.38em] lg:text-[0.35em] lg:px-[1em] font-[700] text-blackgray w-full text-start'>LLMs</p>
                            <div className='w-full flex flex-wrap items-center gap-[0.1em] px-[0.15em]'>
                                <img src='https://s3-alpha-sig.figma.com/img/5377/0eff/971ebf005d5e08b2b092a60a5f380273?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=s17aIyXOpNAtodTAKFJGt~O5ErB3iYpcNqC2BaDUm8dqT2SSthqM~kvu-j~CLLADVCcAT6J9Gv0RQM67Guq1wspEj8y4vGqIefomAi2WV1oF-pjyStUwaV0tfrrIUDB4EbiU~z5kTu3ixtntbZ5zqzbsgpGshnsHx5TTqWt3mzmKLisXKxgR46oPi2bZWbQUn0CVc2nv8XQ0-jimtLWaXqHnUHahTiJsq9XRo7zpnGSh7HOBROollUdfID2OaNPScxMWTSvwEwuxAFZ1N3KLnQvKdQGsSH4gyjxIEi5Uvc9-WjI7djP-8iTCLwaR3cQSWBuLNH6S6eHmqypd9cbN9A__' 
                                className='w-full max-w-[0.9em] lg:max-w-[1em]' />
                                <img src='https://s3-alpha-sig.figma.com/img/8696/333e/40323dcf7a0904d108e429fc33092756?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rtHHOI4TYvLqL2tVed-C4cnlFTp-2RYSuuSclnZOWhQ7wzTDMvDvV68wo~6IX2Y7tiNyXRjewKr1PHzOtqBYBneTsyhwexhI4bgq8pwwXL7sTIyKy0XEpS7cxvK7~wiULqKrp0o~KFxcppIJBK34BsojWQyimbNhRaOKyw0XpNMIlLGC-wzz8YqZYzh3oOlkn1immhL4dHLLS1vjxQTYYvhqnQMysWBB5x8k3GQevSBh5LOhHf-Loum7BdiCAxa0Exy5IDZXSFD7ugDGIuTeEBmF18v~Y7hhnBBLIy6k5VrVOYsu8x-OUt8yJnLgbX1B9ajOHbrhWTdKDCc1W3dZ2w__' 
                                className='w-full max-w-[0.5em] lg:max-h-[0.5em]' />
                                <img src='https://s3-alpha-sig.figma.com/img/f944/d323/3840f7a8f7c494e4ae75aba1e50db1b7?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XafF5mzVmiFXqM6qpUqec4JSwajbiKZ4Gp5WxF6e1T6DE69pCAgF4TzAdf0pJnr2EYI5MullKE-ThewaXmuK5nqoJXM5hqyqHRZBDaoWxn9rnbdclLtJx2GQ3rlM17fFxuC2zdDckPfGzuqr6ebhe18ojLGyEUBUrX3Eoyeux7Acf3Ghn0SK8wP4ZhaMN4zWtKIgNnBesh1WXPpiE49Ilk3jMb87pW5FgpIiFn723JoZHe8V9RjCd-H4OHytzLmctQ3VuDvVpM10BpeWY8T8RnJxR0kvVGPCeg3N~KfCmkPV-j9kx8lhA5wV~vbrlcedMTkOYca33Ft6sG3-ccTBfA__' 
                                className='w-full max-w-[0.9em] lg:max-w-[1em]' />
                                <img src='https://s3-alpha-sig.figma.com/img/c43f/8d1f/067c43d6286c41673f285de0d9807080?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZB8X1Yde2M2n8TLIYdMBZIC3yMB0M4nIL48QXnPyRlla26UQcrVhGJN-OZcUf6LnVB0e7OPbkl~HD~9FbH9Jbii1YLRaojueos7RlwLtXlyHjC1GGTlzv2mQ8mzZ19NmjRc5ft7AYh-RYfQO8zLqiW5OrjTSzSsiNNNf8WC41O4WIaHX1P~vhpYYH6A-SnjKAUNH36XiDf4f9abmHoVMcMgr7A8sDXv-hrQvNHlJwEmMMHItiiH3iacRx1zHqUDNFRVeVq1vhj~yByAsa37jwksiz5Ux92zZ-udEX0q11pquNMhoMv0xk3Tzr4uEyp-iEXf~jyZXuUlxqjbTFS8qZA__' 
                                className='w-full max-w-[1.2em] lg:max-w-[1.6em]' />
                                <img src='https://s3-alpha-sig.figma.com/img/e02a/7674/f7f5367b5e5a2f59ec6499af947ad711?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bmZVm2inQ8~Lt8KzvcUmmKA~8N1rXXnR57VVFSZ6xx-sA8jpMHI4HxDLsB1UHFmzuoDDsLe3oqyg4WZ6GMsTur9c57IA-cDRboVEf94ZG03TFsGGUiM5Iji-iQ31mDg0xvDOQXqIn-Qi1giXrdGHJIBoJTT9bHcjThTVv7vHFTtBsNoLMLFxgJeeuRaTRXo6wLWGWJHv14Jtm5RMhdXEYuCqIhdMOIW-u1y9K-DdryOTZSnMKBfGWi7-9f~EtgpFomZ5l4iOfhuZjl-HqT6OfL9x~tGMV8g328Q5YEYCIlHY9lp1usYi7ZwAQMkQ9WdiKIi5PIHo~xGjvQUHf0jcyQ__' 
                                className='w-full max-w-[0.9em] lg:max-w-[1em]' />
                            </div>
                        </div>
                        <div className='flex gap-[0.4em]'>
                            <div className=' flex items-center justify-center rounded-[6.0px] lg:rounded-[16px] px-[0.25em] w-[3.6em] h-[2.0em] zulo:w-[4.0em] zulo:h-[2.2em] lg:w-[4em] md:h-[2.4em] bg-lightwarmgray border border-[0.15px] border-mediumgray'>
                                <p className='font-sans text-[0.38em] md:text-[0.38em] lg:text-[0.35em] lg:px-[1em] font-[700] text-blackgray'>~ 5-7 seconds</p>

                            </div>
                            <div className=' flex items-center justify-center rounded-[6.0px] lg:rounded-[16px] px-[0.25em] w-[3.6em] h-[2.0em] zulo:w-[4.0em] zulo:h-[2.2em] lg:w-[4em] md:h-[2.4em] bg-lightwarmgray border border-[0.15px] border-mediumgray'>
                                <p className='font-sans text-[0.38em] md:text-[0.38em] lg:text-[0.35em] lg:px-[1em] font-[700] text-blackgray'>~70-90%</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-[0.65em] sm:gap-[1em] '>
                        <div className=' flex flex-col items-end justify-center rounded-[6.0px] lg:rounded-[16px] w-[3.6em] h-[2.0em] px-[0.25em] zulo:w-[4.0em] zulo:h-[2.2em] lg:w-[4em] md:h-[2.4em] bg-mediumlighyellow border border-[0.15px] border-mediumgray'>
                            <p className='font-urbanist text-[0.38em] md:text-[0.32em] font-[700] text-blackgray'>
                                DealTracker
                            </p>
                            <img src={logo} alt="logo-img"/>
                            <p className='mt-[0.45em] font-urbanist self-start text-[0.18em] md:text-[0.22em] font-[700] text-blackgray'>
                            for Commercial Real Estate
                            </p>
                        </div>
                        <div className='flex gap-[0.4em]'>
                            <div className=' flex items-center justify-end rounded-[6.0px] lg:rounded-[16px] px-[0.25em] w-[3.6em] h-[2.0em] zulo:w-[4.0em] zulo:h-[2.2em] lg:w-[4em] md:h-[2.4em] bg-mediumlighyellow border border-[0.15px] border-mediumgray '>
                                <p className='font-sans text-[0.38em] md:text-[0.38em] lg:text-[0.35em] lg:px-[1em] font-[700] text-blackgray ml-[5px] '>90 seconds or less</p>

                            </div>
                            <div className=' flex items-center justify-center rounded-[6.0px] lg:rounded-[16px] px-[0.25em] w-[3.6em] h-[2.0em] zulo:w-[4.0em] zulo:h-[2.2em] lg:w-[4em] md:h-[2.4em] bg-mediumlighyellow border border-[0.15px] border-mediumgray'>
                                <p className='font-sans text-[0.38em] md:text-[0.38em] lg:text-[0.35em] lg:px-[1em] font-[700] text-blackgray'>~95-100%</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
