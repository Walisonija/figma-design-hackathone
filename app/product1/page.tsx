import React from 'react'
import { NavbarDark } from '@/components/NavbarDark';
import { NavbarLight } from '@/components/NavbarLight';
import ProductCard from '@/components/ProductCard';
import Product1Card from '@/components/Product1Card';
import Product1Card1 from '@/components/Product1Card1';
import Product1Card2 from '@/components/Product1Card2';
import ProductClient from '@/components/ProductClient';
import { Footer } from '@/components/footer';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // Regular and bold weights
});
export default function Page(){
  return (
    <div className={`${montserrat.className}`}>
        <NavbarDark />
        <NavbarLight/>
        <ProductCard isProductPage={true}  />
        <Product1Card />
        <Product1Card1 />
        <Product1Card2 />
        <ProductClient />
        <Footer />

    </div>
  )
}
