import React from 'react'
import UploadBtn from '../components/UploadBtn'

function Products() {
    return (
        <>
            <div id='products' className="mb-14 relative min-h-screen w-full bg-black flex-col flex justify-center items-center">
                <div className="lg:text-[64px] text-3xl px-4 text-center font-montserrat font-bold text-white">
                    Bring Your Videos to Life
                </div>
                <div className="flex flex-wrap items-center justify-center text-white mt-20">
                    <div className="flex-col hover:scale-105 duration-200 p-4 w-72 h-96 bg-[#181818] rounded-md justify-center items-center flex">
                        <div className="text-[36px]">
                            LipSync
                        </div>
                        <svg className='my-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" color="#fff" fill="none">
                            <path d="M5.5 3.5L5.5 14.5C5.5 18.2133 8.18503 21 12 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M18.5 20.5L18.5 9.5C18.5 5.78672 15.815 3 12 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M21 18C21 18 19.1588 20.5 18.5 20.5C17.8412 20.5 16 18 16 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8 5.50022C8 5.50022 6.15878 3.00025 5.49998 3.00024C4.84118 3.00024 3 5.50024 3 5.50024" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div className="text-[14px] font-montserrat text-center">
                            Synchronize lips to audio in any video. You bring your own audio and video, we give you back the lips synced.

                        </div>
                        <div className="scale-75">

                            <UploadBtn />
                        </div>


                    </div>
                    <div className="flex-col hover:scale-105 duration-200 lg:mx-20 my-4 p-4 w-72 h-96 bg-[#181818] rounded-md justify-center items-center flex">
                        <div className="text-[36px]">
                            Create
                        </div>

                        <svg className='my-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" color="#fff" fill="none">
                            <path d="M22 14V10C22 6.22876 22 4.34315 20.8284 3.17157C19.6569 2 17.7712 2 14 2H12C8.22876 2 6.34315 2 5.17157 3.17157C4 4.34315 4 6.22876 4 10V14C4 17.7712 4 19.6569 5.17157 20.8284C6.34315 22 8.22876 22 12 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14Z" stroke="currentColor" stroke-width="1.5" />
                            <path d="M5 6L2 6M5 12H2M5 18H2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.5 7L13.5 7M15.5 11H13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9 22L9 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div className="text-[14px] font-montserrat text-center">
                            Upload a script, along with a voice and a video. We return the video with the person in the video saying the script.
                        </div>
                        <div className="scale-75">

                            <UploadBtn />
                        </div>


                    </div>
                    <div className="flex-col hover:scale-105 duration-200 p-4 w-72 h-96 bg-[#181818] rounded-md justify-center items-center flex">
                        <div className="text-[36px]">
                            Translate
                        </div>

                        <svg className='my-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" color="#fff" fill="none">
                            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 9.20746 3.14465 6.68227 4.99037 4.86802M12 22C11.037 21.2864 11.1907 20.4555 11.6738 19.6247C12.4166 18.3474 12.4166 18.3474 12.4166 16.6444C12.4166 14.9414 13.4286 14.1429 17 14.8571C18.6047 15.1781 19.7741 12.9609 21.8573 13.693M12 22C16.9458 22 21.053 18.4096 21.8573 13.693M21.8573 13.693C21.9511 13.1427 22 12.5771 22 12C22 7.11857 18.5024 3.05405 13.8766 2.17579M13.8766 2.17579C14.3872 3.11599 14.1816 4.23551 13.1027 4.66298C11.3429 5.3603 12.6029 6.64343 11.1035 7.4356C10.1038 7.96372 8.6044 7.83152 7.10496 6.24716C6.31517 5.41264 5.83966 4.95765 4.99037 4.86802M13.8766 2.17579C13.2687 2.06039 12.6414 2 12 2C9.26969 2 6.79495 3.09421 4.99037 4.86802" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                        </svg>
                        <div className="text-[14px] font-montserrat text-center">
                            Upload any video, select an input and target language. Submit and receive translated vid with lip sync and voice clone.
                        </div>
                        <div className="scale-75">

                            <UploadBtn />
                        </div>


                    </div>
                </div>
            </div>
        </>)
}

export default Products