import React from 'react'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'

// Load Montserrat font
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the desired weights
})

export const Contact2 = () => {
  return (
    <div className={`w-[1440px] h-[814px] grid grid-cols-1 justify-items-center ${montserrat.className}`}>
      <div className='w-[1050px] h-[841px] grid grid-cols-1 justify-items-center'>
        <div className='w-[633px] h-[134px] grid grid-cols-1 justify-items-center'>
          <h6 className='w-[239px] h-[24px] text-blue-950 text-center font-bold'>
            VISIT OUR OFFICE
          </h6>
          <h2 className='w-[531px] h-[100px] text-blue-950 font-bold text-5xl text-center'>
            We help small businesses
            with big ideas
          </h2>
        </div>
        <div className='w-[985px] h-[403px] flex items-center justify-center'>
          <div className='w-[327px] h-[343px] grid justify-items-center grid-cols-1 gap-2'>
            <Image
              src="/phoneVector.png"
              alt="carousel Image"
              width={72}
              height={72}
            />
            <h6 className='w-[216px] h-[24px] text-blue-950'>
              georgia.young@example.com
            </h6>
            <h6 className='w-[176px] h-[24px] text-blue-950'>
              georgia.young@ple.com
            </h6>
            <h5 className='w-[100px] h-[24px] text-blue-950'>
              Get Support
            </h5>
            <button className='w-[189px] h-[54px] text-blue-400 border border-blue-400 rounded-full'>
              Submit Request
            </button>
          </div>
          <div className='w-[329px] h-[403px] grid justify-items-center grid-cols-1 bg-blue-950'>
            <Image
              src="/locationVector.png"
              alt="carousel Image"
              width={72}
              height={72}
            />
            <h6 className='w-[216px] h-[24px] text-white'>
              georgia.young@example.com
            </h6>
            <h6 className='w-[176px] h-[24px] text-white'>
              georgia.young@ple.com
            </h6>
            <h5 className='w-[100px] h-[24px] text-white'>
              Get Support
            </h5>
            <button className='w-[189px] h-[54px] text-blue-400 border border-blue-400 rounded-full'>
              Submit Request
            </button>
          </div>
          <div className='w-[329px] h-[343px] grid justify-items-center grid-cols-1'>
            <Image
              src="/emailVector.png"
              alt="carousel Image"
              width={72}
              height={72}
            />
            <h6 className='w-[216px] h-[24px]'>
              georgia.young@example.com
            </h6>
            <h6 className='w-[176px] h-[24px]'>
              georgia.young@ple.com
            </h6>
            <h5 className='w-[100px] h-[24px]'>
              Get Support
            </h5>
            <button className='w-[189px] h-[54px] text-blue-400 border border-blue-400 rounded-full'>
              Submit Request
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

