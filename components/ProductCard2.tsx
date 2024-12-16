import React from 'react'
import Image from 'next/image'

export default function ProductCard2 (){
  return (
    <div className='w-[1440px] h-[1778px] flex items-center justify-center '>
        <div className='w-[1124px] h-[1778px] grid grid-cols-1 justify-center items-center '>
            <div className='w-[1048px] h-[488px] flex justify-between items-center'>
                <div className='w-[238px] h-[488px] '>
                    <Image
                          src="/ProductCard2-1.png"
                          alt="carausel Image"
                          width={238}
                          height={488}
                        />
                </div>
                <div className='w-[241px] h-[488px] '>
                  <Image
                          src="/ProductCard2-6.png"
                          alt="carausel Image"
                          width={241}
                          height={488}
                        />
                </div>
                <div className='w-[241px] h-[488px] '>
                  <Image
                          src="/ProductCard2-11.png"
                          alt="carausel Image"
                          width={239}
                          height={488}
                        />
                </div>
                <div className='w-[241px] h-[488px] '>
                  <Image
                          src="/ProductCard2-12.png"
                          alt="carausel Image"
                          width={239}
                          height={488}
                        />
                </div>
            </div>
            <div className='w-[1048px] h-[488px] flex justify-between'>
                <div className='w-[238px] h-[488px] '>
                    <Image
                         src="/ProductCard2-2.png"
                         alt="carausel Image"
                         width={238}
                         height={488}
                       />
                </div>
                <div  className='w-[241px] h-[488px] '>
                  
                  <Image
                          src="/ProductCard2-5.png"
                          alt="carausel Image"
                          width={241}
                          height={488}
                        />
                </div>
                <div className='w-[241px] h-[488px] '>
                  <Image
                          src="/ProductCard2-8.png"
                          alt="carausel Image"
                          width={239}
                          height={488}
                        />
                </div>
                <div className='w-[241px] h-[488px] '>
                  <Image
                          src="/ProductCard2-9.png"
                          alt="carausel Image"
                          width={239}
                          height={488}
                        />
                </div>
            </div>
            <div className='w-[1048px] h-[488px] flex justify-between'>
                <div className='w-[238px] h-[488px] '>
                    <Image
                         src="/ProductCard2-3.png"
                         alt="carausel Image"
                         width={238}
                         height={488}
                       />
                </div>
                <div className='w-[241px] h-[488px] '>
                  <Image
                          src="/ProductCard2-4.png"
                          alt="carausel Image"
                          width={239}
                          height={488}
                        />
                </div>
                <div className='w-[241px] h-[488px] '>
                  <Image
                          src="/ProductCard2-7.png"
                          alt="carausel Image"
                          width={239}
                          height={488}
                        />
                </div>
                <div className='w-[241px] h-[488px] '>
                  <Image
                          src="/ProductCard2-10.png"
                          alt="carausel Image"
                          width={239}
                          height={488}
                        />
                </div>
            </div>
            <div className='w-[313px] h-[74px] flex border border-gray-300 rounded-md shadow-sm ml-96'>
                  <div className='w-[84px] h-[74px] bg-gray-200 text-gray-500 flex justify-center items-center'>
                    <p className='w-[34px] h-[24px] text-sm'>First</p>
                  </div>
                  <div className='w-[46px] h-[74px] text-blue-500 flex justify-center items-center text-sm'>
                    <p className='w-[6px] h-[24px] text-sm'>1</p>
                  </div>
                  <div className='w-[49px] h-[74px] bg-blue-500 text-white flex justify-center items-center text-sm'>
                    <p className='w-[9px] h-[24px] text-sm'>2</p>
                  </div>
                  <div className='w-[49px] h-[74px] text-blue-500 flex justify-center items-center text-sm'>
                    <p className='w-[9px] h-[24px] text-sm'>3</p>
                  </div>
                  <div className='w-[85px] h-[74px] text-blue-500 flex justify-center items-center text-sm'>
                    <p className='w-[35px] h-[24px] text-sm'>Next</p>
                  </div>
            </div>
        </div>
    </div>
  )
}
