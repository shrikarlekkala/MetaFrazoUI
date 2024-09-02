import React from 'react'
import CTABtn from '../components/CTABtn'

function CTA() {
    return (
        <>
            <div className=" bg-[#F0F3F6] h-screen w-full flex flex-col items-center justify-center">
                <div className="text-[56px] z-20 font-bold my-6 text-center leading-[67px]">Unlock the power of AI to translate <br /> your video materials</div>
                <div className="text-[20px] z-20 text-center">
                    Try first video translation tool that you’ll love. And the last one you’ll ever need.
                </div>
                <div className="mt-6 z-20">
                    <CTABtn />
                </div>
                <img src="assets/BG.png" alt="" srcset="" className='absolute' />
            </div>
        </>)
}

export default CTA