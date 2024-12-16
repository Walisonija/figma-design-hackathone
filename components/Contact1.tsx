import React from 'react'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'

// Load Montserrat font
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the desired weights
})

export const Contact1 = () => {
  return (
    <div className={`w-[1440px] h-[348px] flex items-center justify-center ${montserrat.className} `}>
      <div className='w-[607px] h-[300px] grid grid-cols-1 justify-items-center'>
        <Image
          src="/arrow2.png"
          alt="carousel Image"
          width={72.56}
          height={21.84}
        />
        <h6 className='w-[239px] h-[24px] text-blue-950 text-center font-bold'>
          WE Can&apos;t WAIT TO MEET YOU
        </h6>
        <h2 className='w-[272px] h-[80px] text-blue-950 font-bold text-6xl text-center'>
          Let’s Talk
        </h2>
        <button className='w-[186px] h-[52px] border bg-blue-400 rounded-lg text-white'>
          Try it free now
        </button>
      </div>
    </div>
  )
}

