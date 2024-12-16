"use client";
import React from "react";
import { CiTwitter } from "react-icons/ci";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import { usePathname } from 'next/navigation';
import { Montserrat } from 'next/font/google';
import { FaYoutube } from "react-icons/fa";

// Load Montserrat font
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the desired weights
});

export function NavbarDark() {
  const pathName = usePathname();
  const isHomePage = pathName === "/";

  return (
    <nav className={`flex items-center flex-row justify-around w-full h-[58px] ${isHomePage ? 'bg-slate-900' : 'bg-teal-700'} text-white ${montserrat.className} `}>
      <div className={`flex items-center ${isHomePage ? "w-full" : "w-[1128px]"} h-[46px] justify-between px-4 md:px-6`}>
        {/* Left Section */}
        <div className="flex items-center justify-between w-full sm:w-auto h-[46px]">
          <button className="flex items-center justify-center w-[145px] h-[44px] rounded-md space-x-2 sm:w-auto">
            <CiPhone className="w-[16px] h-[16px]" />
            <p className="text-[13px] sm:text-sm">(225) 555-0118</p>
          </button>
          <button className="flex items-center justify-center w-[260px] h-[44px] p-2 sm:w-auto rounded-md space-x-2">
            <HiOutlineMail />
            <h6 className="text-sm sm:text-base font-bold text-white">michelle.rivera@example.com</h6>
          </button>
        </div>

        {/* Middle Section */}
        <div className="hidden sm:flex justify-center items-center w-[332px] h-[44px] gap-10">
          <h6 className="text-[12px] sm:text-sm font-bold text-center">
            Follow Us and get a chance to win 80% off
          </h6>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-between w-full sm:w-auto gap-2 sm:gap-6">
          <h6 className="hidden sm:block text-[14px] sm:text-sm font-bold text-left underline">
            Follow Us:
          </h6>
          <ul className="flex gap-3 sm:gap-5">
            <li>
              <a href="#" className="w-[16px] h-[16px]">
                <CiTwitter />
              </a>
            </li>
            <li>
              <a href="#" className="w-[16px] h-[16px]">
              <FaYoutube />
              </a>
            </li>
            <li>
              <a href="#" className="w-[16px] h-[16px]">
                <RiFacebookCircleLine />
              </a>
            </li>
            <li>
              <a href="#" className="w-[16px] h-[16px]">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
