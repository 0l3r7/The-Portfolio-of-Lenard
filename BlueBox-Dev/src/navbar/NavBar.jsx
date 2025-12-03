import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from './LOGO/Logo.png'


function Navbar() {


    const [nav, setNav] = useState(false);
    // Toggle mobile navigation
    const handleNav = () => setNav(!nav);


  return (
    <>
     <div className=' flex justify-between fixed z-50 w-full text-white bg-black/80 items-center h-25 px-10 mx-auto max-w-auto'>
        <div className=' flex flex-row items-center '>
            <img 
            src={Logo} 
            alt="" 
            className='w-[110px] cursor-pointer hidden lg:flex 
            hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]'
            /> 
            <h1 className='text-4xl font-FD cursor-pointer hover:text-blue-600 drop-shadow-[0_0_10px_#3B82F6]'>LENARD.</h1>
        </div>
        
        <div className='hidden md:flex'>
            <ul className='flex gap-2 text-lg pt-5 uppercase cursor-pointer '>
                <li className='p-4 hover:font-bold hover:text-blue-600'>
                    <a href="#hero">Home</a>
                </li>
                <li className='p-4 hover:font-bold hover:text-blue-600'>
                    <a href="#projects">Project</a>
                </li>
                <li className='p-4 hover:font-bold hover:text-blue-600'>
                    <a href="#skills">Skills</a>
                </li>
                <li className='p-4 hover:font-bold hover:text-blue-600'>
                    <a href="#contact">Contact</a>
                </li>
                 <ReactTyped 
                    className=' p-4 font-FD hover:font-black hover:text-blue-600
                                w-[250px] text-center whitespace-nowrap border
                                drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]
                                transition-all duration-100
                                cursor-pointer'
                    strings={[
                    "Let’s Go!", 
                    "Allons-y!", 
                    "Here We Go!",
                    "Let’s Do This!",
                    "Game On!",
                    "Onward!!",
                    "Make It Happen",
                    "Jump In!",
                    "Onward!!",
                    "Go Time",
                    "Let’s Work Together",
                    "Build With Me",
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                    />
            </ul>
        </div>

        {/* Mobile Menu Toggle (hamburger / close icon) */}
      <div onClick={handleNav} className="md:hidden block">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-blue-950 bg-[#000300] shadow-2xl ease-in-out duration-500 md:hidden "
            : "fixed -left-full"
        }>
            <div className=' flex flex-row items-center border-b-10 border-[#00203c]'>
            <img 
            src={Logo} 
            alt="" 
            className='w-[100px] cursor-pointer 
            hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]'
            /> 
            <h1 className='text-3xl font-FD cursor-pointer hover:text-blue-600 '>LENARD.</h1>
        </div>

            <ul className='flex flex-col gap-2 text-lg pt-5 uppercase cursor-pointer  items-center '>
                <li className='p-4 hover:font-bold hover:text-blue-600'>
                    <a href="#hero">Home</a>
                </li>
                <li className='p-4 hover:font-bold hover:text-blue-600'>
                    <a href="#projects">Project</a>
                </li>
                <li className='p-4 hover:font-bold hover:text-blue-600'>
                    <a href="#skills">Skills</a>
                </li>
                <li className='p-4 hover:font-bold hover:text-blue-600'>
                    <a href="#contact">Contact</a>
                </li>
                 <ReactTyped 
                    className=' p-4 font-FD hover:font-black hover:text-blue-600
                                w-[220px] text-center whitespace-nowrap border
                                drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]
                                transition-all duration-100
                                cursor-pointer'
                    strings={[
                    "Let’s Go!", 
                    "Allons-y!", 
                    "Here We Go!",
                    "Let’s Do This!",
                    "Game On!",
                    "Onward!!",
                    "Make It Happen",
                    "Jump In!",
                    "Onward!!",
                    "Go Time",
                    "Let’s Work ",
                    "Build With Me",
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                    />
            </ul>

        </div>
        </div>
    </>
   
  )
}

export default Navbar