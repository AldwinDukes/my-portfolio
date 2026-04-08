// components
import { useState } from "react";
import PrimaryBtn from "../button/PrimaryBtn";

import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
import { IoMenu, IoCloseOutline } from "react-icons/io5";

function NavigationBar({ toggleTheme, theme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className="flex justify-between relative">
        <button
          className="hover:cursor-pointer"
          onClick={toggleTheme}
          aria-label="darkMode switch button"
        >
          {theme === "light" ? (
            <MdOutlineNightlight size={30} />
          ) : (
            <MdOutlineLightMode size={30} />
          )}
        </button>

        <button className="lg:hidden">
          {isMenuOpen ? (
            <IoCloseOutline
              size={30}
              onClick={() => setIsMenuOpen(false)}
              aria-label="close menu button"
            />
          ) : (
            <IoMenu
              size={30}
              onClick={() => setIsMenuOpen(true)}
              aria-label="open menu button"
            />
          )}
        </button>

        <div
          className={`"rounded-md flex justify-center w-full absolute p-4 top-10 flex-col backdrop-blur-none" ${theme === "dark" ? "bg-darkMode/90" : "bg-lightMode/90"} ${isMenuOpen ? "flex" : "hidden"}`}
        >
          <nav className="font-sans flex justify-center flex-col font-semibold">
            <ul className="tracking-wide sm:max-md:block lg:flex-row">
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

            <div className="flex justify-center items-center mt-2">
              <a
                href="https://drive.google.com/file/d/15SQdc5WBrVmQ5-7XZU9uPR2ZEyfw9Pn5/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PrimaryBtn btnName="RESUME" />
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default NavigationBar;
