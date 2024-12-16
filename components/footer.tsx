"use client";
import React from "react";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { usePathname } from 'next/navigation';
import { Montserrat } from 'next/font/google';

// Load Montserrat font
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the desired weights
});

export const Footer = () => {
  const pathName = usePathname();
  const isHomePage = pathName === "/";

  return (
    <footer className={`w-full ${montserrat.className}`}>
      {/* First Section */}
      <div className={`flex justify-center items-center w-full h-[142px] ${isHomePage ? "bg-gray-100" : "bg-white"} `}>
        <div className="flex justify-between items-center w-full sm:w-[1050px] h-[138px] px-4">
          {/* Logo and Social Media Icons */}
          <div className="flex justify-between items-center w-full sm:w-[236px]">
            <h1 className="font-bold">Bandage</h1>
            
          </div>
          <div className="flex items-center justify-center gap-6 text-blue-400">
              <RiFacebookCircleLine />
              <FaInstagram />
              <CiTwitter />
            </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t-2 border-gray-200 my-4 mt-0 w-full sm:w-[1057px] mx-auto" />

      {/* Main Footer Content */}
      <div className="flex flex-col sm:flex-row items-center justify-center w-full sm:w-[1050px] mx-auto h-[272px] px-4">
        {/* Company Info, Legal, Features, Resources, Get in Touch */}
        <div className="flex flex-wrap justify-between w-full sm:w-full lg:w-[1041px] sm:h-[170px]">
          
          {/* Company Info */}
          <div className="w-full sm:w-[148px] h-[170px]">
            <h1 className="font-bold mb-2">Company Info</h1>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Carrier</a></li>
              <li><a href="#">We are hiring</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="w-full sm:w-[152px] h-[170px]">
            <h1 className="font-bold mb-2">Legal</h1>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Carrier</a></li>
              <li><a href="#">We are hiring</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          {/* Features */}
          <div className="w-full sm:w-[148px] h-[170px]">
            <h1 className="font-bold mb-2">Features</h1>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#">Business Marketing</a></li>
              <li><a href="#">User Analytic</a></li>
              <li><a href="#">Live Chat</a></li>
              <li><a href="#">Unlimited Support</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="w-full sm:w-[152px] h-[170px]">
            <h1 className="font-bold mb-2">Resources</h1>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#">IOS & Android</a></li>
              <li><a href="#">Watch a Demo</a></li>
              <li><a href="#">Customers</a></li>
              <li><a href="#">API</a></li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="w-full sm:w-[321px] h-[131px]">
            <h6 className="font-semibold mb-2">Get In Touch</h6>
            <div className="w-full h-[87px] flex flex-col">
              <div className="flex mb-2">
                <input type="email" placeholder="Your Email" className="w-full sm:w-[204px] h-[58px] border p-2" />
                <button className="w-full sm:w-[117px] h-[58px] bg-blue-400 text-white rounded-sm">Subscribe</button>
              </div>
              <p className="text-sm text-gray-400">Lore imp sum dolor Amit</p>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full h-[74px] bg-gray-100 flex justify-center items-center">
        <p className="text-gray-400 text-center w-full sm:w-[1050px]">Made With Love By Finland All Right Reserved</p>
      </div>
    </footer>
  );
};

