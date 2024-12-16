import React from 'react'
import Image from 'next/image'

export const Carousel2 = () => {
  return (
   <div className="w-[1439px] h-[709px] relative bg-[#23856D] flex  justify-center ">
          <div className="w-[509px] h-[709px]  flex justify-center items-center ">
         <div className="w-[509px] h-[331px] grid grid-cols-1 text-white">
             <h5 className="w-[] h-[] ">
             SUMMER 2020
             </h5>
             <h1 className="font-bold text-4xl">
             Vita Classic Product
             </h1>
             <h4 className="w-[341px] h-[40px] ">
             We know how large objects will act, We know how are objects will act, We know
             </h4>
             <div className='flex w-[295px] h-[52px] justify-center items-center '>
              <h3 className='w-[77px] h-[32px] '>
              $16.48
              </h3>
             <button  className="w-[184px] h-[52px] border rounded-sm bg-green-400 ">
             ADD TO CART
             </button>
             </div>
          </div>
        
         </div>
         <Image
                        src='/carausel2-1.png'
                        alt='card1'
                        width={443}
                        height={600}
                        className='mb-0'
                      />
       </div>
  )
}
