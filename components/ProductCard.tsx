"use client";

import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface ProductCardProps {
  isProductPage?: boolean;
}

export default function ProductCard({ isProductPage = false }: ProductCardProps) {
  const pathName = usePathname();
      const isHomePage = pathName ==="/product"
  return (
    <div className='flex items-center justify-center w-[1440px] h-[92px] bg-gray-100 '>
      <div className='w-[1049px] h-[44px] flex'>
       { !isProductPage &&( <div className={`w-[510px] h-[32px] flex justify-start`}>
          <h1 className='font-bold'>
            Shop
          </h1>
        </div>)}
          <ul className={` ${isHomePage? "justify-end ":""}w-[509px] h-[44px] flex items-center`}>
            <li><a href="#">Home</a></li>
            <div className='flex justify-center items-center w-[9px] h-[16px] ml-3 mr-3'>
              <Image
                src="/arrow.png"
                alt='Arrow'
                width={9}
                height={16}
              />
            </div>
            <p className='w-[37px] h-[24px] text-gray-300'>
              Shop
            </p>
          </ul>
      </div>
    </div>
  );
}
