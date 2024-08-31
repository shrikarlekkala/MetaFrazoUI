import React from 'react'

function PriceCard() {
    return (
        <>
            <div className="w-[352px] h-[698px] bg-white rounded-[32px] flex flex-col text-black items-center justify-around p-8">
                <div>
                    <div className="text-[40px] font-bold flex items-center justify-center">
                        Creators
                    </div>
                    <div className="text-[18px] text-center">For course creators who need efficient translation</div>
                </div>
                <div className="flex justify-end items-center text-[#0A47F2] ">
                    <span className='text-[40px] font-bold'>$3</span>
                    <span className='text-[18px]'>/minute</span>
                </div>
                <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-2">
                        <div className='bg-black w-4 h-4 text-white rounded-full flex items-center justify-center'>
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5 3.59375L4.15625 6.6875L8.84375 2" stroke="white" stroke-linecap="round" />
                            </svg>

                        </div>
                        <div>60+ Language Translation</div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className='bg-black w-4 h-4 text-white rounded-full flex items-center justify-center'>
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5 3.59375L4.15625 6.6875L8.84375 2" stroke="white" stroke-linecap="round" />
                            </svg>

                        </div>
                        <div>No Watermark</div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className='bg-black w-4 h-4 text-white rounded-full flex items-center justify-center'>
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5 3.59375L4.15625 6.6875L8.84375 2" stroke="white" stroke-linecap="round" />
                            </svg>

                        </div>
                        <div>AI Translation lip dub</div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className='bg-black w-4 h-4 text-white rounded-full flex items-center justify-center'>
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.5 3.59375L4.15625 6.6875L8.84375 2" stroke="white" stroke-linecap="round" />
                            </svg>

                        </div>
                        <div>Process up to 3 videos at a time</div>
                    </div>

                </div>
                <div className="bg-[#0A47F2] w-[190px] h-[51px] flex items-center justify-center rounded-[16px] text-white font-bold">
                    Get Started Now
                </div>
            </div>

        </>
    )
}

export default PriceCard