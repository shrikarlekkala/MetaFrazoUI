import React from 'react'

function NavBar() {
    const navItems = [
        {title:'Products',href:'#',className:"text-[#0A47F2]"},
        {title:'Features',href:'#',className:"text-[#]"},
        {title:'Benefits',href:'#',className:"text-[#]"},
        {title:'Pricing',href:'#',className:"text-[#]"},
        {title:'Contact Us',href:'#',className:"text-[#"},

    ]
    return (
        <>
            <div className="bg-white w-4/5 flex p-4 rounded-full justify-center items-center z-10">
                <div className="logo">
                    <img src="assets/Frame 4.png" alt="logo" className='w-32' />
                </div>
                <div className="flex flex-grow justify-center">
                    {navItems.map((item,index)=>(
                        <a key={index} className={item.className + " mx-4 text-sm font-medium"}>{item.title}</a>
                    ))}

                </div>
                <div className="flex justify-center items-center">
                    <div className="text-sm font-medium mx-2">Login</div>
                    <div className="text-sm font-medium mx-2 bg-[#0A47F2] text-white px-[25px] py-[10px] rounded-full">Sign Up</div>
                </div>
            </div>
        </>
    )
}

export default NavBar