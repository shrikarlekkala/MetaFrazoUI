import React from 'react'

function Tesimonials_Card(props) {
    return (
        <>
            <div className="flex flex-col mx-[10px] bg-white p-8 rounded-[32px] w-[352px] h-[167px] justify-between">
                <div className="text-[40px] font-bold text-[#0A47F2]">
                    {props.percentage}
                </div>
                <div className="text-[18px]">
                    {props.text}
                </div>
            </div>
        </>)
}

export default Tesimonials_Card