import React, { useEffect, useState } from 'react'

function Question() {
    const [height, setheight] = useState("h-[0px] scale-0");
    const handleClick = () => {
        setheight("h-[296px] scale-100");
    }

    return (
        <>
            <div className={"flex-col w-4/5 max-w-[1104px] bg-white  rounded-[32px] flex items-center justify-between px-6 duration-200"}>
                <div className="flex items-center justify-between w-full h-[78px]">

                    <div className="text-[20px] font-bold">Question</div>
                    <svg onClick={handleClick} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="11" width="2" height="24" rx="1" fill="#0E0E0C" />
                        <rect x="24" y="11" width="2" height="24" rx="1" transform="rotate(90 24 11)" fill="#0E0E0C" />
                    </svg>
                </div>
                <div className={height + " w-full duration-200"}>
                    
                </div>

            </div>
        </>)
}

export default Question