import React from 'react';
import { Montserrat } from 'next/font/google';

// Load Montserrat font
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the desired weights
});

export const AboutContent = () => {
  return (
    <div
      className={`w-[1440px] h-[236px] flex items-center justify-center ${montserrat.className} `}
    >
      <div className="w-[1018px] h-[188px] flex items-center justify-around">
        <div className="w-[394px] h-[188px] flex items-center justify-around">
          <div className="w-[394px] h-[140px] grid grid-cols-1 justify-items-stretch">
            <p className="w-[116px] h-[20px] text-sm text-red-500">Problems trying</p>
            <h3 className="w-[394px] h-[96px] text-2xl font-bold ">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent.
            </h3>
          </div>
        </div>
        <div className="w-[529px] h-[40px] flex items-center justify-around">
          <p className="w-[529px] h-[40px]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>
    </div>
  );
};

