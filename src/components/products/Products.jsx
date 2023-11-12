import React from 'react'

const Products = ({data}) => {

  return (
    <div className='flex flex-col justify-center items-center my-[50px]  '>
      <div className=''>
        <h1 className='text-2xl text-center my-2 font-[600]'>Popular Products</h1>
        <p className='text-center my-2 '>This is popular product section you can buy from here also</p>
        <div className='flex gap-[10px] w-[90%]'>
        {
          data.slice(0, 5).map((item)=>(
            <div className='flex gap-[10px] items-center my-5 '>
          <div className='w-[300px] h-[320px] rounded-[10px] cursor-pointer  overflow-hidden flex flex-col gap-[10px] shadow'>
              <img src="/s.png" alt="loading..." className='w-[100%] h-[200px] object-cover' />
              <p  className='pl-2'>107534 baton Rouge, La 729834, USA </p>
              <p className='font-[600] pl-2'>$494844</p>
              <div className='flex justify-between px-2'>
                <span className='font-[600]'>8093skdj</span>
                <span className='font-[600]'>november </span>
              </div>
            </div>
        </div>
            ))
          }
          </div>
      </div>
{/* ===================================== */}
      <div className=''>
        <h1 className='text-2xl text-center my-2 font-[600]'>New Products</h1>
        <p className='text-center my-2 '>This is New product section you can buy from here also</p>
        <div className='flex gap-[10px] w-[90%]'>
          {
            data.slice(0, 5).map((item) => (
              <div className='flex gap-[10px] items-center my-5 '>
                <div className='w-[300px] h-[320px] rounded-[10px] cursor-pointer  overflow-hidden flex flex-col gap-[10px] shadow'>
                  <img src="/s.png" alt="loading..." className='w-[100%] h-[200px] object-cover' />
                  <p className='pl-2'>107534 baton Rouge, La 729834, USA </p>
                  <p className='font-[600] pl-2'>$494844</p>
                  <div className='flex justify-between px-2'>
                    <span className='font-[600]'>8093skdj</span>
                    <span className='font-[600]'>november </span>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
{/* ===================================== */}

    </div>
  )
}

export default Products