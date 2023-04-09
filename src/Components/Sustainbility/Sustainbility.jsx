import React from 'react'
import "../Sustainbility/Sustainability.css";
import Nature from "../Sustainbility/Nature.svg"
import logo from "../Sustainbility/5ire-Logo.svg"
import Footer from '../Footer/Footer';
import SideNav from '../SideNav/SideNav';

const Sustainbility = () => {
  return (
    <>
    <SideNav number={6} />
      {/* This is the Sustainability Homepage */}
      <main className="sustain flex flex-col  bg-no-repeat bg-cover bg-center">
        <div className="sustain-content flex items-center justify-between m-auto w-[85vw] h-[90vh] ">
          <div className="heading">
            <img className='w-[6rem] my-[1rem] h-auto' src={logo} alt="" />
            <h1 className='text-5xl w-[32rem] text-white'>We want to play our
              part in building a sustainable future and positively impacting
              the planet.
            </h1>
          </div>
          <img className='w-[30rem] h-auto' src={Nature} alt="" />
        </div>
        <article className='flex items-center justify-evenly bg-[#26a0a0] my-[3rem]  h-fit  text-xl'>
          <p className='py-4 m-auto  w-[85vw]  text-white'>Blockchain has found use cases in fintech, voting, digital identity, health, and agriculture as it continues to evolve. The world can also exploit this nascent technology to enable a sustainable environment. 5ire is capitalizing on the potential of this technology to develop a blockchain solution that fosters sustainability.</p>
        </article>

        <article className='flex items-center justify-evenly my-[8rem] h-fit  text-xl'>
          <div className='m-auto p-4 rounded-lg bg-[#26a0a0]  w-[85vw]  flex items-center gap-10'>
            <img src="https://assets.website-files.com/6217c768b8b19637dc690fd8/6330c6185932be1d30a31e21_SUS.png" alt="" />
            <p className='py-4  text-white'>Blockchain has found use cases in fintech, voting, digital identity, health, and agriculture as it continues to evolve. The world can also exploit this nascent technology to enable a sustainable environment. 5ire is capitalizing on the potential of this technology to develop a blockchain solution that fosters sustainability.</p>
          </div>
        </article>
        <article className='flex items-center justify-evenly bg-[#26a0a0] my-[1rem]  h-fit  text-xl'>
          <p className='py-4 m-auto text-center w-[85vw]  text-white'>We consider our impact on people and the planet in everything we do. And we
            continue to ask ourselves how we can make our work an even greater force for
            good in the world.</p>
        </article>
        <article className='flex flex-col items-center justify-evenly my-[0.5rem]  h-fit  text-3xl'>
          <p className='m-auto text-center w-[85vw] text-white'>
            With 💖 to 🌍 🍀🌲
          </p>
          <p className='m-auto text-center w-[85vw] text-white'>
            5ire Team
          </p>
        </article>
        <Footer />
      </main>

    </>
  )
}

export default Sustainbility
