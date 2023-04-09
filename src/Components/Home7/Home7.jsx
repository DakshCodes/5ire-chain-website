import React from 'react'

const Home7 = () => {
    return (
        <div className='h-[70vh] relative  bg-[#ECBD6F]'>
            <h1 className=' flex justify-center  text-black text-2xl uppercase p-10 font-bold tracking-[5px]'>Technology partners</h1>
            <div className='bg-[#775927] flex justify-center gap-10 '>
                <div className=' flex flex-col justify-center p-10 gap-5'>
                    <h1 className='text-[#ECBD6F] text-3xl  mt-5    w-fit'>General</h1>
                    <ul className='text-white cursor-pointer p-5  w-fit text-left  flex flex-col gap-3 text-2xl'>
                        <li>About Us</li>
                        <li>Documentation</li>
                        <li>Contact Us</li>
                        <li>News & Media</li>
                    </ul>
                </div>
                <div className=' flex flex-col justify-center p-10 gap-5'>
                    <h1 className='text-[#ECBD6F] text-3xl  mt-5    w-fit'>Explore</h1>
                    <ul className='text-white cursor-pointer p-5  w-fit text-left flex flex-col gap-3  text-2xl'>
                        <li>Blog</li>
                        <li>Community</li>
                        <li>Roadmap</li>
                        <li>Brand Kit</li>
                    </ul>
                </div>
                <div className=' flex flex-col justify-center p-10 gap-5'>
                    <h1 className='text-[#ECBD6F] text-3xl  mt-5    w-fit'>Foundation</h1>
                    <ul className='text-white cursor-pointer p-5 w-fit text-left text-2xl  flex flex-col gap-3 '>
                        <li>Research</li>
                        <li>Become a Validator</li>
                        <li>5ire Ambassador Program</li>
                        <li>Sustainability</li>
                    </ul>
                </div>
                <div className=' flex flex-col justify-center p-10 gap-5'>
                    <h1 className='text-[#ECBD6F] text-3xl  mt-5    w-fit'>Legal</h1>
                    <ul className='text-white py-16 cursor-pointer w-fit text-left  flex flex-col gap-3 text-2xl'>
                     <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>
            <h1 className='absolute bottom-0 left-[40%] text-black pt-10'>ALL RIGHTS RESERVED @ 5IRE 2023</h1>
        </div>
    )
}

export default Home7
