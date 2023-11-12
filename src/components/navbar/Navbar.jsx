

import Link from 'next/link'
import React, { useState } from 'react'
import Login from '../login/Login'

const Navbar = () => {

    const [open, setOpen] = useState(false)
    return (
        <div className='bg-[#219ebc] sticky top-0 z-30 w-full h-[70px] flex justify-between gap-10 items-center p-2 '>
            <Link  href="/" className='w-[200px] ml-12 font-extrabold text-[#023047] text-3xl '>kawsar </Link>
            <ul className='flex gap-3  flex-wrap items-center mr-[70px]'>
                <li className='text-[black] bg-[#fca311] font-bold uppercase cursor-pointer w-[100px] h-[50px] flex justify-center items-center  rounded-[10px]'>Create ad</li>
                {!open &&<li className='text-[lightgray] font-bold capitalize cursor-pointer ' onClick={()=>setOpen(!open)}>Sign In</li>}
            </ul>
            {open && <div  className="logincontainer absolute w-[100vw] h-[100vh] bg-[rgb(0,0,0,0.3)] top-0 left-0  flex justify-center items-center z-10">
                <Login open={open} setOpen={setOpen}/>
                
            </div>}


        </div>
    )
}

export default Navbar