import React from 'react'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'

// Load the Montserrat font
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // Adjust the weights as needed
})

export const Card2 = () => {
  return (
    <div className={`flex items-center justify-center w-[1440px] h-[1652px] ${montserrat.className} `}>
      <div className='grid grid-cols-1 w-[1124px] h-[1652px]'>
        <div className='grid items-center justify-center p-14 ml-[200px] w-[692px] h-[102px] gap-3'>
          <p className='flex items-center justify-center'>
            Featured Products
          </p>
          <h2 className='font-bold flex items-center justify-center'>
            BESTSELLER PRODUCTS
          </h2>
          <p className='flex items-center justify-center'>
            Problems trying to resolve the conflict between
          </p>
        </div>
        <div className='flex justify-between items-center h-[615px] w-[1049px]'>
          <div className='w-[238px] h-[615px]'>
            <Image
              src='/card2-1.png'
              alt='card1'
              width={238}
              height={615}
            />
          </div>
          <div className='w-[241px] h-[615px]'>
            <Image
              src='/card2-2.png'
              alt='card1'
              width={241}
              height={615}
            />
          </div>
          <div className='w-[239px] h-[615px]'>
            <Image
              src='/card2-3.png'
              alt='card1'
              width={239}
              height={615}
            />
          </div>
          <div className='w-[240px] h-[615px]'>
            <Image
              src='/card2-4.png'
              alt='card1'
              width={240}
              height={615}
            />
          </div>
        </div>
        <div className='flex justify-between items-center h-[615px] w-[1049px]'>
          <div className='w-[238px] h-[615px]'>
            <Image
              src='/card2-1.png'
              alt='card1'
              width={238}
              height={615}
            />
          </div>
          <div className='w-[241px] h-[615px]'>
            <Image
              src='/card2-2.png'
              alt='card1'
              width={241}
              height={615}
            />
          </div>
          <div className='w-[239px] h-[615px]'>
            <Image
              src='/card2-3.png'
              alt='card1'
              width={239}
              height={615}
            />
          </div>
          <div className='w-[240px] h-[615px]'>
            <Image
              src='/card2-4.png'
              alt='card1'
              width={240}
              height={615}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
