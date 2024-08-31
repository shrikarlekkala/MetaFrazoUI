import React from 'react'
import Question from '../components/Question'

function FAQ() {
    return (
        <>

            <div className="bg-[#F0F3F6] py-40 text-black flex flex-col items-center justify-center">
                <img src="assets/FAQ.png" alt="" srcset="" className='w-[48px]' />
                <div className="text-[56px] font-bold my-6">Questions & Answers</div>
                <div className="text-[20px] text-center">Find answers to common questions about MetaFrazo. We’ve got you covered on everything <br /> from how the platform works to tips for getting the best results.</div>
                <div className="flex flex-col w-full items-center justify-center mt-16 space-y-6">
                    <Question/>
                    <Question/>
                    <Question/>
                    <Question/>
                    <Question/>
                    <Question/>
                </div>
            </div>

        </>)
}

export default FAQ