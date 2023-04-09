import React from 'react'
import partner from '../../assets/p2.png'
import partner2 from '../../assets/p3.png'

const Home6 = () => {
    return (
        <div className='bg-black h-screen py-20 '>
            <h1 className=' flex justify-center  text-white text-2xl uppercase p-5 font-medium tracking-[5px]'>Technology partners</h1>

            <div className=' w-[90vw] items-center  h-1/2  m-auto flex flex-wrap justify-center gap-36'>
                <div>
                    <img src={partner} alt="" className='h-24 w-full  ' />
                </div>
                <div>
                    <img src={partner2} alt="" className='h-24 w-full  ' />
                </div>
            </div>

            {/* <div class="relative w-[80vw] m-auto  ">
                <div class="absolute inset-0 w-[80vw] h-[50vh] bg-pink-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-0 slide">Hello</div>
                <div class="absolute inset-0 w-screen h-screen bg-purple-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-full slide">There</div>
                <div class="absolute inset-0 w-screen h-screen bg-teal-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform translate-x-full slide">Booya!</div>
                <div class="fixed bottom-0 right-0 bg-white w-16 h-16 flex items-center justify-center text-black">&#x276F;</div>
                <div class="fixed bottom-0 right-0 bg-white w-16 h-16 mr-16 border-r border-gray-400 flex items-center justify-center text-black">&#x276E;</div>
            </div> */}
        </div>
    )
}

export default Home6
