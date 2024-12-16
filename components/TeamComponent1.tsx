import React from 'react'
import Image from 'next/image'
export const TeamComponent1 = () => {
  return (
     <div className='w-[1440px] h-[1759px] flex items-center justify-center'>
            <div className='w-[1050px] h-[1759px] grid grid-cols-1  justify-items-center'>
                <div className='w-[607px] h-[100px] grid justify-items-center'>
                    <h2 className='w-[316px] h-[50px] font-bold text-4xl text-blue-950 text-center mt-12'>
                        Meet Our Team
                    </h2>
                </div>
                <div className='flex w-[1034px] h-[383px] justify-between '>
                    <Image
                          src="/aboutTeam3.png"
                          alt="carausel Image"
                          width={316}
                          height={383}
                        />
                        <Image
                              src="/aboutTeam2.png"
                              alt="carausel Image"
                              width={329}
                              height={386}
                            />
                            <Image
                                  src="/aboutTeam1.png"
                                  alt="carausel Image"
                                  width={329}
                                  height={386}
                                />
                                
                </div>
                <div className='flex w-[1034px] h-[383px] justify-between '>
                    <Image
                          src="/aboutTeam3.png"
                          alt="carausel Image"
                          width={316}
                          height={383}
                        />
                        <Image
                              src="/aboutTeam2.png"
                              alt="carausel Image"
                              width={329}
                              height={386}
                            />
                            <Image
                                  src="/aboutTeam1.png"
                                  alt="carausel Image"
                                  width={329}
                                  height={386}
                                />
                                
                </div>
                <div className='flex w-[1034px] h-[383px] justify-between '>
                    <Image
                          src="/aboutTeam3.png"
                          alt="carausel Image"
                          width={316}
                          height={383}
                        />
                        <Image
                              src="/aboutTeam2.png"
                              alt="carausel Image"
                              width={329}
                              height={386}
                            />
                            <Image
                                  src="/aboutTeam1.png"
                                  alt="carausel Image"
                                  width={329}
                                  height={386}
                                />
                                
                </div>
            </div>
    
        </div>
  )
}
