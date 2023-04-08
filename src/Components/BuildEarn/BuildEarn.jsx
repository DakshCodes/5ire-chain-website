import React from 'react'
import VidImg from "../TestNet/5ire-video.png"
import Footer from '../Footer/Footer'


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
                <Footer />
            </main>
        </>
    )
}

export default BuildEarn
