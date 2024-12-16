import React from 'react'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'

// Load Montserrat font
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the desired weights
})

export const DesktopBlog = () => {
  return (
    <div className={`flex w-[1440px] h-[1044] items-center justify-center ${montserrat.className} `}>
      <div className='grid w-[1050px] h-[1044px] grid-cols-1'>
        <div className='grid items-center justify-center p-14 ml-[200px] w-[691px] h-[134px] gap-3'>
          <p className='text-blue-600 flex items-center justify-center'>
            Practice Advice
          </p>
          <h2 className='font-bold text-3xl flex items-center justify-center'>
            Featured Posts
          </h2>
          <p className='flex items-center justify-center text-gray-400 w-[469px] h-[40px]'>
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className='flex h-[606px] w-[1045px]'>
          <div className='w-[328px] h-[606px]'>
            <Image
              src='/blog1.png'
              alt='card1'
              width={328}
              height={606}
            />
          </div>
          <div className='w-[328px] h-[606px]'>
            <Image
              src='/blog2.png'
              alt='card1'
              width={328}
              height={606}
            />
          </div>
          <div className='grid grid-cols-1 w-[328] h-[606]'>
            <Image
              src='/blog3.png'
              alt='card1'
              width={328}
              height={606}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
