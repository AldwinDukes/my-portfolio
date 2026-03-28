import { useState } from "react";
// components
import Nav from "./components/header/Nav";
// icons
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
import { IoMenu, IoCloseOutline } from "react-icons/io5";

function App() {
  const [theme, setTheme] = useState("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="App h-screen p-4" id={theme}>
        <header className="flex justify-between">
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
        </header>
        <div
          className={`${isMenuOpen ? "flex" : "hidden"} "flex justify-center items-center"`}
        >
          <Nav />
        </div>
      </div>
    </>
  );
}

export default App;

// show the menu button and give it an onclick event pass the setMenuIsOpen
// If menuIsOpen hide the menu icon and show the navbar : show and hide the navBar

// TODO : center the nav
