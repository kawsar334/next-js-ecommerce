import React from 'react'

const AddItemCart = () => {
  return (
    <div className='bg-[white] w-[100%] flex justify-center items-center '>
          <div className='w-[80%] h-[500px] border-[35px] border-[#219ebc] rounded bg-[white]  flex justify-between items-center'>
            <div className='w-[50%] h-100% px-[20px] flex flex-col gap-[10px]  '>
                <p>Quality Products and services </p>
                  <h1 className='text-2xl  font-[600]'>Quick Delivery to <span className='text-[#219ebc]'>Your Home</span></h1>
                  <p className=''>There are many products you will find our shop, Choose your necessary product from our Kollsh shop. See latest products from here and get a special discount.</p>
                  <button className='bg-[#219ebc] px-[10px] w-[200px] py-[5px] rounded  text-[white]'>Download App</button>
            </div>
          <img src="http://localhost:3001/images/additemcard.svg" alt="Loading..."className='h-[100%] '  />
        </div>
        
    </div>
  )
}

export default AddItemCart