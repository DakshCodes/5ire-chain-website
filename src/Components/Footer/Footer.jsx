import React from 'react'
// import logo from "../../assets/5ire-Logo.svg"
import {BsTwitter} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsDiscord} from "react-icons/bs"
import {FaTelegramPlane} from "react-icons/fa"


const Footer = () => {
  return (
    <footer className=' mt-8 flex  flex-col h-[85vh] '>
        <div className='text-white flex flex-col justify-center p-8 bg-[#26a0a0] h-[15rem] mx-auto  w-[100%] text-center'>
            <h1 className='text-4xl text-black'>Flash the 5ire with us</h1>
            <p className='text-base'>Subscribe to Newsletter</p>
            <form action="">
                <input className='p-2 outline-none m-8 w-[35%] rounded-lg text-black' type="text" placeholder='Enter the Email Address' />
                <button className='bg-black p-2 rounded-lg'>Subscribe Now</button>
            </form>
        </div>
        <div className='flex justify-evenly p-4 h-[100%]'>
            <div className='flex flex-col gap-[2rem] w-fit h-[89%] '>
                <img className='w-[8rem] h-auto ' src="https://assets.website-files.com/6217c768b8b19637dc690fd8/6339a315dcb06d4cfb80e568_white%20website.svg" alt="" />
                <h1 className='text-white text-3xl'>Follow Us</h1>
                <div className="socail-icons flex justify-between w-[10rem] text-3xl text-white ">
                    <BsTwitter />
                    <BsGithub />
                    <FaTelegramPlane />
                    <BsDiscord />
                </div>
            </div>
            <div className="text-left w-[15%] h-[89%]">
                <h1 className='text-3xl mb-2 text-[#26a0a0]'>General</h1>
                <ul className='text-white text-left'>
                    <li className='my-4'>About us</li>
                    <li className='my-4'>Documentation</li>
                    <li className='my-4'>Contact</li>
                    <li className='my-4'>News & Media</li>
                </ul>
            </div>
            <div className="text-left w-[8%] h-[89%]">
                <h1 className='text-3xl mb-2 text-[#26a0a0]'>Explore</h1>
                <ul className='text-white text-left'>
                    <li className='my-4'>Blog</li>
                    <li className='my-4'>Community</li>
                    <li className='my-4'>Roadmap</li>
                    <li className='my-4'>Brand Kit</li>
                </ul>
            </div>
            <div className="text-left    w-[15%] h-[89%]">
                <h1 className='text-3xl mb-2 text-[#26a0a0]'>Foundation</h1>
                <ul className='text-white text-left'>
                    <li className='my-4'>Reasearch</li>
                    <li className='my-4'>Become a Validator</li>
                    <li className='my-4'>5ire Ambassador Program</li>
                </ul>
            </div>
            <div className="text-left  w-[8%] h-[89%]">
                <h1 className='text-3xl mb-2 text-[#26a0a0]'>Legal</h1>
                <ul className='text-white text-left'>
                    <li className='my-4'>Privacy policy</li>
                    
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer
