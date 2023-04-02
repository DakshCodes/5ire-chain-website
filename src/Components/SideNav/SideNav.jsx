import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
const SideNav = () => {
  return (
    <div className='flex border-y-2 h-[100vh] items-center'>
      <ul>
        <li>
          <a class='list-item' href=''>
            {/* <i class='icon-reorder'></i> */}
            <AiOutlineHome />
          </a>
        </li>
        <li>
          <a class='list-item' href=''>
            <i class='icon-th-large'></i>
          </a>
        </li>
        <li>
          <a class='list-item' href=''>
            <i class='icon-bar-chart'></i>
          </a>
        </li>
        <li>
          <a class='list-item' href=''>
            <i class='icon-tasks'></i>
          </a>
        </li>
        <li>
          <a class='list-item' href=''>
            <i class='icon-bell'></i>
          </a>
        </li>
        <li>
          <a class='list-item' href=''>
            <i class='icon-archive'></i>
          </a>
        </li>
        <li>
          <a class='list-item' href=''>
            <i class='icon-comment'></i>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SideNav
