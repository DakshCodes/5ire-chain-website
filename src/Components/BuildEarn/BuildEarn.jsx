import React from 'react'
import VidImg from "../TestNet/5ire-video.png"
import Footer from '../Footer/Footer'
import "../BuildEarn/BuildEarn.css"


const BuildEarn = () => {
    return (
        <>
            <main className="sustain flex flex-col  bg-no-repeat bg-cover bg-center">
                <div className="sustain-content flex flex-col justify-center items-center m-auto w-[85vw] h-[90vh] ">
                    <div className="heading m-4 w-[100%] flex flex-col text-center">
                        <h1 className='text-5xl m-auto  w-[32rem] text-white'>
                            #BUILDTOEARN 
                        </h1>
                    </div>
                    <div className=" m-20 w-[100%] flex justify-between">
                        <div className="para w-[35vw]">
                            <p className='text-white '>5ire is delighted to announce that its Testnet</p>
                            <p className='text-[#00ff38]'>Thunder: Beta is Now Live</p>
                            <p className='text-white my-6'>The Testnet paves a smooth path for realizing a fully functional and sustainable ecosystem.</p>
                            <p className='text-white my-6'>User experience and product efficiency are the top priorities for 5ireChain. The Testnet provides the opportunity to assess these factors.The outcome of the Testnet determines the next line of action– gearing up for the mainnet or going back to the drawing board.</p>
                            <button className='bg-[#26a0a0] p-2 rounded-md'>BuildToEarn</button>
                        </div>
                        <img src={VidImg} alt="" />
                    </div>
                </div>
                <article className='flex items-center justify-evenly my-[8rem] h-fit  text-xl'>
                    <div className='glass m-auto p-4 rounded-lg bg-[#26a0a0]  w-[85vw]  flex items-center gap-10'>
                        <div>
                            <h1 className='text-[#26a0a0] text-3xl border-b-2 border-[#0b2f2f] w-fit pb-2'>What’s in it for you?</h1>
                            <ul className="p-10 text-white">
                                <li className='list-disc my-4'>Top 10 dApps to receive an incentive after evaluation.</li>
                                <li className='list-disc my-4'>An opportunity to earn rewards through our referral program and grants scheme.</li>
                                <li className='list-disc my-4'>An incentivization scheme for dApps focused on sustainable development.</li>
                                <li className='list-disc my-4'>Reduced gas fees for early adopters and the first 500 builders to receive a share of block rewards.</li>
                            </ul>
                                
                        </div>
                        <img src="https://assets.website-files.com/6217c768b8b19637dc690fd8/63e855de707380d0091ff61b_Image.png" alt="" />
                    </div>
                </article>
                <article className='flex items-center justify-evenly my-[8rem] h-fit  text-xl'>
                    <div className='glass m-auto p-4 rounded-lg bg-[#26a0a0]  w-[85vw]  flex items-center gap-10'>
                        <img src="https://assets.website-files.com/6217c768b8b19637dc690fd8/63e857ca1a7c2002dce6613f_Code%20Screen.png" alt="" />
                        <div>
                            <h1 className='text-[#26a0a0] text-3xl border-b-2 border-[#0b2f2f] w-fit pb-2'>As a 5ire developer, you’ll have access to:</h1>
                            <ul className="p-10 text-white">
                                <li className='list-disc my-4'>A dedicated support team,</li>
                                <li className='list-disc my-4'>Investors for easier fundraising</li>
                                <li className='list-disc my-4'>A yearly private event where you can network with other developers and industry experts.</li>
                                <li className='list-disc my-4'>To participate in the #BuildToEarn campaign, developers must align their token rewards with the 5ire tokenomics team and feature-based rewards with our tech team.</li>
                            </ul>
                                
                        </div>
                    </div>
                </article>
                
                <Footer />
            </main>
        </>
    )
}

export default BuildEarn
