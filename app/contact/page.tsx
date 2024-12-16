import React from 'react'
import { Footer } from '@/components/footer'
import { Contact1 } from '@/components/Contact1'
import { Contact2 } from '@/components/Contact2'
import { AboutNav } from '@/components/AboutNav'
import { Contact3 } from '@/components/Contact3'
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // Regular and bold weights
});

export default function page(){
  return (
    <div className={`${montserrat.className}`}>
       <AboutNav />
        <Contact3 />
        <Contact2 />
        <Contact1 />
        <Footer />
   </div>
  )
}
