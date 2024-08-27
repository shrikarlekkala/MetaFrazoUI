import React from 'react'
import NavBar from '../components/NavBar'
import MainText from '../components/MainText'
import UploadBtn from '../components/UploadBtn'
import Plates from '../components/Plates'

export default function Hero() {
    return (
        <>
            <div className=" h-screen w-full px-10 flex flex-col justify-center items-center">
                <NavBar />
                <MainText />
                <div className="my-5 hover:scale-110 duration-150 cursor-pointer ">

                    <UploadBtn />
                </div>
                <Plates />
                <img src="bg.jpg" alt="" srcset="" className='absolute -z-10 brightness-50	' />
            </div>
        </>
    )
}
