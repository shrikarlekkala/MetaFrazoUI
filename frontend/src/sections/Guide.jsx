import React from 'react'

function Guide() {
    return (
        <>
            <div className="flex flex-col justify-center items-center bg-[#F0F3F6] py-40">
                <img src="assets/Gears.png" alt="" srcset="" className='w-[48px]' />
                <div className="text-[40px] font-bold my-6">
                    How It Works?
                </div>
                <div className="text-[20px] text-center">
                    Transforming your videos into multiple languages has never been easier! Follow these simple <br />steps to upload your content, choose your desired languages, and let our AI work its magic.
                </div>
                <div className="w-4/5 mt-12">
                    <div className="flex">
                        <div className="w-[352px] h-[352px] flex-col flex">
                            <div className="text-[24px] text-[#0A47F2] font-bold">
                                1
                            </div>
                            <div className="text-[40px] pr-5 font-bold pt-6 leading-[48px]">
                                Upload your video to the platform
                            </div>
                        </div>
                        <div className="bg-white grow rounded-[32px]"></div>
                    </div>
                    <div className="flex justify-between  mt-6">
                        <div className="w-[352px] h-[352px] bg-white rounded-[32px]"></div>
                        <div className="w-[352px] h-[352px] rounded-[32px] px-12 p-6">
                            <div className="text-[24px] text-[#0A47F2] font-bold ">
                                2
                            </div>
                            <div className="text-[40px] pr-5 font-bold pt-6 leading-[48px]">
                                Select the target languages for translation
                            </div>
                        </div>
                        <div className="w-[352px] h-[352px] bg-white rounded-[32px]"></div>
                    </div>
                    <div className="flex mt-6">
                        <div className="w-[728px] h-[352px] bg-white rounded-[32px]"></div>
                        <div className="w-[352px] h-[352px] rounded-[32px] px-12 p-6">
                            <div className="text-[24px] text-[#0A47F2] font-bold ">
                                3
                            </div>
                            <div className="text-[40px] pr-5 font-bold pt-6 leading-[48px]">
                                Our AI processes the video
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-6">
                        <div className="w-[352px] h-[352px] rounded-[32px] px-6 p-6">
                            <div className="text-[24px] text-[#0A47F2] font-bold ">
                                4
                            </div>
                            <div className="text-[40px] pr-5 font-bold pt-6 leading-[48px]">
                            Review and download the translated video
                            </div>
                        </div>
                        <div className="w-[728px] h-[352px] bg-white rounded-[32px]"></div>

                    </div>
                </div>

            </div>

        </>)
}

export default Guide