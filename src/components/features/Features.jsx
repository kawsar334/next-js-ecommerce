import Link from 'next/link'
import React, { useEffect } from 'react'


const Features = async ({ data }) => {
    return (
        <div className='w-[100%] bg-[white] flex justify-center items-center flex-col gap-[10px] my-[50px]'>
            <h1 className='text-2xl font-[600]'>Featured Categories</h1>
            <p>Choose your necessary products from this feature categories.</p>
            <div className='bg-[white] w-[100%]  flex justify-center items-center  flex-wrap gap-[10px] '>
                {
                    data.map((item) => (

                        <div key={item.id} className='relative w-[180px] h-[250px] rounded-t-[100px] overflow-hidden shadow  border-[2px] border-[lightgray]'>
                            <img src={item.image || "/web.png"} alt="loading..." className='w-[100%] h-[180px] object-cover' />
                            <Link href="#" className='absolute bottom-5 left-1 hover:text-[blue]'>{item.title.slice(0, 10)}...</Link>
                        </div>
                    ))
                }
            </div>
            <button className='bg-[#fca311] py-[5px] px-[10px] rounded-[5px] text-2xl font-[600]'>Load More </button>
        </div>
    )
}

export default Features