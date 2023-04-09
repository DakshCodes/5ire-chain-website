import React from 'react'
import cube from '../../assets/cube3.png';
import cube2 from '../../assets/blue-bloack-bg.png';
import Logo from '../../assets/5ire-Logo.svg';
import SocialIcons from '../SocialIcons/SocialIcons'
import { BsArrowUpRight } from 'react-icons/bs'


const Home = () => {
  return (
    <section className="h-[100vh] w-full bg-[url('/src/assets/bg.jpg')] bg-cover -z-50">
      {/* Header */}
      <div className='flex  justify-around gap-10 py-9 h-[15vh] items-center'>
        <img src={Logo} alt="Logo" className='z-50 w-16 h-auto' />
        <div className=' cursor-pointer bg-[#26a0a0] hover:bg-transparent hover:border-2 border-2 hover:border-solid border-solid hover:border-[#26a0a0] border-[#26a0a0] transition-all duration-300 py-3 px-3 rounded-md'>
          <button className='text-white  font-medium text-xl'>5ire Expolorer</button>
        </div>
      </div>

      {/* Home-Content */}
      <div className=' h-[85vh] flex  flex-col  items-center relative  '>
        <div className='flex flex-col   justify-center items-center
         z-10'>
          <p className='outline-title text-[14rem]   flex justify-start items-start  font-medium '>5ire</p>
          <span className='text-white text-[1.9rem]   font-bold uppercase'>where</span>
          <span className='text-white text-[1.9rem]  font-bold uppercase'>block chain</span>
          <span className='text-white text-[1.9rem]  pt-2 font-bold uppercase'>Meets <span className='text-white font-bold  bg-[#26a0a0] py-0 px-2 rounded-md'>Sustainability</span></span>
        </div>



        <ul className='flex z-50 justify-evenly my-16 flex-wrap gap-7 mr-5'>
          <li className='w-[13rem] border border-[#26a0a0] hover:bg-[#26a0a0]  border-2  transition-all duration-300  py-2 rounded-3xl  cursor-pointer  flex items-center justify-center'>
            <div className='flex items-center justify-between'>
              <div className='mx-4'>
                <p className='text-white font-medium text-xl'>Get Started</p>
                <p className='text-[#00ff38] font-medium '>5ire Documentation</p>
              </div>
            </div>
            <BsArrowUpRight className='text-[#26a0a0] text-xl' />
          </li>
          <li className='w-[13rem] border border-2 border-[#26a0a0]  hover:bg-[#26a0a0] transition-all duration-300   py-4 rounded-3xl  cursor-pointer  flex items-center justify-center'>
            <div className='flex items-center justify-between'>
              <div className='mx-4'>
                <p className='text-white font-medium text-xl'>5ire Explorer</p>
              </div>
            </div>
            <BsArrowUpRight className='text-[#26a0a0] text-xl' />
          </li>
          <li className='w-[13rem] text-center border-2 border-[#26a0a0] hover:bg-[#26a0a0] transition-all duration-300    border py-4 rounded-3xl cursor-pointer  flex items-center justify-center'>
            <div className='flex items-center justify-between'>
              <div className='mx-4'>
                <p className='text-white font-medium text-xl'>Build To Earn</p>
              </div>
            </div>
            <BsArrowUpRight className='text-[#26a0a0] text-xl' />
          </li>
        </ul>


      </div>
      <div className='absolute z-0 top-28 left-[15%]  w-[70%]   '>
        <img className='cube-animate' src={cube} alt="" />
        <img className='cube-animate2' src={cube} alt="" />
        <img className='cube-animate3' src={cube} alt="" />
        <img className='cube-animate4' src={cube} alt="" />
        <img className='w-full animate-pulse' src={cube2} alt="" />
        <SocialIcons />
      </div>
    </section>
  )
}

export default Home
