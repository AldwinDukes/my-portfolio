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
        <header className="flex justify-center items-center h-full">
          <button
            className="hover:cursor-pointer absolute left-2 top-2"
            onClick={toggleTheme}
            aria-label="darkMode switch button"
          >
            {theme === "light" ? (
              <MdOutlineNightlight size={30} />
            ) : (
              <MdOutlineLightMode size={30} />
            )}
          </button>

          <div className="flex justify-end absolute right-2 top-2">
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
          </div>

          <div
            className={`"flex justify-center h-[50%] w-full rounded-md bg-gray-600/30 backdrop-blur-sm" ${isMenuOpen ? "flex" : "hidden"}`}
          >
            <Nav />
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
