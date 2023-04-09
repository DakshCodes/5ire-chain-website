import React from 'react'
import Home from '../Components/Home/Home'
import Home2 from '../Components/Home2/Home2'
import Home3 from '../Components/Home3/Home3'
import Home4 from '../Components/Home4/Home4'
import Home5 from '../Components/Home5/Home5'
import Home6 from '../Components/Home6/Home6'
import Home7 from '../Components/Home7/Home7'
import SideNav from '../Components/SideNav/SideNav'
const Landing = () => {
    return (
        <>
          <SideNav number={1} />
            <Home />
            <Home2 />
            <Home3 />
            <Home4 />
            <Home5 />
            <Home6 />
            <Home7 />
        </>
    )
}

export default Landing
