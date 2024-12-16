import React from 'react'
import { Footer } from '@/components/footer'
import { PriceComponent1 } from '@/components/PriceComponent1'
import { PriceComponent2 } from '@/components/PriceComponent2'
import ProductClient from '@/components/ProductClient'
import { PriceComponent3 } from '@/components/PriceComponent3'
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // Regular and bold weights
});


export default function page(){
  return (
    <div className={`${montserrat.className}`}>
        <PriceComponent3/>
        <ProductClient />
        <PriceComponent2/>
        <PriceComponent1 />
        <Footer />
        

    </div>
  )
}
