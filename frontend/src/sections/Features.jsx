import React from 'react'

function Features() {
    return (
        <>
            <div className="w-full flex bg-[#F0F3F6] flex-col justify-center items-center py-16">
                <img src="assets/Crown.png" alt="" srcset="" className='w-[48px]' />
                <img src="assets/WithMF.png" alt="" srcset="" className='w-[322px] my-[24px]' />
                <div className="text-[20px] text-center">
                    You can now easily translate any video content into multiple languages with just a few clicks. <br />No more struggling to understand foreign videos or spending hours on manual translations.
                </div>
                <div className="flex w-4/5 mt-[48px]">
                    <div className="w-[352px] bg-white h-[622px] rounded-[32px]"></div>
                    <div className="grow  flex-col flex ml-6">
                        <div className="w-full bg-white h-[299px] rounded-[32px]"></div>
                        <div className="w-full bg-white h-[299px] rounded-[32px] mt-6"></div>
                    </div>

                </div> 
                <div className="flex w-4/5 mt-[24px]">
                    <div className="grow bg-white h-[622px] rounded-[32px]"></div>
                    
                    <div className=" w-[352px] bg-white h-[622px] ml-6 rounded-[32px]"></div>
                        
                    
                </div>
            </div>

        </>)
}

export default Features