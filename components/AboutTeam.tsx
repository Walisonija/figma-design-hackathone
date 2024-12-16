import React from 'react'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'

// Load the Montserrat font
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // Adjust the weights as needed
})

export const AboutTeam = () => {
  return (
    <div className={`w-[1440px] h-[826px] flex items-center justify-center ${montserrat.className} `}>
      <div className="w-[1050px] h-[819px] grid grid-cols-1 justify-items-center">
        <div className="w-[607px] h-[100px] grid justify-items-center">
          <h2 className="w-[316px] h-[50px] font-bold text-4xl text-blue-950 text-center">
            Meet Our Team
          </h2>
          <p className="w-[469px] h-[40] text-gray-500 text-center">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="flex w-[1034px] h-[383px] justify-between">
          <Image
            src="/aboutTeam3.png"
            alt="carousel Image"
            width={316}
            height={383}
          />
          <Image
            src="/aboutTeam2.png"
            alt="carousel Image"
            width={329}
            height={386}
          />
          <Image
            src="/aboutTeam1.png"
            alt="carousel Image"
            width={329}
            height={386}
          />
        </div>
      </div>
    </div>
  )
}

