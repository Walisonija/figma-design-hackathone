import React from 'react'
import Image from 'next/image'

export default function ProductFilter(){
  return (
    <div className='w-[1440px] h-[98px] flex items-center justify-center '>
        <div className='w-[1059px] h-[98px] flex items-center justify-center '>
            <div className='w-[1049px] h-[50px] flex items-center justify-between' >
                <h6 className='w-[168px] h-[24px] text-gray-500 ' >
                Showing all 12 results
                </h6>
                <div className='w-[177px] h-[46px] flex justify-between items-center'>
                    <h6 className='w-[53px] h-[24px] text-gray-500'>
                    Views:
                    </h6>
                    <div className='w-[107px] h-[46px] flex ' >
                        <div className='w-[46px] h-[46px] flex items-center justify-center border border-gray-100'>
                             <Image
                                  src="/icon.png"
                                  alt="carausel Image"
                                  width={16}
                                  height={16}
                                />
                        </div>
                        <div className='w-[46px] h-[46px] flex items-center justify-center border border-gray-100'>
                             <Image
                                  src="/icon1.png"
                                  alt="carausel Image"
                                  width={16}
                                  height={16}
                                />
                        </div>

                    </div>
                    
                </div>
                <div className='w-[252px] h-[50px] flex justify-between'>
                        <input type="select" placeholder='Popularity' className='text-gray-300 w-[141px] h-[51px] bg-gray-100 border border-gray-300 rounded-sm flex items-center' />
                        <button className='w-[94px] h-[50px] text-white bg-blue-400 border rounded-sm'>
                            Filter
                        </button>
                    </div>
            </div>

        </div>
    </div>
  )
}
