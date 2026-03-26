import { useState } from "react";
import Nav from "./components/header/nav";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="App h-screen" id={theme}>
        <header className="flex justify-between">
          <button onClick={toggleTheme} aria-label="darkMode switch button">
            {theme === "light" ? (
              <MdOutlineNightlight size={30} />
            ) : (
              <MdOutlineLightMode size={30} />
            )}
          </button>
          <Nav />
        </header>
      </div>
    </>
  );
}

export default App;
