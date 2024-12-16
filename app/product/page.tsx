import { NavbarDark } from '@/components/NavbarDark'
import { NavbarLight } from '@/components/NavbarLight'
import React from 'react'
import  ProductCard  from '@/components/ProductCard'
import ProductShopCard from '@/components/ProductShopCard'
import ProductFilter  from '@/components/ProductFilter'
import ProductClient from '@/components/ProductClient'
import { Footer } from '@/components/footer'
import ProductCard2 from '@/components/ProductCard2'
import { Montserrat } from 'next/font/google';


const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // Regular and bold weights
});
export default function ProductListPage() {
  return (
    <div className={`${montserrat.className}`}>
        <NavbarDark />
        <NavbarLight/>
        <ProductCard isProductPage={false} />
        <ProductShopCard/>
        <ProductFilter/>
        <ProductClient/>
        <Footer/>
        <ProductCard2/>
    </div>
  )
}
