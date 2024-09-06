import React from 'react'
import CTAWideBtn from '../components/CTAWideBtn'

function Benefits() {
    return (
        <>
            <div className="bg-[#F0F3F6] flex w-full justify-center items-center flex-col py-40">
                <img src="assets\Benifits.png" alt="" srcset="" className='w-[48px]' />
                <div className="text-[40px] font-bold my-6">Benefits</div>
                <div className="text-[20px] text-center">
                    Our intuitive platform makes it easy for anyone to create multilingual content, helping you <br />
                    connect with audiences around the world like never before.
                </div>
                <div className=" flex flex-wrap justify-center mt-16 my-[64px]">
                    <div className="w-[540px] h-[408px] bg-white rounded-[32px] m-3">
                        <div className="flex flex-col justify-between items-center h-full p-6">
                            <div className="text-[24px] font-bold">Time-Saving</div>
                            <div className="text-[18px] text-center">Expand your audience by making content accessible in multiple languages.</div>
                        </div>
                    </div>
                    <div className="w-[540px] h-[408px] bg-white rounded-[32px] m-3">
                    <div className="flex flex-col justify-between items-center h-full p-6">
                            <div className="text-[24px] font-bold">Global Reach</div>
                            <img src="assets/map.png" alt="" srcset="" className='w-full'/>
                            <div className="text-[18px] text-center">Expand your audience by making content accessible in multiple languages.</div>
                        </div>
                    </div>
                    <div className="w-[540px] h-[408px] bg-white rounded-[32px] m-3">
                    <div className="flex flex-col justify-between items-center h-full p-6">
                            <div className="text-[24px] font-bold">User-Friendly</div>
                            <div className="text-[18px] text-center">Expand your audience by making content accessible in multiple languages.</div>
                        </div>
                    </div>
                    <div className="w-[540px] h-[408px] bg-white rounded-[32px] m-3">
                    <div className="flex flex-col justify-between items-center h-full p-6">
                            <div className="text-[24px] font-bold">Cost-Saving</div>
                            <div className="text-[18px] text-center">Expand your audience by making content accessible in multiple languages.</div>
                        </div>
                    </div>
                </div>
                <CTAWideBtn />
            </div>
        </>
    )
}

export default Benefits