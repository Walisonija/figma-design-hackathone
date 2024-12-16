import React from 'react'
import Image from 'next/image'

export default function ProductShopCard(){
  return (
    <div className='w-[1440px] h-[271px] flex justify-center items-center bg-gray-100'>
        <div className='w-[1088px] h-[271px] flex '>
            <div className='w-[1088px] h-[223px] flex justify-between'>
                <div className='w-[205px] h-[223px] '>
                    <Image
                          src="/product-item1.png"
                          alt="carausel Image"
                          width={205}
                          height={223}
                        />
                </div>
                <div className='w-[205px] h-[223px] '>
                    <Image
                          src="/product-item2.png"
                          alt="carausel Image"
                          width={205}
                          height={223}
                        />
                </div>
                <div className='w-[206px] h-[223px] '>
                    <Image
                          src="/product-item3.png"
                          alt="carausel Image"
                          width={205}
                          height={223}
                        />
                </div>
                <div className='w-[206px] h-[223px] '>
                    <Image
                          src="/product-item4.png"
                          alt="carausel Image"
                          width={205}
                          height={223}
                        />
                </div>
                <div className='w-[206px] h-[223px] '>
                    <Image
                          src="/product-item5.png"
                          alt="carausel Image"
                          width={205}
                          height={223}
                        />
                </div>
            </div>
        </div>
    </div>
  )
}
