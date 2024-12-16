import React from "react";
import Image from "next/image";

export const Carausel1 = () => {
  return (
    <div className="w-[1439px] h-[713px] relative ">
       <div className="w-[1044px] h-[651px] absolute top-0 left-0 flex justify-center items-center ">
      <div className="w-[599px] h-[331px] grid grid-cols-1 text-white">
          <h5 className="w-[] h-[] ">
          SUMMER 2020
          </h5>
          <h1 className="font-bold text-4xl">
          NEW COLLECTION
          </h1>
          <h4 className="w-[] h-[] ">
          but things on a small scale.
          </h4>
          <button  className="w-[221px] h-[60px] border rounded-sm bg-green-400 ">
          SHOP NOW
          </button>
       </div>
      </div>
      <Image
        src="/carausel1.jpg"
        alt="carausel Image"
        width={1439}
        height={713}
        className="object-cover"
        
      
      />
     
    </div>
  );
};
