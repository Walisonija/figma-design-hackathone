import React from 'react'
import { Footer } from '@/components/footer'
import { PriceComponent1 } from '@/components/PriceComponent1'
import { TeamComponent1 } from '@/components/TeamComponent1'
import { TeamComponent2 } from '@/components/TeamComponent2'
import { TeamComponent3 } from '@/components/TeamComponent3'
import { Montserrat } from 'next/font/google';


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // Regular and bold weights
});

export default function page (){
  return (
    <div className={`${montserrat.className}`}>
        <TeamComponent3 />
        <TeamComponent2 />
        <TeamComponent1 />
        <PriceComponent1 />
        <Footer />

    </div>
  )
}
