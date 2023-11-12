"use client"

import React from 'react'
import {useState} from "react";
import {Electronics, Books} from "./data.js"

const NavTwo = () => {

    const [data, setData]= useState(Electronics)
    const [selectedData, setSelectedData] = useState("Electronics")
    const [open, setOpen] = useState(false)



    const handleCat= (cat)=>{
        if(cat=== "Electronics"){
            setData(Electronics)
            setSelectedData("Electronics")
            if(open===true){
                setOpen(!open)
            }else{
                setOpen(!open)
            }
        }else{
            setData(Books)
            setSelectedData("Books")
            setOpen(true)
             if(open===false){
                setOpen(!open)
            }else{
                setOpen(!open)

            }

        }
    }
  

  return (
    <div className='shadow p-[15px] pl-[40px] relative '>
        <ul className="flex gap-[30px]  ">
            <li className="cursor-pointer font-[600]" onClick={()=>handleCat("Electronics")}>Electronics</li>
            <li className="cursor-pointer font-[600]" onClick={()=>handleCat("Books")}>Books</li>
            <li className="cursor-pointer font-[600]">About Us</li>
        </ul>
        {open &&<ul  className={`shadow  bg-[white] w-[300px] top-10 absolute p-5  flex gap-[20px] flex-col  rounded-[10px] ${selectedData ==="Electronics"?"left-0":"left-[100px]"} `}>
            {
                data.map((item)=>(
                    <li key={item.id}>{item.name}</li>
                )) 
            }
        </ul>
}
    </div>
  )
}

export default NavTwo