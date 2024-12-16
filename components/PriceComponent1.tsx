import React from 'react'
import Image from 'next/image'
export const PriceComponent1 = () => {
  return (
    <div className='w-[1440px] h-[582px] flex items-center justify-center '>
        <Image
              src="/priceComponent1.png"
              alt="carausel Image"
              width={607}
              height={282}
            />
    </div>
  )
}
