import React from 'react';
import { Montserrat } from 'next/font/google';

// Load the Montserrat font
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // Regular and bold weights
});

export const AboutClient = () => {
  return (
    <div
      className={`flex justify-center items-center bg-gray-100 py-6 px-4 ${montserrat.className} `}
    >
      <div className="text-center max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Big Companies Are Here
        </h2>
        <p className="mt-4 text-sm sm:text-base text-gray-600">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
    </div>
  );
};