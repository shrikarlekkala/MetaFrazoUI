import React from 'react'
import Tesimonials_Card from '../components/Tesimonials_Card'

function Testimonials() {
    return (
        <>
            <div className="bg-[#F0F3F6] flex w-full h-screen flex-col items-center justify-center">
                <div className="flex">
                    <Tesimonials_Card percentage={"90%"} text={"Faster than industry standards"}/>
                    <Tesimonials_Card percentage={"94%"} text={"Cheaper compared to competitors"}/>
                    <Tesimonials_Card percentage={"99%"} text={"Accuracy in translations"}/>
                </div>
                <div className="w-[352px] h-[51px] mt-[32px] bg-[#0A47F2] rounded-[16px] text-[18px] text-white flex items-center justify-center font-bold">
                Get Started Now
                </div>
            </div>
        </>)
}

export default Testimonials