import React from "react";
import Image from "next/image";


export default function Product1Card2() {
  return (
    <div className="w-[1440px] h-[1086px] bg-gray-100 flex items-center justify-center  ">
      <div className="w-[1124px] h-[1086px] grid grid-cols-1 justify-center items-center ">
        <div className="w-[104opx] h-[32px] flex justify-start font-bold  ">
          <h3>
          BESTSELLER PRODUCTS
          </h3>
        </div>
        <div className="w-[1048px] h-[488px] flex justify-between items-center">
          <div className="w-[238px] h-[488px] ">
            <Image
              src="/Product1Card2-3.png"
              alt="carausel Image"
              width={238}
              height={488}
            />
          </div>
          <div className="w-[241px] h-[488px] ">
            <Image
              src="/Product1Card2-7.png"
              alt="carausel Image"
              width={241}
              height={488}
            />
          </div>
          <div className="w-[241px] h-[488px] ">
            <Image
              src="/Product1Card2-6.png"
              alt="carausel Image"
              width={239}
              height={488}
            />
          </div>
          <div className="w-[241px] h-[488px] ">
            <Image
              src="/Product1Card2-1.png"
              alt="carausel Image"
              width={239}
              height={488}
            />
          </div>
        </div>
        <div className="w-[1048px] h-[488px] flex justify-between">
          <div className="w-[238px] h-[488px] ">
            <Image
              src="/Product1Card2-5.png"
              alt="carausel Image"
              width={238}
              height={488}
            />
          </div>
          <div className="w-[241px] h-[488px] ">
            <Image
              src="/Product1Card2-4.png"
              alt="carausel Image"
              width={241}
              height={488}
            />
          </div>
          <div className="w-[241px] h-[488px] ">
            <Image
              src="/Product1Card2-3.png"
              alt="carausel Image"
              width={239}
              height={488}
            />
          </div>
          <div className="w-[241px] h-[488px] ">
            <Image
              src="/Product1Card2-2.png"
              alt="carausel Image"
              width={239}
              height={488}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
