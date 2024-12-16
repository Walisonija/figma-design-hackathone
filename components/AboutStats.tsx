"use client";

import React from "react";
import { Montserrat } from "next/font/google";

// Load Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], // Regular and bold weights
});

export const AboutStats = () => {
  return (
    <div
      className={`flex items-center justify-center w-full h-auto py-8 ${montserrat.className} `}
    >
      <div className="flex flex-wrap justify-center gap-8 max-w-6xl w-full px-4">
        {/* Single stat block */}
        <div className="flex flex-col items-center text-center">
          <h2 className="font-bold text-4xl sm:text-5xl text-gray-900">15K</h2>
          <p className="text-sm sm:text-base text-gray-500">Happy Customers</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="font-bold text-4xl sm:text-5xl text-gray-900">150K</h2>
          <p className="text-sm sm:text-base text-gray-500">Monthly Visitors</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="font-bold text-4xl sm:text-5xl text-gray-900">15</h2>
          <p className="text-sm sm:text-base text-gray-500">Countries Worldwide</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="font-bold text-4xl sm:text-5xl text-gray-900">100+</h2>
          <p className="text-sm sm:text-base text-gray-500">Top Partners</p>
        </div>
      </div>
    </div>
  );
};