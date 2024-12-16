import React from 'react'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'

// Load the Montserrat font
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the desired weights
})

export const Carousel3 = () => {
  return (
    <div className={`flex pl-20 w-[1439px] h-[682px] ${montserrat.className} `}>
      <div className='w-[704px] h-[682px]'>
        <Image
          src="/hero-cover-1.png"
          alt="carousel Image"
          width={704}
          height={682}
        />
      </div>
      <div className='grid w-[573px] h-[326px] mt-48'>
        <p className='w-[122px] h-[24px] text-sm'>
          SUMMER 2020
        </p>
        <h1 className='w-[375px] h-[100px] font-bold text-3xl'>
          Part of the Neural 
          Universe
        </h1>
        <p className='w-[376px] h-[60px]'>
          We know how large objects will act, 
          but things on a small scale.
        </p>
        <div className='flex w-[339px] h-[52px]'>
          <button className='w-[156px] h-[52px] bg-green-500 text-white border rounded-lg'>
            BUY NOW
          </button>
          <button className='w-[156px] h-[52px] ml-4 text-green-500 border rounded-lg border-green-500'>
            READ MORE
          </button>
        </div>
      </div>
    </div>
  )
}

