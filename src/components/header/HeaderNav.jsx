// components
import { useState } from "react";
import PrimaryBtn from "../button/PrimaryBtn";
import Socmed from "../button/Socmed";

import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
import { IoMenu, IoCloseOutline } from "react-icons/io5";

function NavigationBar({ toggleTheme, theme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  return (
    <>
      <header className="p-2 relative flex justify-between lg:p-4 xl:pl-14 lg:fixed lg:w-full">
        <button
          className="hover:cursor-pointer"
          onClick={toggleTheme}
          aria-label="darkMode switch"
        >
          {theme === "light" ? (
            <MdOutlineNightlight size={30} />
          ) : (
            <MdOutlineLightMode size={30} />
          )}
        </button>

        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <IoCloseOutline size={30} aria-label="close menu button" />
          ) : (
            <IoMenu size={30} aria-label="open menu button" />
          )}
        </button>

        {/* todo: NEED TO FIX THE ISMENUOPEN STATE IT MUST BE AUTO OPEN ON LARGE SCREEN */}
        <div
          className={`items-center justify-center w-full absolute p-4 left-0 top-10 backdrop-blur-none ${theme === "dark" ? "bg-darkMode/90" : "bg-lightMode/90"} ${isMenuOpen ? "flex" : "hidden"} 
          lg:static lg:w-auto lg:items-end lg:p-0 lg:bg-transparent`}
        >
          <nav className="font-sans flex justify-center flex-col font-semibold lg:flex-row lg:items-center">
            <ul className="tracking-wide sm:max-md:block lg:flex">
              <li className="p-4 text-center">
                <a href="#home">HOME</a>
              </li>
              <li className="p-4 text-center">
                <a href="#about">ABOUT</a>
              </li>
              <li className="p-4 text-center">
                <a href="#projects">PROJECTS</a>
              </li>
              <li className="p-4 text-center">
                <a href="#contact">CONTACT</a>
              </li>
            </ul>

            <div className="flex justify-center items-center mt-2 lg:mt-0">
              <a
                href="https://drive.google.com/file/d/15SQdc5WBrVmQ5-7XZU9uPR2ZEyfw9Pn5/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PrimaryBtn btnName="RESUME" />
              </a>
            </div>
            <div className="lg:left-20 lg:top-110 lg:fixed xl:left-12">
              <Socmed />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default NavigationBar;
