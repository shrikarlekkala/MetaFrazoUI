import React from 'react'
import NavBar from '../components/NavBar'

function Hero() {
    return (
        <>
            <div className="bg-[#F0F3F6] w-full h-screen justify-start flex flex-col items-center py-[32px]">
                <img src="assets/grid.png" alt="" srcset="" className='absolute -z-0 top-0 left-0 max-w-full' />

                <NavBar />

                <div className=" text-center self-center justify-self-center my-auto z-10">
                    <div className="font-satoshi-lightItalic text-[56px] leading-[67px] font-bold">
                        AI Dubbing and Translation <br />
                        for <span className='text-[#0A47F2]'>Educators</span>
                    </div>
                    <div className="text-[20px] leading-[30px] font-normal pt-[24px]">
                        Globalize your content with lip-sync, preserved original voices, and accurate <br /> on-screen text translation—faster and more cost-effectively than ever
                    </div>
                    <div className="pt-[48px]">
                        <button className="bg-[#0A47F2] text-[18px] font-bold text-[#fff] py-[10px] px-[25px] rounded-[16px] mt-[30px] ">Get Started</button>
                        <div className="text-[16px] mt-8">
                        Learn More
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero