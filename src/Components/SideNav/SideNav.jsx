import React, { useState } from 'react'
import { AiOutlineHome, AiOutlineInfoCircle } from 'react-icons/ai'
import { BsPinAngle } from 'react-icons/bs'
// import {IoPeopleOutline} from 'react-icons/io'
import { TbReportSearch } from 'react-icons/tb'
import { GrValidate } from 'react-icons/gr'
import { FaEnvira } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SideNav = ({number}) => {
  const [toggle, setToggle] = useState(number);
  // const toggle=1;

  return (
    <div className='flex z-50'>
      <ul className='group-list !fixed !z-50 !left-0 !top-[30%]'>
        <li>
          <a onClick={(e) => {
            e.preventDefault();
            setToggle(1)
          }}
            class={`list-item  ${toggle === 1 ? '!bg-[#26a0a0] !w-[9em] !text-[#fffcfb] !translate-x-[2em]' : 'bg-black'}`} href=''>
          <Link to={'/'}>
            <AiOutlineHome />
            <span className={toggle === 1 ? '!block' : ''}>HOME</span>
            </Link>
          </a>
        </li>
        <li>
            <a onClick={(e) => { e.preventDefault(); setToggle(3) }} class='list-item' href=''
              className={`list-item  ${toggle === 3 ? '!bg-[#26a0a0] !w-[9em] !text-[#fffcfb] !translate-x-[2em]' : 'bg-black'}`}
            >
          <Link to='/testnet'>
              <BsPinAngle />
              <span className={toggle === 3 ? '!block' : ''}>TESTNET</span>
          </Link>
            </a>
        </li>
        <li>
          <a onClick={(e) => { e.preventDefault(); setToggle(4) }} class='list-item' href=''
            className={`list-item  ${toggle === 4 ? '!bg-[#26a0a0] !w-[9em] !text-[#fffcfb] !translate-x-[2em]' : 'bg-black'}`}
          >
            <Link to={'/research'}>
            <TbReportSearch />
            <span className={toggle === 4 ? '!block' : ''}>RESEARCH</span>
            </Link>
          </a>
        </li>
        <li>
          <a onClick={(ee) => { e.preventDefault(); setToggle(6) }} class='list-item' href=''
            className={`list-item  ${toggle === 6 ? '!bg-[#26a0a0] !w-[9em] !text-[#fffcfb] !translate-x-[2em]' : 'bg-black'}`}
          >
            <Link to={'/sustain'}>
            <FaEnvira />
            <span className={toggle === 6 ? '!block' : ''}>SUSTAIN</span>
            </Link>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SideNav
