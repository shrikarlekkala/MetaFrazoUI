import React from 'react'
import Tesimonials_Card from '../components/Tesimonials_Card'

function Testimonials() {
    return (
        <>
            <div className="bg-[#F0F3F6] flex w-full h-screen flex-col items-center justify-center">
                <div className="flex space-x-6">
                    <Tesimonials_Card percentage={"90%"} text={"Faster than industry standards"} />
                    <div className="p-0 m-0 rounded-[32px]" style={{
                    boxShadow: "0px 0px 50px 10px #3277F826"

                }}>

                        <Tesimonials_Card percentage={"94%"} text={"Cheaper compared to competitors"} />
                    </div>
                    <Tesimonials_Card percentage={"99%"} text={"Accuracy in translations"} />
                </div>
                <div style={{
                    boxShadow: "0px 0px 25px 10px #3277F826",
                    background: "linear-gradient(0deg, #0A47F2 79.79%, #B5C9FF 122.34%),radial-gradient(342.89% 359.97% at 49.74% 48.94%, rgba(10, 71, 242, 0.5) 0%, rgba(181, 201, 255, 0.5) 100%)"


                }} className="w-[352px] h-[51px] mt-[32px] bg-[#0A47F2] rounded-[16px] text-[18px] text-white flex items-center justify-center font-bold">
                    Get Started Now
                </div>
            </div>
        </>)
}

export default Testimonials