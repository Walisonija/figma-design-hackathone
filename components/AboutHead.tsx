import React from 'react'
import Image from 'next/image'
export const AboutHead = () => {
  return (
    <div className='w-[1440px] h-[729px] '>
        <Image
              src="/desktop-header-24.png"
              alt="carausel Image"
              width={1440}
              height={709}
            />
    </div>
  )
}
