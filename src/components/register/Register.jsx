import React from 'react'

const Register = ({setOpen,setToggle}) => {
  return (
    
      <form action="" className="relative w-[500px] h-[100vh] bg-[white] rounded-[20px] flex justify-center items-center flex-col gap-[20px] ">
          <span className='absolute right-[10px] top-[10px] p-2 border bg-[crimson] cursor-pointer rounded  text-[white] hover:bg-transparent hover:text-[crimson] border-[crimson]' onClick={() => setOpen(!open)}>close</span>
          <h1 className="text-2xl text-semibold cursor-pointer font-[600]">Register </h1>
          <div className="flex flex-col gap-[5px]">
              <label className="my-1">Email</label>
              <input type="Email" placeholder="kawsarfiroz@gmail.com" className="border p-2 outline-none outline-none rounded-[10px] w-[400px] p-3" />
              <span className="text-[13px] text-[crimson]">Error message</span>
          </div>
          <div className="flex flex-col gap-[5px] ">
              <label className="my-1">Email</label>
              <input type="Email" placeholder="kawsarfiroz@gmail.com" className="border p-2 outline-none outline-none rounded-[10px] w-[400px] p-3" />
              <span className="text-[13px] text-[crimson]">Error message</span>
          </div>
          <div className="flex flex-col gap-[5px] ">
              <label className="my-1">Email</label>
              <input type="Email" placeholder="kawsarfiroz@gmail.com" className="border p-2 outline-none outline-none rounded-[10px] w-[400px] p-3" />
              <span className="text-[13px] text-[crimson]">Error message</span>
          </div>
          
          <button className="btn border w-[400px]  p-2 rounded bg-[crimson] ">Register</button>
          {/* <span>Or</span>
          <button className="btn   w-[400px]  p-2 rounded  hover:text-[white] text-[gray] hover:bg-[blue] font-[700]">Login With facebook</button> */}
          <div className="flex w-[400px] text-center text-[13px] justify-center gap-[5px]  ">
              Already have an account ?<span className="font-[600] text-[14px] cursor-pointer" onClick={() => setToggle(true)}>login</span>
          </div>
      </form>
  )
}

export default Register