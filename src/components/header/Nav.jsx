// components
import PrimaryBtn from "../button/PrimaryBtn";

function Nav() {
  return (
    <>
      <nav className="font-sans flex justify-center flex-col font-semibold">
        <ul className="flex justify-between items-center flex-col text-xl tracking-wide sm:max-md:block">
          <li className="p-4">
            <a href="#home">HOME</a>
          </li>
          <li className="p-4">
            <a href="#about">ABOUT</a>
          </li>
          <li className="p-4">
            <a href="#projects">PROJECTS</a>
          </li>
          <li className="p-4">
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
    </>
  );
}

export default Nav;
