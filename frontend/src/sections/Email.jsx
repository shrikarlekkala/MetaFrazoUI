import React from 'react'
import EmailBar from '../components/EmailBar'

function Email() {
    return (
        <>
            <div className=" bg-[#F0F3F6] h-[757px] w-full flex flex-col items-center justify-center">
                <div className="text-[56px] font-bold my-6 text-center leading-[67px]">Want to hear from us or need <br /> more info?</div>
                <div className="text-[20px] text-center">
                    Drop your email here, and we’ll get back to you with the latest <br /> updates and any help you need!
                </div>
                <div className="mt-16">

                    <EmailBar />
                </div>
            </div>

        </>)
}

export default Email