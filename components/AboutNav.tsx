"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

// Load Montserrat font
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // Adjust weights as needed
});

export const AboutNav = () => {
  const pathName = usePathname();
  const isHomePage = pathName === '/';

  return (
    <nav
      className={`flex ${
        isHomePage ? 'w-[1437px]' : 'w-[1024px] ml-36'
      } h-[58px] ${montserrat.className}`}
    >
      <div className="w-[187px] h-[58px] flex ml-6 font-bold">
        <h1 className="flex justify-center items-center">Bandage</h1>
      </div>

      <div className="flex items-center justify-between w-[815px] h-[58px]">
        <ul className="flex justify-between w-[361px] h-[25px] text-[12px] text-gray-600 gap-8">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <ul className="flex w-[324px] h-[54px] text-blue-500">
          <li className="flex justify-center items-center w-[166px] h-[54px]">
            <a href="#" className="font-bold">
              Login
            </a>
          </li>
          <button className="w-[214px] h-[52px] bg-blue-400 border rounded-lg text-white flex items-center justify-center">
            <p className="w-[137px] h-[22px] text-sm">Become a member</p>
            <Image
              src="/Vector.png"
              alt="carousel Image"
              width={12}
              height={10}
            />
          </button>
        </ul>
      </div>
    </nav>
  );
};
