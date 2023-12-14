import React from 'react'

import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <div>
            <div className='footer p-[5rem] mb-4bg-blueColor rounded-[10px] gap-8 grid grid-cols-5 m-auto items-center justify-center'>
                <div>
                    <div className="logoDiv">
                        <h1 className="logo text-[25px] text-white pb-[1.5rem]">
                            <strong>Job</strong>Portal
                        </h1>
                    </div>
                    <p className='text-white pb-[13px] opacity-70 leading-7'>
                        We always make our seekers and companies find the best jobs and employers find the best candidates.
                    </p>
                </div>

                <div className='grid'>
                    <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
                        Company
                    </span>

                    <div className='grid gap-3'>
                        <li className='text-white capcity-[7] hover:opacity-[1]'>About Us</li>
                        <li className='text-white capcity-[7] hover:opacity-[1]'>Features</li>
                        <li className='text-white capcity-[7] hover:opacity-[1]'>News</li>
                        <li className='text-white capcity-[7] hover:opacity-[1]'>FAQ</li>
                    </div>
                </div>

                <div className='grid'>
                    <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
                        Resources
                    </span>

                    <div className='grid gap-3'>
                        <li className='text-white capcity-[7] hover:opacity-[1]'>Account</li>
                        <li className='text-white capcity-[7] hover:opacity-[1]'>Support Center</li>
                        <li className='text-white capcity-[7] hover:opacity-[1]'>Contact Us</li>
                        <li className='text-white capcity-[7] hover:opacity-[1]'>Feedback</li>
                    </div>
                </div>

                <div className='grid'>
                    <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
                        Support
                    </span>

                    <div className='grid gap-3'>
                        <li className='text-white capcity-[7] hover:opacity-[1]'>Events</li>
                        <li className='text-white capcity-[7] hover:opacity-[1]'>Promo</li>
                        <li className='text-white capcity-[7] hover:opacity-[1]'>Req Demo</li>
                        <li className='text-white capcity-[7] hover:opacity-[1]'>Careers</li>
                    </div>
                </div>

                <div className='grid'>
                    <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
                        Contact Us
                    </span>

                    <div>
                        <small className='text-[14px] text-white'> iiuc.vhaibrothers@gmail.com</small>
                        <div className='icons flex gap-4 py-[1rem]'>
                            <AiFillInstagram className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor' />
                            <BsFacebook className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor' />
                            <FaSquareXTwitter className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor' />
                            <FaLinkedin className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor' />
                        </div>
                    </div>
                </div>

            </div>

            <div className="mt-10 flex flex-col gap-5 items-center justify-center text-gray-400">
                <span>© 2023 Apply. All rights reserved to IIUC_VhaiBrothers.</span>
                <span>Terms · Privacy Policy</span>
            </div>

        </div>
    )
}

export default Footer