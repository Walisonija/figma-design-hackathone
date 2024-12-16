"use client";
import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

// Load Montserrat font
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the desired weights
});

export const PriceComponent2 = () => {
  return (
    <div className={`w-[1440px] h-[1037px] flex justify-center items-center ${montserrat.className} `}>
      <div className='w-[1056px] h-[1037px] grid grid-cols-1 justify-items-center '>
        <div className='w-[607px] h-[210px] grid grid-cols-1 items-center justify-items-center '>
          <h2 className='w-[262px] h-[50px] text-4xl font-bold text-blue-950 '>
            Pricing FAQs
          </h2>
          <p className='w-[552px] h-[60px] text-gray-500 text-center'>
            Problems trying to resolve the conflict between the two major realms of Classical physics
          </p>
        </div>
        <div className='w-[1056px] h-[537px] grid grid-cols-1 justify-items-center'>
          <div className='w-[1056px] h-[159px] flex '>
            <Image
              src="/priceComponent2.png"
              alt="carousel Image"
              width={491}
              height={159}
            />
            <Image
              src="/priceComponent2-1.png"
              alt="carousel Image"
              width={535}
              height={139}
            />
          </div>
          <div className='w-[1056px] h-[159px] flex '>
            <Image
              src="/priceComponent2.png"
              alt="carousel Image"
              width={491}
              height={159}
            />
            <Image
              src="/priceComponent2-1.png"
              alt="carousel Image"
              width={535}
              height={139}
            />
          </div>
          <div className='w-[1056px] h-[159px] flex '>
            <Image
              src="/priceComponent2.png"
              alt="carousel Image"
              width={491}
              height={159}
            />
            <Image
              src="/priceComponent2-1.png"
              alt="carousel Image"
              width={535}
              height={139}
            />
          </div>
        </div>
        <p className='w-[552px] h-[30px] text-center text-gray-500'>
          Haven’t got your answer? Contact our support
        </p>
      </div>
    </div>
  );
};

