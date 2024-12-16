import React from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";

// Load Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the desired weights
});

export const Contact3 = () => {
  return (
    <div className={`w-[1440] h-[790px] relative ${montserrat.className}`}>
      <Image
        src="/backgroundContact.png"
        alt="backgroundContact"
        fill={true}
        objectFit="contain"
      />
      <div className="w-[1050] h-[742px] ml-48">
        <div className="w-[1044] h-[518px] grid grid-cols-1">
          <h5 className="w-[108px] h-[24px] text-blue-950 mt-20">CONTACT US</h5>
          <h5 className="w-[378px] h-[160px] text-blue-950 font-bold text-5xl mt-10">
            Get in touch today!
          </h5>
          <h5 className="w-[376px] h-[60px] text-gray-500">
            We know how large objects will act,
            but things on a small scale
          </h5>
          <p className="w-[242] h-[32px] text-blue-950 mt-10">
            Phone: +451 215 215
          </p>
          <p className="w-[207px] h-[32px] text-blue-950">
            Fax: +451 215 215
          </p>
          <div className="w-[242px] h-[50px] flex items-center justify-between mt-10 ">
            <Image
              src="/logos_twitter.png"
              alt="backgroundContact"
              width={30}
              height={24.38}
            />
            <Image src="/logos_facebook.png" alt="backgroundContact" width={30} height={30} />
            <Image src="/logo_insta.png" alt="backgroundContact" width={30} height={30} />
            <Image
              src="/logos_linkedin-icon.png"
              alt="backgroundContact"
              width={30}
              height={29.83}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

