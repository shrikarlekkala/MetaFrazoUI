import React from 'react'

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
                    <div className="w-[540px] h-[408px] bg-white rounded-[32px] m-3"></div>
                    <div className="w-[540px] h-[408px] bg-white rounded-[32px] m-3"></div>
                    <div className="w-[540px] h-[408px] bg-white rounded-[32px] m-3"></div>
                    <div className="w-[540px] h-[408px] bg-white rounded-[32px] m-3"></div>
                </div>
                <div
                    style={{
                        boxShadow: "0px 0px 25px 10px #3277F826",
                        background: "linear-gradient(0deg, #0A47F2 79.79%, #B5C9FF 122.34%),radial-gradient(342.89% 359.97% at 49.74% 48.94%, rgba(10, 71, 242, 0.5) 0%, rgba(181, 201, 255, 0.5) 100%)"


                    }}
                    className="w-[354px] bg-[#0A47F2] h-[51px] rounded-[16px] flex justify-center items-center text-white">Get Started Now</div>
            </div>
        </>
    )
}

export default Benefits