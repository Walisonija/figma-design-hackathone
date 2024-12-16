import { NavbarDark } from "@/components/NavbarDark";
import { NavbarLight } from "@/components/NavbarLight";
import { Carausel1 } from "@/components/carausel1";
import { Card1 } from "@/components/card1";
import { Card2 } from "@/components/card2";
import { Carousel2 } from "@/components/carousel2";
import { Carousel3 } from "@/components/carousel3";
import { DesktopBlog } from "@/components/desktop-blog";
import { Footer } from "@/components/footer";
import { Montserrat } from 'next/font/google';



const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'], // Regular and bold weights
});
export default function Home() {
  return (
  <div className={`${montserrat.className}`}>

    <NavbarDark/>
    <NavbarLight/>
    <Carausel1/>
    <Card1/>
    <Card2/>
   <Carousel2/>
   <Carousel3/>
   <DesktopBlog/>
   <Footer/>
  </div>
  );
}
