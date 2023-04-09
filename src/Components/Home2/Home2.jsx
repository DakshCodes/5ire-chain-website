import React from 'react'

const Home2 = () => {
  return (
    <section className="h-[100vh] bg-[#0b2f2f]  bg-cover">
      <h1 className=' flex justify-center  text-white text-3xl uppercase p-4 font-bold'>$Build To Earn</h1>
      <div className='home2-box  h-[90vh]   w-full '>
        <div  className='border-2   p-12 w-[40%] ml-32 rounded-2xl ' >
            <li className='text-white font-medium text-xl'>An opportunity to earn rewards through our referral program and grants scheme.</li>
        </div>
        <div className='border-2  p-12 w-[40%] mr-32 rounded-2xl '>
            <li className='text-white font-medium text-xl'>Reduced gas fees for early adopters and the first 500 builders to receive a share of block rewards.</li>
        </div>
        <div className='border-2  p-12 w-[40%] ml-32 rounded-2xl '>
            <li className='text-white font-medium text-xl'>An incentivization scheme for dApps focused on sustainable development.</li>
        </div>
        <div className='border-2  p-12 w-[40%] mr-32 rounded-2xl '>
            <li className='text-white font-medium text-xl'>Top 10 dApps to receive an incentive after evaluation.</li>
        </div>
      </div>
    </section>
  )
}

export default Home2
