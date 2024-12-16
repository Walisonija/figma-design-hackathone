"use client";
import React from "react";
import { MdOutlinePerson } from "react-icons/md";
import { GoSearch } from "react-icons/go";
import { BsCart } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { usePathname } from 'next/navigation';
import { Montserrat } from 'next/font/google';

// Load Montserrat font
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the desired weights
});

export const NavbarLight = () => {
  const pathName = usePathname();
  const isHomePage = pathName === "/";

  return (
    <nav className={`flex ${isHomePage ? "w-[1437px]" : "w-[1024px] ml-36"} h-[58px] ${montserrat.className}`}>
      <div className="w-[187px] h-[58px] flex ml-6 font-bold">
        <h1 className="flex justify-center items-center">
          Bandage
        </h1>
      </div>
    
      <div className="flex items-center justify-between w-[1155px] h-[58px] mr-10">
        <ul className="flex justify-between w-[361px] h-[25px] text-[12px] text-gray-500 gap-8">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/priceview">Shop</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="teamview">Blog</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/product1">Pages</a>
          </li>
          <li>
            <a href="/product">Product</a>
          </li>
        </ul>
        <ul className="flex w-[324px] h-[54px] text-blue-500 mr-10">
          <li className="flex justify-center items-center w-[166px] h-[54px]">
            <MdOutlinePerson className="w-5 h-5" />
            <a href="#" className="font-bold">Login / Register</a>
          </li>
          <li className="flex justify-center items-center w-[46px] h-[46px]">
            <GoSearch />
          </li>
          <li className="flex justify-center items-center w-[56px] h-[46px]">
            <BsCart />
            <div>1</div>
          </li>
          <li className="flex justify-center items-center w-[56px] h-[46px]">
            <IoIosHeartEmpty />
            <div>1</div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
