import React from 'react'
import "../Sustainbility/Sustainability.css";
import Nature from "../Sustainbility/Nature.svg"
import logo from "../Sustainbility/5ire-Logo.svg"
import VidImg from "../TestNet/5ire-video.png"
// import Footer from '../Footer/Footer';
import { BsArrowUpRight } from "react-icons/bs"
import Footer from '../Footer/Footer';

const TestNet = () => {
    return (
        <>
            <main className="sustain flex flex-col  bg-no-repeat bg-cover bg-center">
                <div className="sustain-content flex flex-col justify-center items-center  -green-500  m-auto w-[85vw] h-[90vh] ">
                    <div className="heading m-4 w-[100%] flex flex-col text-center">
                        <h1 className='text-5xl m-auto  w-[32rem] text-white'>
                            Thunder : Beta
                        </h1>
                        <p className='text-3xl w-[32rem] m-auto  text-[#00ff38] '>5IRE TESTNET: LIVE NOW</p>
                    </div>
                    <div className=" m-20 w-[100%] flex justify-between">
                        <div className="para w-[35vw]">
                            <p className='text-white '>5ire is delighted to announce that its Testnet</p>
                            <p className='text-[#00ff38]'>Thunder: Beta is Now Live</p>
                            <p className='text-white my-6'>The Testnet paves a smooth path for realizing a fully functional and sustainable ecosystem.</p>
                            <p className='text-white my-6'>User experience and product efficiency are the top priorities for 5ireChain. The Testnet provides the opportunity to assess these factors.The outcome of the Testnet determines the next line of action– gearing up for the mainnet or going back to the drawing board.
                            </p>
                        </div>
                        <img src={VidImg} alt="" />
                    </div>
                </div>

                <div className="m-auto">
                    <ul className='flex justify-evenly'>
                        <li className='w-[20rem] border p-4 rounded-md hover:cursor-pointer mx-4 flex items-center justify-between'>
                            <div className='flex items-center justify-between'>
                                <img className='w-[3.5rem]' src={logo} alt="" />
                                <div className='mx-4'>
                                    <p className='text-white'>Get Started</p>
                                    <p className='text-[#00ff38]'>5ire Documentation</p>
                                </div>
                            </div>
                            <BsArrowUpRight className='text-white' />
                        </li>
                        <li className='w-[20rem] border p-4 rounded-md  hover:cursor-pointer mx-4 flex items-center justify-between'>
                            <div className='flex items-center justify-between'>
                                <img className='w-[3.5rem]' src={logo} alt="" />
                                <div className='mx-4'>
                                    <p className='text-white'>5ire Explorer</p>
                                </div>
                            </div>
                            <BsArrowUpRight className='text-white' />
                        </li>
                        <li className='w-[20rem] border p-4 rounded-md hover:cursor-pointer mx-4 flex items-center justify-between'>
                            <div className='flex items-center justify-between'>
                                <img className='w-[3.5rem]' src={logo} alt="" />
                                <div className='mx-4'>
                                    <p className='text-white'>Build To Earn</p>
                                </div>
                            </div>
                            <BsArrowUpRight className='text-white' />
                        </li>

                    </ul>
                </div>
                <p className='m-auto text-3xl my-[5rem] text-white'>TESTNET FEATURES</p>
                <img className='w-[80%] m-auto my-[1rem] bg-[#0b2f2f] p-8 rounded-lg' src="https://assets.website-files.com/6217c768b8b19637dc690fd8/63e8c13e63db55c4561b870c_FLowchart.svg" alt="" />
                <article className='flex items-center justify-evenly my-[8rem] h-fit  text-xl'>
                    <div className='m-auto p-4 rounded-lg bg-[#26a0a0]  w-[85vw]  flex items-center gap-10'>
                        <img src="https://assets.website-files.com/6217c768b8b19637dc690fd8/6386fcf1a14aa44fbe7035b6_Website%20Explorer.png" alt="" />
                        <div>
                            <h1 className='text-[#0b2f2f] text-3xl border-b-2 border-[#0b2f2f] w-fit pb-2'>5ire Explorer</h1>
                            <p className='py-4  text-white'>
                            The 5ire Explorer is a real-time multichain data sharing and transaction processing platform. This unique platform gives users access to 5ireChain transaction data within seconds — an innovation that improves and encourages transparency throughout our ecosystem.

                            </p>
                        </div>
                    </div>
                </article>
                <article className='flex items-center justify-evenly my-[8rem] h-fit  text-xl'>
                    <div className='m-auto p-4 rounded-lg bg-[#26a0a0]  w-[85vw]  flex items-center gap-10'>
                        <div>
                            <h1 className='text-[#0b2f2f] text-3xl border-b-2 border-[#0b2f2f] w-fit pb-2'>5ireChain  Wallet</h1>
                            <p className='py-4  text-white'>
                                The 5ire wallet is a highly reliable and secure crypto wallet that offers users an intuitive, all-in-one experience. The 5ire wallet aims to fill an unaddressed market of mobile-first crypto adopters.
                            </p>
                        </div>
                        <img src="https://assets.website-files.com/6217c768b8b19637dc690fd8/6386f913b348d1908e38a0c8_Website%20wallet.png" alt="" />
                    </div>
                </article>
                <Footer />
            </main>
        </>
    )
}
export default TestNet