import React from 'react'
import { Footer } from '@/components/footer'
import AboutComponent1 from '@/components/AboutComponent1'
import ProductClient from '@/components/ProductClient'
import { AboutClient } from '@/components/AboutClient'
import { AboutHead } from '@/components/AboutHead'
import { AboutStats } from '@/components/AboutStats'
import { AboutContent } from '@/components/AboutContent'
import { AboutVideoCard } from '@/components/AboutVideoCard'
import { AboutTeam } from '@/components/AboutTeam'
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // Regular and bold weights
});
export default function page(){
  return (
    <div className={`${montserrat.className}`}>
      <AboutHead />
      <AboutContent />
      <AboutStats />
      <AboutVideoCard />
      <AboutTeam />
      <AboutClient/>
      <ProductClient/>
        <AboutComponent1/>
        <Footer />

    </div>
  )
}
