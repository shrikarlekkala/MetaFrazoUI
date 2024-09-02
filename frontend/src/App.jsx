import Benefits from "./sections/Benefits";
import CTA from "./sections/CTA";
import Email from "./sections/Email";
import FAQ from "./sections/FAQ";
import Features from "./sections/Features";
import Footer from "./sections/Footer";
import Guide from "./sections/Guide";
import Hero from "./sections/Hero";
import PreTest from "./sections/PreTest";
import Prices from "./sections/Prices";
import Reviews from "./sections/Reviews";
import ShowReel from "./sections/ShowReel";
import Testimonials from "./sections/Testimonials";
import './index.css'
export default function App() {
  return (
    <>
    <Hero/>
    <ShowReel/>
    <PreTest/>
    <Testimonials/>
    <Features/>
    <Guide/>
    <Benefits/>
    <Reviews/>
    <Prices/>
    <div className="h-[50vh] w-full bg-[#F0F3F6]"></div>
    <FAQ/>
    <Email/>
    <CTA/>
    <Footer/>
    </>
  )
}