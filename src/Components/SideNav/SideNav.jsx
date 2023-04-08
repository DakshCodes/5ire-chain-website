import React, { useState } from 'react'
import { AiOutlineHome, AiOutlineInfoCircle } from 'react-icons/ai'
import { BsPinAngle } from 'react-icons/bs'
// import {IoPeopleOutline} from 'react-icons/io'
import { TbReportSearch } from 'react-icons/tb'
import { GrValidate } from 'react-icons/gr'
import { FaEnvira } from 'react-icons/fa'

const SideNav = () => {
  const [toggle, setToggle] = useState(1);
  // const toggle=1;

  return (
    <div className='flex z-50'>
      <ul className='group-list !fixed !z-50 !left-0 !top-[25%]'>
        <li>
          <a onClick={(e) =>{e.preventDefault();
           setToggle(1)}}
            class={`list-item  ${toggle === 1 ? '!bg-[#26a0a0] !w-[9em] !text-[#fffcfb] !translate-x-[2em]' : 'bg-black'}`} href=''>
            <AiOutlineHome />
            <span className={toggle === 1 ? '!block' : ''}>HOME</span>
          </a>
        </li>
        <li>
          <a onClick={(e) =>{e.preventDefault(); setToggle(2)}} className={`list-item  ${toggle === 2 ? '!bg-[#26a0a0] !w-[9em] !text-[#fffcfb] !translate-x-[2em]' : 'bg-black'}`} href=''

          >
            <AiOutlineInfoCircle />
            <span className={toggle === 2 ? '!block' : ''}>ABOUT</span>
          </a>
        </li>
        <li>
          <a onClick={(e) =>{e.preventDefault(); setToggle(3)}} class='list-item' href=''
            className={`list-item  ${toggle === 3 ? '!bg-[#26a0a0] !w-[9em] !text-[#fffcfb] !translate-x-[2em]' : 'bg-black'}`}
          >
            <BsPinAngle />
            <span className={toggle === 3 ? '!block' : ''}>TESTNET</span>
          </a>
        </li>
        <li>
          <a onClick={(e) =>{e.preventDefault(); setToggle(4)}} class='list-item' href=''
            className={`list-item  ${toggle === 4 ? '!bg-[#26a0a0] !w-[9em] !text-[#fffcfb] !translate-x-[2em]' : 'bg-black'}`}
          >
            <TbReportSearch />
            <span className={toggle === 4 ? '!block' : ''}>RESEARCH</span>
          </a>
        </li>
        <li>
          <a onClick={(e) =>{e.preventDefault(); setToggle(5)}} class='list-item' href=''
            className={`list-item  ${toggle === 5 ? '!bg-[#26a0a0] !w-[9em] !text-[#fffcfb] !translate-x-[2em]' : 'bg-black'}`}
          >
            <GrValidate />
            <span className={toggle === 5 ? '!block' : ''}>VALIDATOR</span>
          </a>
        </li>
        <li>
          <a onClick={(ee) =>{e.preventDefault(); setToggle(6)}} class='list-item' href=''
            className={`list-item  ${toggle === 6 ? '!bg-[#26a0a0] !w-[9em] !text-[#fffcfb] !translate-x-[2em]' : 'bg-black'}`}
          >
            <FaEnvira />
            <span className={toggle === 6 ? '!block' : ''}>SUSTAIN</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SideNav
