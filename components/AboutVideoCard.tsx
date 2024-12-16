import React from 'react'
import Image from 'next/image'

export const AboutVideoCard = () => {
  return (
    <div className='w-[1440px] h-[764px] flex items-center justify-center '>
        <Image
              src="/videoCard.png"
              alt="carausel Image"
              width={989}
              height={540}
            />
    </div>
  )
}
