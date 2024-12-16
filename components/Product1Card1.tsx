"use client";
import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

// Load Montserrat font
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the desired weights
});

export default function Product1Card1() {
  return (
    <div className={`w-[1440px] h-[572px] grid grid-cols-1 justify-center items-center ${montserrat.className} `}>
      <div className='w-[1440px] h-[91px] flex justify-center items-center'>
        <ul className='w-[1051px] h-[72px] flex justify-center items-center'>
          <li className='w-[134px] h-[72px] flex justify-center items-center text-gray-400 text-sm'>
            <a href="#">Description</a>
          </li>
          <li className='w-[220px] h-[72px] flex justify-center items-center text-gray-500 text-sm'>
            <a href="#">Additional Information</a>
          </li>
          <li className='w-[138px] h-[72px] flex justify-center items-center text-sm'>
            <a href="#" className='w-[62px] h-[24px] text-gray-500'>Reviews</a>
            <a href="#" className='w-[20px] h-[24px] text-teal-700'>(0)</a>
          </li>
        </ul>
      </div>
      <div className='w-[1440px] h-[499px] flex justify-center items-center'>
        <div className='w-[1056px] h-[499px] flex justify-center items-center'>
          <Image
            src="/product1Card1.png"
            alt="carousel Image"
            width={1056}
            height={427}
          />
        </div>
      </div>
    </div>
  );
}

