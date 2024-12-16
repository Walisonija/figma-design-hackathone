import React from 'react'
import Image from 'next/image'

export default function Product1Card(){
  return (
    <div className=' flex justify-center items-center bg-gray-100 w-[1440px] h-[598px]  '>
        <div className=' flex justify-center items-center  w-[1050px] h-[598px] ' >
            <Image
                  src="/product1Card.png"
                  alt="carausel Image"
                  width={1050}
                  height={550}
                />
        </div>
    </div>
  )
}
