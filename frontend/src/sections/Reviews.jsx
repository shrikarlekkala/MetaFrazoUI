import React from 'react'
import ReviewCard from '../components/ReviewCard'

function Reviews() {
    return (
        <>
            <div className="bg-black w-full pt-20 flex flex-col items-center justify-center text-white">
                <img src="assets/Reviews.png" alt="" srcset="" className='w-[48px]' />
                <div className="text-[56px] font-bold my-6 font-satoshi">
                    Here’s what our users say
                </div>
                <div className="text-[20px] text-center font-satoshiMed">
                    Hear directly from our customers about how our platform has helped them save time, cut <br />
                    costs, and achieve accurate translations with ease.
                </div>
                <div className="w-full overflow-y-auto my-16">

                    <div className="flex space-x-4">
                        <div className='self-center'>

                            <ReviewCard />
                        </div>
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                    </div>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    <div className="bg-white w-[48px] h-[48px] rounded-full flex items-center justify-center">
                        <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.292893 7.29289C-0.097631 7.68342 -0.0976312 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928933C7.68054 0.538409 7.04738 0.538409 6.65686 0.928933L0.292893 7.29289ZM21 9C21.5523 9 22 8.55229 22 8C22 7.44772 21.5523 7 21 7L21 9ZM1 9L21 9L21 7L1 7L1 9Z" fill="#0E0E0C" />
                        </svg>

                    </div>
                    <div className="bg-white w-[48px] h-[48px] rounded-full flex items-center justify-center">
                        <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928932C14.9526 0.538407 14.3195 0.538407 13.9289 0.928932C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM1 7C0.447714 7 4.82823e-08 7.44771 0 8C-4.82823e-08 8.55228 0.447714 9 1 9L1 7ZM21 7L1 7L1 9L21 9L21 7Z" fill="#0E0E0C" />
                        </svg>

                    </div>
                </div>
            </div>
        </>)
}

export default Reviews