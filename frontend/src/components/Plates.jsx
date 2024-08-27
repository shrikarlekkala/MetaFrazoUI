import React from 'react'
import IgCard from './IgCard'
import TiktokCard from './TiktokCard'
import YoutubeCard from './YoutubeCard'

function Plates() {
    return (
        <>
            <div className="flex w-full flex-wrap justify-center lg:mt-14">
                <div className="lg:absolute scale-75 lg:scale-100 scal lg:transform lg:-translate-x-72 z-20 -rotate-[6deg] lg:-translate-y-8 hover:rotate-0 duration-200">
                    <IgCard />
                </div>
                <div className="lg:absolute scale-75 lg:scale-100 transform lg:-translate-x-0 z-0" >
                    <TiktokCard />
                </div>
                <div className="lg:absolute scale-75 lg:scale-100 transform lg:translate-x-72 z-20 lg:-rotate-[6deg] rotate-[6deg] lg:-translate-y-16 translate-y-0 hover:rotate-0 duration-200">
                    <YoutubeCard />
                </div>
            </div>
        </>
    )
}

export default Plates