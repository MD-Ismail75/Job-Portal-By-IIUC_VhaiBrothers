import React from 'react'


function Navbar() {
    return (
        <div className='navBar flex justify-between items-center p-[3rem]'>
            <div className='logoDiv'>
                <h1 className='logo text-[25px] text-white'>
                    <strong>Job</strong>Portal
                </h1>
            </div>

            <div className="menu flex gap-8">
                <li className="menuList text-[#6f6f6f] hover:text-[#2a68ff]" >Jobs</li>
                <li className="menuList text-[#6f6f6f] hover:text-[#2a68ff]" >Companies</li>
                <li className="menuList text-[#6f6f6f] hover:text-[#2a68ff]" >About</li>
                <li className="menuList text-[#6f6f6f] hover:text-[#2a68ff]" >Contact</li>
                <li className="menuList text-[#6f6f6f] hover:text-[#2a68ff]" >LogIn</li>
            </div>
        </div>
    )
}

export default Navbar