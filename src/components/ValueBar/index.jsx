import React from 'react'

import shield from '../../assets/shield.png' //src\assets\shield.png
//https://htmlcolorcodes.com/

function ValueBar() {
    return (
        <div className='mt-10 flex flex-col gap-5 items-center justify-center text-white'>
            <h1 className='text-5xl font-bold'>The value that holds us true and to account</h1>
            
            <div className='grid gap-[10rem] grid-cols-3 items-center flex justify-between items-center p-[3rem]'>

                <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
                    <div className='flex items-center gap-3'>
                        <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
                            <img src={shield} alt="" className='w-[70%]' />
                        </div>

                        <span className='font-semibold text-textColor text-[18px]'>
                            Simplicity
                        </span>
                    </div>

                    <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
                        Things beinf made beautiful simple are at the heart of everything we do.
                    </p>
                </div>

                <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
                    <div className='flex items-center gap-3'>
                        <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
                            <img src={shield} alt="" className='w-[70%]' />
                        </div>

                        <span className='font-semibold text-textColor text-[18px]'>
                            Friendly
                        </span>
                    </div>

                    <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
                        We believe in making things better for everyone, even if just by a little bit.
                    </p>
                </div>

                <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
                    <div className='flex items-center gap-3'>
                        <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center'>
                            <img src={shield} alt="" className='w-[70%]' />
                        </div>

                        <span className='font-semibold text-textColor text-[18px]'>
                            Security
                        </span>
                    </div>

                    <p className='text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold'>
                        We work on the basis of creating trust which can be nurtured through authenticity and transparency.
                    </p>
                </div>
            </div>

            <div className="card mt-[2rem] flex justify-between bg-blueColor p-[5rem] rounded-[10px]">
                <div >
                    <h1 className='text-black text-[30px] font-bold'>Ready to switch a career? </h1>
                    <h2 className='text-[#5D6D7E] text-[25px] font-bold'>Let's get started!</h2>
                </div>

                <button className='border-[2px] rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-black hover:bg-white border-blueColor'>
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default ValueBar