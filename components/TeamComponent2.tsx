import React from 'react'
import Image from 'next/image'

export const TeamComponent2 = () => {
  return (
    <div className='w-[1440px] h-[530px] flex gap-4  '>
            <div className='w-[700px] h-[530px] '>
                <Image
                      src="/teamComponent2-1.png"
                      alt="carausel Image"
                      width={700}
                      height={530}
                    />
            </div>
            <div className='w-[700px] h-[530px] grid grid-cols-2 gap-6'>
                <Image
                      src="/teamComponent2-5.png"
                      alt="carausel Image"
                      width={361}
                      height={260}
                    />
                    <Image
                          src="/teamComponent2-2.png"
                          alt="carausel Image"
                          width={361}
                          height={260}
                        />
                        <Image
                              src="/teamComponent2-3.png"
                              alt="carausel Image"
                              width={361}
                              height={260}
                            />
                            <Image
                                  src="/teamComponent2-4.png"
                                  alt="carausel Image"
                                  width={361}
                                  height={260}
                                />
            </div>
    </div>
  )
}
