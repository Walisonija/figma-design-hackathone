import React from 'react'
import Image from 'next/image'

export default function AboutComponent1(){
  return (
    <div className='w-[1440px] h-[636px] bg-gradient-to-r bg-blue-500  bg-[length:50%_100%] bg-no-repeat text-center'>
            <Image
                  src="/aboutComponent1.png"
                  alt="carausel Image"
                  width={590}
                  height={636}
                  className='absolute  right-0'
                />
                <div className='w-[1050px] h-[636px] text-white pl-80 flex items-center justify-center '>
                    <div className='w-[1050px] h-[412px] flex items-center justify-start'>
                        <div className='w-[438px] h-[238px] grid grid-cols-1 justify-between items-start ' >
                            <h5 className='text-sm w-[128px] h-[24px] '>
                            WORK WITH US
                            </h5>
                            <h2 className='font-bold text-4xl w-[440px] h-[50px] text-start  '>
                            Now Let’s grow Yours
                            </h2>
                            <p className='w-[440] h-[40] text-sm text-start'>
                            The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th 
                            </p>
                            <button className='border border-white rounded-lg w-[132px] h-[52px] text-sm '>
                            Button
                            </button>
                        </div>
                    </div>
                </div>
    </div>
  )
}
