import React from 'react'
import Image from 'next/image'

export const TeamComponent3 = () => {
  return (
    <div className='w-[1440px] h-[384px] flex justify-center items-center'>
             <Image
                  src="/teamHeader.png"
                  alt="carausel Image"
                  width={1440}
                  height={384}
                />
    </div>
  )
}
