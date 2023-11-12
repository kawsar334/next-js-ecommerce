import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
      <div className='bg-[white] h-[400px] flex  items-center flex-col'>
          <div className='bg-gradient-to-b from-[#a3d3d6] to-[#d2e3e3] w-[95%] h-[400px]  '>
           <div className='flex flex-col justify-center items-center w-[50%] m-auto  h-[100%]'>
                  <h1 className='text-4xl font-[600] my-3'>All Your Need Here</h1>
                  <p className='w-[90%] text-[13px] text-center p-4 text-[#739365]'>Beatae cum eius, animi itaque aliquid ducimus facere dicta, vitae ipsam maiores nam sit blanditiis, quisquam expedita?</p>
                  <input type="text" name="" id="" placeholder='Anything you  want...' className='my-[10px] py-[12px] w-[80%] rounded-[30px] border-[1px]  border-[#739365] outline-none' />
                  <p>Looking for a Help? <Link href="#" className='text-[#239ca4]'>Get in touch with us</Link></p>
           </div>
      </div>
    </div>
  )
}

export default Hero