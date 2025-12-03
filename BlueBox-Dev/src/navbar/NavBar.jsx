import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from './LOGO/Logo.png';

function Navbar() {

  const [nav, setNav] = useState(false);
  const [active, setActive] = useState("hero"); // track active section

  // Toggle mobile navigation
  const handleNav = () => setNav(!nav);

  //  Detect active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "skills", "projects", "contact"];

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //  Style for nav links
  const navStyle = (id) =>
    `p-4 transition-all duration-300 cursor-pointer uppercase
    ${
      active === id
        ? "font-bold text-blue-400 scale-110 drop-shadow-[0_0_12px_#3B82F6]"
        : "hover:font-bold hover:text-blue-600 hover:drop-shadow-[0_0_6px_#60A5FA]"
    }`;

  return (
    <>
      <div className="flex justify-between fixed z-50 w-full text-white bg-black/80 items-center h-25 px-10 mx-auto">

        {/* LOGO */}
        <div className="flex flex-row items-center">
         <a href="#hero"> <img
            src={Logo}
            alt="Logo"
            className="w-[110px] cursor-pointer hidden lg:flex 
            hover:drop-shadow-[0_0_10px_#3B82F6]"
          /></a>
          <h1 className="text-4xl font-FD cursor-pointer 
          hover:text-blue-600 drop-shadow-[0_0_10px_#3B82F6]">
            <a href="#hero">LENARD.</a>
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex">
          <ul className="flex gap-2 text-lg pt-5">

            <li className={navStyle("hero")}>
              <a href="#hero">Home</a>
            </li>

            <li className={navStyle("skills")}>
              <a href="#skills">Skills</a>
            </li>

            <li className={navStyle("projects")}>
              <a href="#projects">Project</a>
            </li>

            <li className={navStyle("contact")}>
              <a href="#contact">Contact</a>
            </li>

          {/* Typed Button */}
            <a href="#connect">
            <ReactTyped
                className="
                w-[250px]  p-4 flex items-center justify-center
                font-FD hover:font-black hover:text-blue-600
                border drop-shadow-[0_0_10px_#3B82F6]
                text-center whitespace-nowrap
                transition-all duration-150 cursor-pointer
                "
                strings={[
                "Let’s Go!",
                "Allons-y!",
                "Here We Go!",
                "Let’s Do This!",
                "Game On!",
                "Onward!!",
                "Make It Happen",
                "Jump In!",
                "Go Time",
                "Let’s Work Together",
                "Build With Me",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
            />
            </a>


          </ul>
        </div>

        {/* MOBILE HAMBURGER */}
        <div onClick={handleNav} className="md:hidden block">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        {/* MOBILE MENU */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-blue-950 bg-[#000300] shadow-2xl ease-in-out duration-500 md:hidden"
              : "fixed -left-full"
          }
        >

          {/* MOBILE LOGO */}
          <div className="flex flex-row items-center">
            <img
              src={Logo}
              alt="Logo"
              className="w-[100px] cursor-pointer
              hover:drop-shadow-[0_0_10px_#3B82F6]"
            />
            <h1 className="text-3xl font-FD cursor-pointer hover:text-blue-600">
              LENARD.
            </h1>
          </div>

          {/* MOBILE LINKS */}
          <ul className="flex flex-col gap-2 text-lg pt-5 items-center">

            <li className={navStyle("hero")}>
              <a href="#hero">Home</a>
            </li>

            <li className={navStyle("skills")}>
              <a href="#skills">Skills</a>
            </li>

            <li className={navStyle("projects")}>
              <a href="#projects">Project</a>
            </li>

            <li className={navStyle("contact")}>
              <a href="#contact">Contact</a>
            </li>

            {/* Typed Mobile */}
            <ReactTyped
              className="p-4 font-FD hover:font-black hover:text-blue-600
              w-[220px] text-center whitespace-nowrap border
              drop-shadow-[0_0_10px_#3B82F6]
              transition-all duration-150 cursor-pointer"
              strings={[
                "Let’s Go!",
                "Allons-y!",
                "Here We Go!",
                "Let’s Do This!",
                "Game On!",
                "Onward!!",
                "Make It Happen",
                "Jump In!",
                "Go Time",
                "Let’s Work",
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
  );
}

export default Navbar;
