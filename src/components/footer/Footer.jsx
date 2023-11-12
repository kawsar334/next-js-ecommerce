import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#f9fafb] mt-[40px]'>
     <div className='flex justify-around  w-[90%] m-auto'>
      <ul>
        <li className='font-[600] text-2xl'>Company</li>
        <li><Link href="#">About Us</Link></li>
          <li><Link href="#">Contact Us</Link></li>
          <li><Link href="#">Careers </Link></li>
          <li><Link href="#">Latest news</Link></li>
      </ul>
        <ul>
          <li className='font-[600] text-2xl'>Top Category</li>
          <li><Link href="#">Fish & Meat</Link></li>
          <li><Link href="#">Soft Drinks</Link></li>
          <li><Link href="#">Baby Care </Link></li>
          <li><Link href="#">Beauty & Health</Link></li>
        </ul>
        <ul>
          <li className='font-[600] text-2xl'>My Account</li>
          <li><Link href="#">Dashboard</Link></li>
          <li><Link href="#">My Orders</Link></li>
          <li><Link href="#">Recent Orders </Link></li>
          <li><Link href="#">Updated Profile</Link></li>
        </ul>
        <ul>
          <li className='font-[600] text-3xl'>Kawsar</li>
          <li><Link href="#">Lake Hestertown, USA</Link></li>
          <li><Link href="#">Tell: 02.356.1666</Link></li>
          <li><Link href="#">Email: ccruidk@test.com </Link></li>
        </ul>
     </div>
    </div>
  )
}

export default Footer