import { useState } from "react";

// components
import Nav from "./components/header/Nav";
import PrimaryBtn from "./components/button/PrimaryBtn";

// icons
import {
  MdOutlineLightMode,
  MdOutlineNightlight,
  MdEmail,
} from "react-icons/md";
import { IoMenu, IoCloseOutline, IoLogoGithub } from "react-icons/io5";
import { FaInstagram, FaReact, FaNodeJs, FaJs } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

function App() {
  const [theme, setTheme] = useState("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="App p-4 font-base" id={theme}>
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

          <button>
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
            className={`"flex justify-center w-full absolute p-4 top-10 flex-col backdrop-blur-md" ${theme === "dark" ? "bg-darkMode/90" : "bg-lightMode/90"} ${isMenuOpen ? "flex" : "hidden"}`}
          >
            <Nav />
            <div className="flex mt-8 justify-center gap-4">
              <button className="p-3">
                <IoLogoGithub size={24} />
              </button>

              <button className="p-3">
                <FaInstagram size={24} />
              </button>

              <button className="p-3">
                <MdEmail size={24} />
              </button>

              <button className="p-3">
                <FaLinkedin size={24} />
              </button>
            </div>
          </div>
        </header>

        <main>
          <section className="pt-8 mb-8">
            <p className="text-vivid-pink mb-2">Hi, my name is</p>
            <h1 className="font-bold text-2xl mb-2">Aldwin Duque</h1>
            <p className="mb-8">
              I'm a junior web developer currently focusing in building and
              designing digital experiences.
            </p>

            <PrimaryBtn btnName="CONTACT" />
          </section>

          <section className="mb-8">
            <hr className="text-vivid-pink mb-4" />
            <h2 className="font-bold mb-4 text-xl">About me</h2>
            <p className="mb-4">
              I’m currently learning design skills to apply them through app/web
              development. Creative expression is what lights me up, and I'm
              always open to learning about new opportunities.
            </p>
            <p className="mb-2">
              Here are a few tools I’ve been working with recently:
            </p>

            <ul className="flex justify-around mb-8">
              <li className="flex gap-x-2 items-center">
                <FaReact />
                React
              </li>
              <li className="flex gap-x-2 items-center">
                <FaNodeJs />
                Node.js
              </li>
              <li className="flex gap-x-2 items-center">
                <FaJs />
                Javascript
              </li>
            </ul>
            <div className="border border-vivid-pink p-8">
              <img src="src\assets\profile.jpg" alt="profile-img" />
            </div>
          </section>

          <section className="mb-8">
            <hr className="text-vivid-pink mb-4" />
            <h2 className="font-bold mb-4 text-xl">Some of my projects</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-vivid-pink p-16"></div>
              <div className="border border-vivid-pink p-16"></div>
              <div className="border border-vivid-pink p-16"></div>
              <div className="border border-vivid-pink p-16"></div>
            </div>
          </section>

          <section>
            <h2 className="font-bold mb-4 text-xl text-center">
              I'd love to Connect with You.
            </h2>
            <p className="text-center mb-2">
              Let me get to know more about you.
            </p>
            <hr className="text-vivid-pink mb-8" />
            <div className="flex justify-center">
              <PrimaryBtn btnName="Get in touch" />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
