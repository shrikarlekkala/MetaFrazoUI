import React from 'react'

function EmailBar() {
    return (
        <>
            <div
                style={{
                    boxShadow: "0px 0px 64px 0px #0A47F226"
                }}
                className="w-[728px] flex rounded-full bg-white h-[67px] justify-between items-center ">
                <div className="text-[18px] px-[32px] text-[#0E0E0C] opacity-50 font-satoshiMed">E-mail</div>
                <div className="text-[18px] h-[59px] font-bold font-satoshi bg-[#0A47F2] flex items-center justify-center text-white rounded-full w-[107px] mr-1">Send</div>
            </div>
        </>)
}

export default EmailBar