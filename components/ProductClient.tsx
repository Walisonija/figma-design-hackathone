import React from 'react'
import Image from 'next/image'

export default function ProductClient(){
  return (
    <div className='flex w-[1440px] h-[175px] bg-gray-50 items-center justify-center '>
        <div className='flex w-[1050px] h-[175px]  items-center justify-between'>
            <div className='w-[153px] h-[34px] '>
                 <Image
                      src="/fa-brands-1.png"
                      alt="carausel Image"
                      width={103}
                      height={34}
                    />
            </div>
            <div className='w-[146px] h-[59px] '>
                 <Image
                    src="/fa-brands-2.png"
                    alt="carausel Image"
                    width={83}
                    height={59}
                  />
            </div>
            <div className='w-[152px] h-[79px] '>
                 <Image
                    src="/fa-brands-3.png"
                    alt="carausel Image"
                    width={102}
                    height={75}
                  />
            </div>
            <div className='w-[151px] h-[42px] '>
                 <Image
                    src="/fa-brands-4.png"
                    alt="carausel Image"
                    width={103}
                    height={42}
    />
            </div>
            <div className='w-[151px] h-[62px] '>
                 <Image
                    src="/fa-brands-5.png"
                    alt="carausel Image"
                    width={104}
                    height={62}
                  />
            </div>
            <div className='w-[151px] h-[72px] '>
                 <Image
                    src="/fa-brands-6.png"
                    alt="carausel Image"
                    width={76}
                    height={72}
                  />
            </div>
        </div>
    </div>
  )
}
