import React from 'react'
import '../Research/Research.css'
import logo from "../Sustainbility/5ire-logo.svg"
import Footer from '../Footer/Footer'
import SideNav from '../SideNav/SideNav'



const Research = () => {
  return (
    <>
      <SideNav number={4} />
      <main className='sustain h-[100vh] '>

        <div className="flex flex-col  bg-no-repeat bg-cover bg-center">
          <div className="sustain-content flex flex-col justify-center items-center m-auto w-[85vw] h-[90vh] ">

            <div className=" m-20 w-[100%] flex justify-between">
              <div className="para w-[35vw]">
                <p className='text-white text-5xl w-[30rem] my-[4rem]'>Published Research Papers</p>
                <button className='bg-[#26a0a0] p-2 rounded-md'>Learn More</button>
              </div>
              {/* <img src={VidImg} alt="" /> */}
              <div className="img blob flex items-center justify-center">
                <img className='w-[12rem]' src={logo} alt="" />

              </div>
            </div>
          </div>
        </div>
        <article className='flex items-center justify-evenly my-[8rem] h-fit  text-xl'>
          <div className='m-auto p-4 rounded-lg bg-[#26a0a0]  w-[85vw]  flex items-center gap-10'>
            <img src="https://assets.website-files.com/6217c768b8b19637dc690fd8/6386fcf1a14aa44fbe7035b6_Website%20Explorer.png" alt="" />
            <div>
              <h1 className='text-[#0b2f2f] text-3xl border-b-2 border-[#0b2f2f] w-fit pb-2'>5ire Explorer</h1>
              <p className='py-4  text-white'>
                The 5ire Explorer is a real-time multichain data sharing and transaction processing platform. This unique platform gives users access to 5ireChain transaction data within seconds — an innovation that improves and encourages transparency throughout our ecosystem.
              </p>
              <button className='border border-[#0b2f2f] p-2 rounded-md'>Learn More</button>
            </div>
          </div>
        </article>

        <article className='flex items-center justify-evenly '>
          <div className='glass m-auto p-4 rounded-lg bg-[#26a0a0]  w-[35vw]  flex flex-col items-center gap-10'>
            <img src="https://assets.website-files.com/6217c768b8b19637dc690fd8/62cecbeb5128b4ee0039bef6_CAI-p-500.png" alt="" />
            <div className='text-center flex flex-col items-center '>
              <h1 className='text-[#26a0a0]  border-[#0b2f2f] text-3xl w-fit pb-2'>ISO 307</h1>
              <ul className="p-10 text-white">
                <li className=' text-xl'>BlockChain Distributred Ledger Technologies .</li>
              </ul>

            </div>
          </div>
          <div className='glass m-auto p-4 rounded-lg bg-[#26a0a0]  w-[35vw]  flex flex-col items-center gap-10'>
            <img src="https://assets.website-files.com/6217c768b8b19637dc690fd8/62cecbeb5128b4ee0039bef6_CAI-p-500.png" alt="" />
            <div className='text-center flex flex-col items-center '>
              <h1 className='text-[#26a0a0]  border-[#0b2f2f] text-3xl w-fit pb-2'>ISO 307</h1>
              <ul className="p-10 text-white">
                <li className=' text-xl'>BlockChain Distributred Ledger Technologies-Vocabulary .</li>
              </ul>

            </div>
          </div>
        </article>
        <Footer />

      </main>
    </>
  )
}

export default Research
