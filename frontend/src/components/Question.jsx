import React from 'react'

function Question() {
    return (
        <>
            <div className="w-4/5 max-w-[1104px] bg-white h-[78px] rounded-[32px] flex items-center justify-between px-6">
                <div className="text-[20px] font-bold">Question</div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="11" width="2" height="24" rx="1" fill="#0E0E0C" />
                    <rect x="24" y="11" width="2" height="24" rx="1" transform="rotate(90 24 11)" fill="#0E0E0C" />
                </svg>

            </div>
        </>)
}

export default Question