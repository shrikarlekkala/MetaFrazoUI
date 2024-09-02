import React from 'react'
import Tesimonials_Card from '../components/Tesimonials_Card'
import CTAWideBtn from '../components/CTAWideBtn'

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
                <CTAWideBtn />
            </div>
        </>)
}

export default Testimonials