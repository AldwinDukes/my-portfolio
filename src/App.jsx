import { useState } from "react";

// components
import NavigationBar from "./components/header/HeaderNav";
import PrimaryBtn from "./components/button/PrimaryBtn";
import TextType from "./components/animation/Typing";

// icons

import { FaReact, FaNodeJs, FaJs } from "react-icons/fa";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="App p-4 font-base md:px-12 md:text-lg" id={theme}>
        <NavigationBar toggleTheme={toggleTheme} theme={theme} />
        <main>
          <section className="pt-8 mb-8" id="home">
            <p className="text-vivid-pink mb-2">Hi, my name is</p>
            <h1 className="font-bold text-2xl mb-2 md:text-4xl">
              Aldwin Duque
            </h1>
            <div className="mb-6 h-14">
              <TextType
                text={[
                  "I'm a junior web developer currently focusing in building and designing digital experiences.",
                ]}
                typingSpeed={80}
                pauseDuration={1500}
                showCursor
                cursorCharacter=""
                variableSpeedEnabled={false}
                variableSpeedMin={60}
                variableSpeedMax={120}
                cursorBlinkDuration={0.5}
              />
            </div>
            <a href="mailto:aldwindukes@gmail.com">
              <PrimaryBtn btnName="CONTACT" />
            </a>
          </section>

          <section className="mb-8" id="about">
            <hr className="text-vivid-pink mb-4" />
            <h2 className="font-bold mb-4 text-xl md:text-3xl">About me</h2>
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

          <section className="mb-8" id="projects">
            <hr className="text-vivid-pink mb-4" />
            <h2 className="font-bold mb-4 text-xl md:text-3xl">
              Some of my projects
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-vivid-pink p-16 md:p-24"></div>
              <div className="border border-vivid-pink p-16 md:p-24"></div>
              <div className="border border-vivid-pink p-16 md:p-24"></div>
              <div className="border border-vivid-pink p-16 md:p-24"></div>
            </div>
          </section>

          <section id="contact">
            <h2 className="font-bold mb-4 text-xl text-center md:text-3xl">
              I'd love to Connect with You.
            </h2>
            <p className="text-center mb-2">
              Let me get to know more about you.
            </p>
            <hr className="text-vivid-pink mb-8" />
            <div className="flex justify-center">
              <a href="mailto:aldwindukes@gmail.com">
                <PrimaryBtn btnName="Get in touch" />
              </a>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
