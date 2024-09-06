import React from 'react'

function ReviewCard() {
    return (
        <>
            <div className="flex-none w-[724px] h-[487px] bg-white rounded-[32px] flex flex-col justify-around p-16 text-black">
                <img src="assets/stars.png" alt="" srcset="" className='w-[150px]' />
                <div className="text-[20px] font-satoshiMed">
                    “We were impressed by the sophisticated and advanced AI application and the authentic translation and dubbing of the videos, especially the lip synchronisation and screen text translation.”
                </div>
                <div className="flex items-center">
                    <div className="bg-black rounded-full w-[48px] h-[48px]"></div>
                    <div className="flex flex-col mx-2">
                        <div className="text-[18px]  font-satoshiMed">Name Surname</div>
                        <div className="text-[18px] text-[#0A47F2] font-satoshiMed">Position</div>
                    </div>
                </div>
            </div>
        </>)
}

export default ReviewCard