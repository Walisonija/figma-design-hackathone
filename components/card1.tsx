import React from 'react'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'

// Load the Montserrat font
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // Adjust the weights as needed
})

export const Card1 = () => {
  return (
    <div className={`flex w-[1440px] h-[770] items-center justify-center bg-gray-100 ${montserrat.className} `}>
      <div className='grid w-[1050px] h-[770px] grid-cols-1'>
        <div className='grid items-center justify-center p-14 ml-[200px] w-[607px] h-[62px] gap-2'>
          <h2 className='font-bold flex items-center justify-center'>
            EDITOR’S PICK
          </h2>
          <p>
            Problems trying to resolve the conflict between
          </p>
        </div>
        <div className='flex justify-between h-[500px] w-[1050px]'>
          <div className='w-[510] h-[500]'>
            <Image
              src='/card-item.png'
              alt='card1'
              width={510}
              height={500}
            />
          </div>
          <div className='w-[240] h-[500]'>
            <Image
              src='/col-md-3.png'
              alt='card1'
              width={240}
              height={500}
            />
          </div>
          <div className='grid grid-cols-1 w-[240] h-[500]'>
            <div className='w-[240] h-[242]'>
              <Image
                src='/card-item2.png'
                alt='card1'
                width={240}
                height={240}
              />
            </div>
            <div className='w-[240] h-[242]'>
              <Image
                src='/card-item1.png'
                alt='card1'
                width={240}
                height={242}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
